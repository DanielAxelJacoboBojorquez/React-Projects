import React, { useState } from 'react';
import data from './data';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';
const [posts,setPosts] = useState(data);
function App() {
  return (
    <div className="container">
      <h3>{posts.length} posts today</h3>
      <List posts={posts}/>
      <button className="btn btn-primary" onClick={() => setPosts([])}>clear all posts</button>
    </div>
  );
}

export default App;
