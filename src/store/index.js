import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from 'reducers';


export default function configureStore (initialState) {
  const extension = window.devToolsExtension && window.devToolsExtension();

  const createPersistentStore = compose(persistState())(createStore);
  const store = createPersistentStore(rootReducer, initialState, extension);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
