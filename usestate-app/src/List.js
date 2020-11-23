import React from 'react';

const List = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        const {id,title,body} = post;
        return (
          <div key={id} className="person">
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        );
      })}
    </>
  );
};

export default List;
