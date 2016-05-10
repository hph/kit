import { createStore } from 'redux';
import persistState from 'redux-localstorage';

import rootReducer from 'reducers';


export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, persistState());
}
