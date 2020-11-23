import React from 'react';

const List = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        const {id,title,body} = post;
        return (
          <div key={id} className="card bg-primary text-white mb-2">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{body}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
