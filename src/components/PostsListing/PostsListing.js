import React from "react";
import { useSelector } from "react-redux";
import PostsCard from "../PostsCard/PostsCard";

function PostsListing() {
  const { posts } = useSelector((state) => state.posts);
  return (
    <div>
      <div className="row d-flex">
        {posts &&
          posts.map((movie) => <PostsCard key={posts.ID} posts={posts} />)}
      </div>
    </div>
  );
}

export default PostsListing;
