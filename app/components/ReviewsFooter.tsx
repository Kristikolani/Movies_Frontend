"use client";

import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { IoArrowRedo } from "react-icons/io5";
import { IoMdQuote } from "react-icons/io";
import axios from "axios";
import { Review } from "../entities/Review";

interface Props {
  review: Review;
}

const ReviewsFooter = ({ review }: Props) => {
  const [likes, setLikes] = useState(review.likes);
  const [dislikes, setDislikes] = useState(review.dislikes);

  const handleLike = async () => {
    try {
      await axios.put(`http://localhost:5044/api/Review/${review.id}/like`);
      setLikes(likes + 1);
    } catch (error) {
      console.error("Error liking review:", error);
    }
  };

  const handleDislike = async () => {
    try {
      await axios.put(`http://localhost:5044/api/Review/${review.id}/dislike`);
      setDislikes(dislikes + 1);
    } catch (error) {
      console.error("Error disliking review:", error);
    }
  };

  return (
    <div className="flex justify-between border border-neutral-100 border-opacity-10 py-2 px-4">
      <div className="flex gap-x-4">
        <button className="flex pr-4 gap-x-2 border-r border-neutral-100 border-opacity-10">
          <AiFillLike color="green" className="mt-1" onClick={handleLike} />{" "}
          {likes}
        </button>
        <button className="flex gap-x-2">
          {dislikes}{" "}
          <BiSolidDislike
            color="crimson"
            className="mt-1"
            onClick={handleDislike}
          />
        </button>
      </div>
      <div className="flex gap-x-1">
        <IoArrowRedo color="white" className=" pt-1" />
        <p className="text-xs pt-1 pr-4">REPLY</p>
        <IoMdQuote color="white" className="mt-0.5 pt-0.5" />
        <p className="text-xs pt-1">QUOTE</p>
      </div>
    </div>
  );
};

export default ReviewsFooter;
