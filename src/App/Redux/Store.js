// import {createStore,applyMiddleware} from 'redux'
// import rootReducer from './Reducers/index'
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import ReduxThunk from 'redux-thunk';


// //const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const Store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(logger),
//   // other store enhancers if any
// ));
// export default Store


import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./Reducers/index";


const middlewares = [reduxThunk];  //applying middlewares

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);       //for showing states better way
}

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //createing store

export default store;