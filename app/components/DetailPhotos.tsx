import React from "react";
import { Item } from "../entities/Item";

interface Props {
  params: { id: number };
  items: Item[];
}

const DetailPhotos = ({ items, params: { id } }: Props) => {
  return (
    <div className="flex pl-16 py-5 ">
      <div className="grid grid-cols-5 gap-5 w-[50vw]">
        {items
          .filter((item) => item.id == id)
          .map((item) =>
            item.photos.map((photo) => <img src={"/images/" + photo} />)
          )}
      </div>
    </div>
  );
};

export default DetailPhotos;
