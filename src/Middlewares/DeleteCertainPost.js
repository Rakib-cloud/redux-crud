import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { GetAllPosts } from "./GetAllPosts";

export const DeleteCertainPost = createAsyncThunk(
  "posts/deleteCertainPost",
  async (id, thunkApi) => {
    try {
      const response = await fetch(`http://localhost:3001/posts/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        thunkApi.dispatch(GetAllPosts());
        toast.success("Post Deleted Successfully !", {
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
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
