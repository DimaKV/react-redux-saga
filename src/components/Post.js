import React from "react";

export default ({ post }) => {
  // console.log(props);
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>Title here {post.title}</div>
      </div>
    </div>
  );
};
