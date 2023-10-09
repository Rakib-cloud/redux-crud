import { createSlice } from "@reduxjs/toolkit";
import { DeleteCertainPost } from "../Middlewares/DeleteCertainPost";
import { GetAllPosts } from "../Middlewares/GetAllPosts";
import { GetCertainPost } from "../Middlewares/GetCertainPost";

const initialState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    searchByName: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((el) =>
          el.category.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
  extraReducers: (builder) => {
    // GET ALL POSTS
    builder.addCase(GetAllPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetAllPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(GetAllPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // GET CERTAIN POST
    builder.addCase(GetCertainPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(GetCertainPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
    builder.addCase(GetCertainPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { searchByName } = postsSlice.actions;
export default postsSlice.reducer;
