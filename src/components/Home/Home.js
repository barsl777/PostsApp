import React, { useEffect, useState } from "react";
import PostsListing from "../PostsListing/PostsListing";
import PostsApi from "../api/PostsApi";
import { useDispatch } from "react-redux";
import { addPosts } from "../../Store/Reducer";
import { useDebounce } from "use-debounce";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 500);

  useEffect(() => {
    const fetchPosts = async () => {
      const searchKey = search ? search : "Posts";

      const resp = await PostsApi.get(`?&s=${searchKey}&type=posts`).catch(
        (error) => {
          console.log(error);
        }
      );

      dispatch(addPosts(resp.data.Search));
    };

    fetchPosts();
  }, [value]);

  return (
    <div>
      <div className="header d-flex space-between">
        <h5>Posts</h5>
        <div className="Search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <PostsListing />
    </div>
  );
}

export default Home;
