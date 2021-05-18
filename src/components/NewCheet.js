import React, { useState } from "react";
import ChitBtn from "./CheetBtn";

function ChitBoxTop({ addPost }) {
  const [newPost, setNewPost] = useState("");
  const [newMedia, setNewMedia] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    if (newPost || newMedia) {
      addPost(newPost, newMedia);
    }
    setNewPost("");
    setNewMedia("");
  };

  return (
    <div className="border-b-8 border-gray-400">
      <form className="mx-8">
        <div className="flex flex-row border-b-2 border-gray-400 py-2">
          <img
            src="./images/Ham_dp.jpg"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div className="flex flex-col w-full pl-6 text-xl">
            <input
              type="text"
              placeholder="Whats happening?"
              className="outline-none my-2"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter media link here"
              className="outline-none my-2"
              value={newMedia}
              onChange={(e) => setNewMedia(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={createPost}
          className="my-2 w-24 ml-auto">
          <ChitBtn />
        </button>
      </form>
    </div>
  );
}

export default ChitBoxTop;
