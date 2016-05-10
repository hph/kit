import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from 'reducers';
import DevTools from 'containers/dev-tools';


export default function configureStore (initialState) {
  const enhancer = compose(persistState(), DevTools.instrument());
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
