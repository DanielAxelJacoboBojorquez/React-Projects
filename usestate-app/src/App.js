import React, { useState } from 'react';
import data from './data';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts,setPosts] = useState(data);
  return (
    <div className="container mt-5 text-center">
      <h3 className="text-primary">{posts.length} posts today</h3>
      <List posts={posts}/>
      <button className="btn btn-primary" onClick={() => setPosts([])}>clear all posts</button>
    </div>
  );
}

export default App;
