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
      <Post
        displayName="Prabhjyot Singh Gill"
        username="Prabhjyot.Singh.Gill"
        verified={true}
        text="its working"
        avatar="gill.jpg"
        image="nat.jpg"
        blog="blog text"
      ></Post>
      <Post
        displayName="Tim Cook"
        username="tim.cook"
        verified={true}
        text="its working"
        avatar="tc.jpg"
        image="RR.jpg"
        blog="blog text"
      ></Post>
      <Post
        displayName="Bill Gates"
        username="bill.gates"
        verified={true}
        text="its working"
        avatar="bg.jpg"
        image="RR.jpg"
        blog="blog text"
      ></Post>
    </div>
  );
}

export default Feed;
