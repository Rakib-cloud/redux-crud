import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PsotForm from "../components/Forms/PostForm";
import { UpdateCertainPost } from "../Middlewares/UpdateCertainPost";
import { postSchema } from "../Schemas/PostSchema";

const EditPostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post} = useSelector((state) => state.posts);
  console.log('post is ',post)
  const updateHandler = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: post ? post.id : "",
      title: post ? post.title : "",
      category: post ? post.category : "",
      description: post ? post.description : "",
      date: post ? post.date : "",
      datetime: post ? post.datetime : "",
    },
    validationSchema: postSchema,
    onSubmit: (values) => {
      const { id, category, title, date, datetime, description } = values;
      dispatch(
        UpdateCertainPost({ id, category, title, date, datetime, description })
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
        <PsotForm formHandler={updateHandler} type="update" />
      </div>
    </div>
  );
};

export default EditPostPage;
