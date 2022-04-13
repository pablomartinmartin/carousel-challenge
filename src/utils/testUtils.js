import { createStore } from "redux";
import gamesReducer from "../features/games/gamesSlice";

const makeStore = () => {
  // ...code here to create enhancers and the other stuff...
  return createStore(gamesReducer, { games: {}, loading: false });
};

export const makeTestStore = (opts = {}) => {
  const store = makeStore(opts);
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
};
