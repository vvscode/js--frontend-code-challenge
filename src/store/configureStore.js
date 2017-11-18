import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import selectedTeamsToUrl from "./middlewares/selectedTeamsToUrl";

const store = createStore(
  rootReducer,
  applyMiddleware(...[thunk, selectedTeamsToUrl])
);

window.__store = store;

export default store;
