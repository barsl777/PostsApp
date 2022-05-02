import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

export const postsSlice = createSlice({
  name: "movieListing",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },

    postData: (state, action) => {}
  }
});

export const { addPosts, postData } = postsSlice.actions;

export default postsSlice.reducer;
