import React from 'react';
import postsData from './postsData.json'; 

function PostList() {
  return (
    <div>
      {postsData.map(post => (
        <div key={post.id} style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
          
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
