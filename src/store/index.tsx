import { createStore } from "redux";
import { combineReducers } from "redux";
import shape from "./shape/reducers";

const store = createStore(
  combineReducers({
    shape: shape,
  })
);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch