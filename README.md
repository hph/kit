# kit

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

> A base project for modern web applications.

### Tech stack

- [React.js](https://facebook.github.io/react/) as the view layer.
- [Redux](http://redux.js.org/) for state management and
  [Redux DevTools](https://github.com/gaearon/redux-devtools) for debugging it.
- [Babel](http://babeljs.io/docs/plugins/) and various plugins to transpile
  [ES6](https://github.com/lukehoban/es6features) and
  [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).
- [Webpack](https://webpack.github.io/) as a module bundler and build tool,
  including a handy auto-reloading
  ([HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html))
  development server and a robust production configuration. The front end gets
  a 100/100 score from
  [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).
- [Express](http://expressjs.com/) to serve the app in production. The app gets
  an "A" from [SecurityHeaders.io](https://securityheaders.io/).
- [CSS Modules](https://github.com/css-modules/css-modules) and
  [React CSS Modules](https://github.com/gajus/react-css-modules) for locally
  scoped CSS.
- [TodoMVC](http://todomvc.com/) example showcasing the use of React.js, Redux
  & CSS modules, along with a sensible directory structure.
- [PostCSS](http://postcss.org/) for various CSS plugins, such as
  [Autoprefixer](https://github.com/postcss/autoprefixer).
- [Lodash](https://lodash.com/) to downplay the lack of a standard library in
  JavaScript.
- [ESLint](http://eslint.org/) with the [Airbnb
  styleguide](https://github.com/airbnb/javascript) configuration and
  [Stylelint](http://stylelint.io/) to ensure code quality.
- [fetch](https://github.com/github/fetch) and
  [Promise](https://github.com/stefanpenner/es6-promise) polyfills.

### What's not included

- [React Router](https://github.com/reactjs/react-router) is a good routing
  solution, but one not required for the example app. It is quite trivial set
  it up yourself.
- [Immutable](https://facebook.github.io/immutable-js/) is recommended for
  immutable data structures to be used along with Redux.
- A testing framework is not included, simply because there are so many
  different approaches. I recommend [Karma](http://karma-runner.github.io) and
  [Enzyme](http://airbnb.io/enzyme/), although screenshot testing is also
  excellent.
- Server-side rendering is also not included. If you require it, I suggest
  looking at the various examples elsewhere showcasing it. Depending on how you
  want to build your application, server-side rendering requires a more complex
  setup. For now, it will not be included in this project.

### Setup & usage

This project requires [Node.js](https://nodejs.org/en/) v6.1.0 or above. It is
best installed via [nvm](https://github.com/creationix/nvm) (`nvm install
6.1`).

You may fetch the code and set up the project by running:

    git clone git@github.com:hph/kit.git && cd kit
    npm install

You can now run the server:

    npm start

This will start the development server unless `NODE_ENV` is set to production.
