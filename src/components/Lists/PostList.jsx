import React, { useState } from "react";
import { MinusCircleIcon, PencilIcon } from "@heroicons/react/20/solid";
import USER from "../../assets/user-avatar.png";
import LoadingHandler from "../LoadingHandler/LoadingHandler";
import AlertDialogSlide from "../Alert/Alert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetCertainPost } from "../../Middlewares/GetCertainPost";
const PostList = ({ data, deleteCertainPost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [deletedPost, setDeletedPost] = useState("");
  const deleteHandler = (id) => {
    setDeletedPost(id);
    setOpen(true);
  };
  const handleCofirmDelete = () => {
    deleteCertainPost(deletedPost);
    setOpen(false);
  };
  const handleCloseAlert = () => {
    setOpen(false);
  };

  const handlePostClick = async (id) => {
    const res = await dispatch(GetCertainPost(id));
    if (res.meta.requestStatus === "fulfilled") {
      navigate(`/post/${id}/edit`);
    }
  };


  return (
    <>
      {data?.length > 0 ? (
        <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-8 lg:pb-28">
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none ">
              {data?.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        <a href="##" className="hover:underline">
                          {post.category}
                        </a>
                      </p>
                      <a href={post.href} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href="##">
                          <span className="sr-only">Rakibul Islam</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={USER}
                            alt="user"
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a href="##" className="hover:underline">
                            Rakibul islam
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                        </div>
                      </div>
                      <div className="self-end sm:space-x-3 space-y-3 ml-12">
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full border border-transparent bg-gray-100 py-2 px-3 hover:bg-gray-200 focus:outline-none focus:ring-2  focus:ring-offset-2"
                          onClick={()=>handlePostClick(post.id)}
                        >
                          <PencilIcon
                            className="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-gray-900">
                            Edit
                          </span>
                        </button>
                        <button
                          onClick={() => deleteHandler(post.id)}
                          type="button"
                          className="inline-flex items-center rounded-full border border-transparent  bg-red-600 py-2 px-3 hover:bg-red-500 focus:outline-none focus:ring-2  focus:ring-offset-2"
                        >
                          <MinusCircleIcon
                            className="-ml-1 mr-0.5 h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                          <span className="text-sm font-medium text-white">
                            Delete
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoadingHandler type={"NullInfo"} />
      )}
      {open ? (
        <AlertDialogSlide
          handleCofirmDelete={handleCofirmDelete}
          handleCloseAlert={handleCloseAlert}
          open={open}
        />
      ) : null}
    </>
  );
};

export default PostList;
