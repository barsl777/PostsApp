import React, { useEffect, useState } from "react";
import PostsApi from "../api/PostsApi";

function ViewPosts(props) {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      const resp = await PostsApi.get(
        `?i=${props.match.params.id}&plot=full`
      ).catch((error) => {
        console.log("error", error);
      });
      setPosts(resp.data);
      setLoading(true);
    };
    fetchDetail();
  }, []);

  return (
    <div className="container pdt-20">
      {loading ? (
        <div className="row">
          <div className="col m4">
            <img src={posts.Pic} alt={posts.Title} className="fluid-img" />
          </div>
          <div className="col m8">
            <h5>{posts.Title}</h5>
            <p>{posts.Plot}</p>

            <div className="meta-info">
              <p>Released : {posts.Released}</p>
            </div>
          </div>
        </div>
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
}

export default ViewPosts;
