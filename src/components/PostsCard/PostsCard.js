import React from "react";
import { Link } from "react-router-dom";

function PostsCard({ posts }) {
  return (
    <div className="col s6 m4 l4">
      <div className="card">
        <div className="card-image">
          <img src={posts.Pic} alt={posts.Title} />
        </div>
        <div className="card-content">
          <span className="card-title">{posts.Title}</span>
          <p>Year : {posts.Year}</p>
        </div>
        <div className="card-action">
          <Link to={`posts/${posts.ID}`}>Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default PostsCard;
