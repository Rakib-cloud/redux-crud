import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GetAllPosts } from "./GetAllPosts";

export const CreateNewPost = createAsyncThunk(
  "posts/createNewPost",
  async (item, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      if (response.status === 201) {
        thunkApi.dispatch(GetAllPosts());
        toast.success("Post Created Successfully !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
