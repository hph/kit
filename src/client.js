import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';

import App from 'containers/app';
import configureStore from 'store';


const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);

if (module.hot) {
  module.hot.accept();
}
