# Stylord

[![npm (scoped)](https://img.shields.io/npm/v/stylord.svg)](https://www.npmjs.com/package/stylord)
[![Travis](https://img.shields.io/travis/gugutz/stylord.svg)](https://travis-ci.org/gugutz/stylord)
[![Coveralls](https://img.shields.io/coveralls/gugutz/stylord.svg)](https://coveralls.io/github/gugutz/stylord?branch=master)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Javascript styles made easy.

Stylord provides a simple to declare your stylesheets inside the JavaScript files without [worrying about](http://i.imgur.com/Q3cUg29.gif) the CSS global scope.

-   Declare your css as simple [Object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals).
-   Works like a charm with any framework or with just [vanilla JavaScript](http://vanilla-js.com/).
-   Full support of [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) like `:hover` and [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) like `::after`.
-   Autoprefixer out-of-box.
-   Easy to use [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries), [keyframes animation](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) and [font-face](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@font-face).

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
    -   [Media Queries](#media-queries)
    -   [Pseudo-classes and pseudo-elements](#pseudo-classes-and-pseudo-elements)
    -   [Keyframes animation](#keyframes-animation)
    -   [Font-face](#font-face)
    -   [Globals](#globals)
-   [Support](#support)
-   [API](#api)
-   [Contributing](#contributing)
-   [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com).
Go check them out if you don't have them locally installed.

```sh
$ npm install --save-dev stylord
```

## Usage

```jsx
import {createStyles} from 'stylord'
import React, {Component} from 'react'

const style = createStyles({
  app: {
    color: 'blue',
    fontSize: '20px'
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

### Media queries

```jsx
import {createStyles} from 'stylord'
import React, {Component} from 'react'

const style = createStyles({
  app: {
    color: 'blue',
    '@media screen and (min-width: 300px)': {
      color: 'red'
    },
    '@media screen and (min-width: 600px)': {
      color: 'pink'
    },
    '@media screen and (min-width: 900px)': {
      color: 'yellow'
    }
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

### Pseudo-classes and pseudo-elements

```jsx
import {createStyles} from 'stylord'
import React, {Component} from 'react'

const style = createStyles({
  app: {
    color: 'blue',
    position: 'relative'
    ':hover': {
      color: 'red'
    },
    '::before': {
      backgroundColor: 'green',
      content: '""', // You must provide the content as it will be in the css
      display: 'block',
      left: 0,
      position: 'absolute',
      top: 0
    }
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

### Keyframes animation

```jsx
import {createStyles, createKeyframes} from 'stylord'
import React, {Component} from 'react'

// Animation taken from https://github.com/daneden/animate.css/blob/master/source/attention_seekers/bounce.css
const animations = createKeyframes({
  bounce: {
    'from, 20%, 53%, 80%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      transform: 'translate3d(0,0,0)'
    },
    '40%, 43%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
      transform: 'translate3d(0, -30px, 0)'
    }
    '70%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
      transform: 'translate3d(0, -15px, 0)'
    },
    '90%': {
      transform: 'translate3d(0,-4px,0)'
    }
  }
})

const style = createStyles({
  app: {
    animationDuration: '1s',
    animationFill-mode: 'both',
    animationName: animations.bounce,
    transformOrigin: 'center bottom'
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

### Font-face

```jsx
import {createStyles, createFontFace} from 'stylord'
import React, {Component} from 'react'

createFontFace({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'local("Roboto"), local("Roboto-Regular"), url(path/to/font/roboto.woff2) format("woff2")'
})

const style = createStyles({
  app: {
    color: 'blue',
    fontSize: '20px',
    fontFamily: '"Roboto", sans-serif'
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

### Globals

Stylord provide a simple way to handle global css rules, it's a very useful feature to reset the unwanted default css properties. But [with great power comes great responsibility](https://youtu.be/nhLyPH_KirE), so use it wisely.

```jsx
import {createStyles, createGlobals} from 'stylord'
import React, {Component} from 'react'

createGlobals({
  '*': {
    border: 0,
    margin: 0,
    padding: 0
  },
  '*, *::after, *::before': {
    boxSizing: border-box
  }
})

const style = createStyles({
  app: {
    color: 'blue',
    fontSize: '20px'
  }
})

class App extends Component {
  render() {
    return <div className={style.app}>
      Hello World
    </div>
  }
}
```

## Support

[![Build Status](https://saucelabs.com/browser-matrix/stylord.svg)](https://saucelabs.com/u/stylord)

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### createStyles

Create a stylesheet and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS rules to be rendered.

**Examples**

```javascript
// returns {modal: 'modal_hgdfgf', button: 'button_guyhg'}
createStyles({
  modal: {
    width: '100%'
  },
  button: {
    borderRadius: '2px'
  }
})
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the class names of the css modules created.

### createKeyframes

Create a keyframe animation and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS keyframe to be create.

**Examples**

```javascript
// returns {fade: 'fade_hgdfgf'}
stylord({
  fade: {
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    }
  }
})
```

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** the names of the keyframes created.

### createFontFace

Create a font-face and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS font-face rules to be rendered.

**Examples**

```javascript
createFontFace({
  fontFamily: 'MyHelvetica',
  src: 'local("Helvetica Neue Bold"), url(MgOpenModernaBold.ttf)',
  fontWeight: 'bold'
})
```

### createGlobals

Create a global css and inject it to the head of the application.

**Parameters**

-   `rules` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** CSS global rules to be rendered.

**Examples**

```javascript
createGlobals({
  '*': {
    border: 0,
    boxSizing: 'inherit',
    margin: 0,
    padding: 0,
    outline: 0,
    verticalAlign: 'baseline'
  },
  body: {
    boxSizing: 'border-box',
    lineHeight: 1.5
  }
})
```

## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Gustavo P Borges](https://gugutz.github.io/)
