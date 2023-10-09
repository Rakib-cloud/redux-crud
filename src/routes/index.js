import { createBrowserRouter } from "react-router-dom";
import LoadingHandler from "../components/LoadingHandler/LoadingHandler";
import AddPostPage from "../pages/AddPostPage";
import EditPostPage from "../pages/EditPostPage";
// import ErrorPage from "../pages/ErrorPage";
import Index from "../pages/Index";
import RootLayout from "../pages/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <LoadingHandler type={"NullInfo"} />,
    children: [
      { index: true, element: <Index /> },
      { path: "posts", element: <Index /> },
      { path: "Home", element: <Index /> },
      { path: "/post/add", element: <AddPostPage /> },
      { path: "post/:id/edit", element: <EditPostPage /> },
    ],
  },
]);
