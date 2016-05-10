# kit

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

> A base project for modern web applications.

### Tech stack

- [x] [React.js](https://facebook.github.io/react/) for front-end components.
- [x] [Babel](http://babeljs.io/docs/plugins/) and various plugins to transpile
  [ES6](https://github.com/lukehoban/es6features) and
  [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html).
- [x] [Webpack](https://webpack.github.io/) as a module bundler and build tool.
  Includes a handy auto-reloading
  ([HMR](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
  development server and a robust production configuration.
- [x] [CSS Modules](https://github.com/css-modules/css-modules) and
  [React CSS Modules](https://github.com/gajus/react-css-modules) for locally
  scoped CSS in components.
- [x] [PostCSS](http://postcss.org/) for various CSS plugins, such as
  [Autoprefixer](https://github.com/postcss/autoprefixer).
- [x] [Lodash](https://lodash.com/) to downplay the lack of a standard library in
  JavaScript.
- [x] [ESLint](http://eslint.org/) with the [Airbnb
  styleguide](https://github.com/airbnb/javascript) configuration for code
  quality.
- [x] [Stylelint](http://stylelint.io/) with its standard ruleset for more
  consistent stylesheets.
- [x] [fetch](https://github.com/github/fetch) and
  [Promise](https://github.com/stefanpenner/es6-promise) polyfills.
- [x] [Express](http://expressjs.com/) backend server for production.
- [x] [Redux](http://redux.js.org/) for state management.
- [x] [TodoMVC](http://todomvc.com/) example showcasing the use of React.js,
  Redux & CSS modules, along with a sensible directory structure.
- [ ] [React Router](https://github.com/reactjs/react-router) as a routing solution
  for the single-page app.
- [ ] [Immutable](https://facebook.github.io/immutable-js/) for data structures
  to store the application state safely and in a more performant manner.
- [ ] Testing framework and configuration.
- [ ] Server-side rendering.
- [ ] Compile Webpack bundle in the backend to support using it in development.
  This would allow us to use it as more than just a static server.

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
