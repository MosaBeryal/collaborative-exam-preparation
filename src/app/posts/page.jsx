"use client";
import React, { useState } from "react";

const CreatePost = () => {
  const [postText, setPostText] = useState("");

  const handlePostChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here (e.g., send the post data to the backend).
    // You can use Axios or fetch to make an API call to your server.
    // Reset the postText state to clear the form after submission.
    setPostText("");
  };

  return <div className="bg-red-300">Create post</div>;
};

export default CreatePost;
