import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import Root from 'containers/root';
import configureStore from 'store';


const store = configureStore();

render(<Root store={store} />, document.getElementById('container'));

if (module.hot) {
  module.hot.accept();
}
