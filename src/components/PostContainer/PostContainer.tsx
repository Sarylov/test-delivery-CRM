import React from "react";
import { postAPI } from "../../services/PostService";
import { PostContainerProps } from "./PostContainer.props";
import PostItem from "./../PostItem/PostItem";

export default function PostContainer({}: PostContainerProps): JSX.Element {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      {posts?.map((post) => {
        return <PostItem key={post.id} data={post} />;
      })}
    </div>
  );
}
