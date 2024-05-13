import React from "react";
import { FaRegUser } from "react-icons/fa6";
import Comment from "./Comment";
import AlsoLike from "./AlsoLike";
import Reply from "./Review";
import AddComment from "./AddComment";
import { Item } from "../entities/Item";

interface Props {
  params: { id: number };
  items: Item[];
}

const DetailComments = ({ items, params: { id } }: Props) => {
  return (
    <div className="flex flex-col pl-20 py-4 ">
      <Comment items={items} params={{ id }} />
      <AddComment />
    </div>
  );
};

export default DetailComments;
