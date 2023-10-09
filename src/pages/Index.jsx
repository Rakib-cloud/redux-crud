import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/Lists/PostList";
import LoadingHandler from "../components/LoadingHandler/LoadingHandler";
import { DeleteCertainPost } from "../Middlewares/DeleteCertainPost";
import { GetAllPosts } from "../Middlewares/GetAllPosts";

const Index = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);

  const deleteCertainPost = useCallback(
    (id) => dispatch(DeleteCertainPost(id)),
    [dispatch]
  );
  if (loading) {
    return <LoadingHandler type={"Loading"} />;
  }
  return <PostList data={posts} deleteCertainPost={deleteCertainPost} />;
};

export default Index;
