import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../Slices/PostsSlice";

const store = configureStore({
  reducer: { posts: PostsSlice },
});
export default store;
