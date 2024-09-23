import React from 'react';
import ReactionButtons from './ReactionButtons';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <ReactionButtons post={post} />
    </div>
  );
};

export default PostItem;
