"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const AddComment = () => {
  const [commentContent, setCommentContent] = useState("");
  const userId = localStorage.getItem("userId");
  const authToken = JSON.parse(localStorage.getItem("token")!);
  const params = useParams();
  const itemId = params.id;
  const router = useRouter();

  const handleCommentChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCommentContent(e.target.value);
  };

  const handlePostComment = async () => {
    // TODO: Implement the logic to post the comment to your API
    try {
      const response = await fetch("http://localhost:5044/api/Comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ text: commentContent, itemId, userId }),
      });

      if (response.ok) {
        // Comment posted successfully, you may want to reset the textarea
        setCommentContent("");
        router.refresh();
      } else {
        // Handle error cases
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="p-4 border border-neutral-100 border-opacity-10">
      <textarea
        style={{ backgroundColor: "rgb(40, 42, 50)" }}
        className="w-[47vw] h-32 rounded p-4 text-white text-base font-normal outline-none transition duration-200 ease-in-out"
        placeholder="Add comment"
        value={commentContent}
        onChange={handleCommentChange}
      />
      <button
        type="button"
        onClick={handlePostComment}
        className="block h-max my-2 rounded border-2 border-yellow-500 hover:ease-in hover:duration-75 px-12 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
      >
        Send
      </button>
    </div>
  );
};

export default AddComment;
