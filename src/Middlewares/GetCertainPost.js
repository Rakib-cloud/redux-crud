import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetCertainPost = createAsyncThunk(
  "posts/getCertainPost",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
