"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const AddReview = () => {
  const [reviewContent, setReviewContent] = useState("");
  const [reviewRating, setReviewRating] = useState(0);

  const userId = localStorage.getItem("userId");
  const authToken = JSON.parse(localStorage.getItem("token")!);
  const params = useParams();
  const itemId = params.id;
  const router = useRouter();

  const handleReviewChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setReviewContent(e.target.value);
  };

  const handlePostReview = async () => {
    // TODO: Implement the logic to post the review to your API
    try {
      const response = await fetch("http://localhost:5044/api/Review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          text: reviewContent,
          rating: reviewRating,
          itemId,
          userId,
        }),
      });

      if (response.ok) {
        // review posted successfully, you may want to reset the textarea
        setReviewContent("");
        router.refresh();
      } else {
        // Handle error cases
        console.error("Failed to post review");
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div className="p-4 border border-neutral-100 border-opacity-10">
      <textarea
        style={{ backgroundColor: "rgb(40, 42, 50)" }}
        className="w-[47vw] h-32 rounded p-4 text-white text-base font-normal outline-none transition duration-200 ease-in-out"
        placeholder="Add review"
        value={reviewContent}
        onChange={handleReviewChange}
      />
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePostReview}
          className="block h-max my-2 rounded border-2 border-yellow-500 hover:ease-in hover:duration-75 px-12 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
        >
          Send
        </button>
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={reviewRating}
          onChange={(e) => setReviewRating(Number(e.target.value))}
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="rounded px-3 py-[0.25rem] h-10 mt-2 text-white text-base font-normal leading-[1.5] outline-none transition duration-200 ease-in-out"
          placeholder="Rating"
        />
      </div>
    </div>
  );
};

export default AddReview;
