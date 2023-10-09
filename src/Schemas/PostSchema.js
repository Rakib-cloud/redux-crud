import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "please insert at least 2 characters !")
    .max(50, "please insert maximum 50 characters !")
    .required("Title is Required"),
  description: Yup.string()
    .min(2, "please insert at least 2 characters !")
    .max(500, "please insert maximum 50 characters !")
    .required("description is Required"),
  category: Yup.string()
    .min(2, "please insert at least 2 characters !")
    .max(50, "please insert maximum 50 characters !")
    .required("category is Required"),
});
