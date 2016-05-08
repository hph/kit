import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';

import App from 'components/app';


render(<App />, document.getElementById('container'));

if (module.hot) {
  module.hot.accept();
}
