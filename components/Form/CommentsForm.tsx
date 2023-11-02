"use client";

import { useState } from "react";

const CommentsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      name,
      email,
      body,
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    if (!res.ok) {
      throw new Error("Request failed!");
    }
    if (res.status === 201) {
      const data = await res.json();
      console.log(data);
      setName("");
      setEmail("");
      setBody("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add a New Comment</h3>
      <label htmlFor="name">
        <span>Name: </span>
        <input
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label htmlFor="email">
        <span>E-Mail: </span>
        <input
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor="body">
        <span>Body: </span>
        <input
          type="text"
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <div className="button__wrapper">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default CommentsForm;
