import React from "react";

export default ({ posts }) => {
  if (posts.length === 0) {
    return <button className='btn btn-primary'>Load Posts</button>;
  }
  return <h2>FetchedPosts</h2>;
};
