import React from "react";
import "../views/Feed.css";
import PostBox from "./PostBox.js";
import Post from "./Post.js";

function Feed() {
  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*PostBox*/}
      <PostBox></PostBox>
      {/*Post */}
      <Post avatar="gill.jpg"></Post>
      <Post avatar="gill.jpg"></Post>
    </div>
  );
}

export default Feed;
