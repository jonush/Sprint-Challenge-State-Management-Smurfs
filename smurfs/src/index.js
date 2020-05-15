import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import combineReducers from "./reducers/indexReducer";
import App from './components/App';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
