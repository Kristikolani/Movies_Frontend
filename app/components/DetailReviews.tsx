import React from "react";
import { reviews } from "../items";
import { Item } from "../entities/Item";
import Review from "./Review";
import AddReview from "./AddReview";

interface Props {
  params: { id: number };
  items: Item[];
}

const DetailReviews = ({ items, params: { id } }: Props) => {
  return (
    <div className="flex flex-col pl-20 py-4 ">
      <Review items={items} params={{ id }} />
      <AddReview />
    </div>
  );
};

export default DetailReviews;
