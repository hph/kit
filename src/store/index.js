import { createStore } from 'redux';

import rootReducer from 'reducers';


export default function configureStore (initialState) {
  const extension = window.devToolsExtension && window.devToolsExtension();
  const store = createStore(rootReducer, initialState, extension);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
