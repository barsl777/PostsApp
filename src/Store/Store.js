import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./Reducer";

export default configureStore({
  reducer: {
    posts: postsSlice
  }
});
