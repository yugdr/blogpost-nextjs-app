"use client";

import { useState, useEffect } from "react";

function PostComments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!response.ok) {
          throw new Error("Etwas ist schief gelaufen!");
        }
        const data = await response.json();
        const filteredData = data.filter(
          (item) => item.postId === Number(postId)
        );
        // console.log("filtered", filteredData);
        setComments(filteredData);
        // console.log("comments", comments);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  return (
    <div className="single-post__comment">
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="single-comment__wrapper">
            <h4>Title: {comment.name}</h4>
            <p>Id: {comment.id}</p>
            <p>E-Mail: {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostComments;
