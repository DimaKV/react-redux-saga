import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  console.log(posts);
  if (posts.length === 0) {
    return <p className='text-center'>No posts</p>;
  }
  return posts.map((post) => <Post post={post} key={post} />);
};

const mapStateToProps = (state) => {
  // console.log(state.postsReducer.posts);
  return {
    posts: state.postsReducer.posts,
  };
};

export default connect(mapStateToProps)(Posts);
