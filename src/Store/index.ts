import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

const configureStore = (preloadedState: any) => {
  const store = createStore(reducers, applyMiddleware(thunkMiddleware));

  return store;
};

// stub
const loadState = () => {};

export default configureStore(loadState);
