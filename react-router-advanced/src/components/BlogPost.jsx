import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams(); // Extract dynamic id from URL

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      {/* Fetch and display content based on the ID */}
    </div>
  );
}

export default Post;
