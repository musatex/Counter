import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import allReducers from './Reducer';

const store = createStore(
      allReducers, applyMiddleware(thunk),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    

ReactDOM.render(
  // Julie : le store de Redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
