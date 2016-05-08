import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles';


const App = () => <h1 styleName="root">Hello, world!</h1>;


export default CSSModules(App, styles);
