import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PsotForm from "../components/Forms/PostForm";
import { CreateNewPost } from "../Middlewares/CreateNewPost";
import { postSchema } from "../Schemas/PostSchema";

const AddPostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formHandler = useFormik({
    initialValues: {
      title: "",
      category: "",
      description: "",
      date: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      datetime: new Date(Date.now()).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    },
    validationSchema: postSchema,
    onSubmit: (values) => {
      const { category, title, date, datetime, description } = values;
      const id = Math.floor(Math.random() * 500);
      dispatch(
        CreateNewPost({ id, category, title, date, datetime, description })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          navigate("/");
        }
      });
    },
  });

  return (
    <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <PsotForm formHandler={formHandler} />
      </div>
    </div>
  );
};

export default AddPostPage;
