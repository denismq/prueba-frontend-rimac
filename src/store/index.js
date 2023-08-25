import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//store.suscribe(() => console.log(store));

export default store;
