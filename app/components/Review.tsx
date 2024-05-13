import React from "react";
import { FaRegUser } from "react-icons/fa";
import { Item } from "../entities/Item";
import ReviewsFooter from "./ReviewsFooter";
import classnames from "classnames";

interface Props {
  items: Item[];
  params: { id: number };
}

const Review = ({ items, params: { id } }: Props) => {
  return (
    <>
      {items
        .filter((item) => item.id == id)
        .map((item) => (
          <>
            {item.reviews.map((review) => (
              <>
                <div className="flex gap-x-2 pt-4">
                  <FaRegUser
                    className="p-2 h-10 w-10 rounded"
                    style={{
                      backgroundColor: "rgb(40, 42, 50)",
                    }}
                  />
                  <div className=" space-y-1">
                    <p className="text-neutral-200 text-sm" key={review.id}>
                      {review.user?.firstName + " " + review.user?.lastName}
                    </p>
                    <p className=" text-neutral-400 text-xs" key={review.id}>
                      {review.createdDate.slice(0, 16).split("T").join(", ")}
                    </p>
                  </div>
                </div>
                <p
                  className="p-4 mt-4 w-[50vw] flex justify-between text-sm rounded border border-neutral-100 border-opacity-10"
                  key={review.id}
                >
                  {review.text}
                  <div
                    key={review.id}
                    className={classnames({
                      "border-green-700":
                        10 > review.rating && review.rating > 7,
                      "border-yellow-500":
                        7 > review.rating && review.rating > 5.6,
                      "border-red-700": review.rating < 5.7,

                      "p-1 border-2 bg-neutral-600 bg-opacity-50 h-fit w-7 rounded-full flex align-middle justify-center text-xs font-semibold ":
                        true,
                    })}
                  >
                    {review.rating}
                  </div>
                </p>
                <ReviewsFooter review={review} />
              </>
            ))}
          </>
        ))}
    </>
  );
};

export default Review;
