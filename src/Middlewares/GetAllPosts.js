import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetAllPosts = createAsyncThunk(
  "posts/GetAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/posts");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
