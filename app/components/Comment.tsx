import React from "react";
import { FaRegUser } from "react-icons/fa";
import CommentsFooter from "./CommentsFooter";
import { getItems } from "../page";
import { Item } from "../entities/Item";

interface Props {
  items: Item[];
  params: { id: number };
}

const Comment = ({ items, params: { id } }: Props) => {
  return (
    <div className="py-4">
      {items
        .filter((item) => item.id == id)
        .map((item) => (
          <>
            {item.comments.map((comment) => (
              <>
                <div className="flex gap-x-2 pt-4">
                  <FaRegUser
                    className="p-2 h-10 w-10 rounded"
                    style={{
                      backgroundColor: "rgb(40, 42, 50)",
                    }}
                  />
                  <div className=" space-y-1">
                    <p className="text-neutral-200 text-sm" key={comment.id}>
                      {comment.user?.firstName + " " + comment.user?.lastName}
                    </p>
                    <p className=" text-neutral-400 text-xs" key={comment.id}>
                      {comment.createdDate.slice(0, 16).split("T").join(", ")}
                    </p>
                  </div>
                </div>
                <p
                  className="p-4 mt-4 w-[50vw] text-sm rounded border border-neutral-100 border-opacity-10"
                  key={comment.id}
                >
                  {comment.text}
                </p>
                <CommentsFooter comment={comment} />
              </>
            ))}
          </>
        ))}
    </div>
  );
};

export default Comment;
