import React, { useState } from "react";
import Items from "./Items";
import ExpectedPagination from "./ExpectedPagination";
import { getItems } from "../page";
import { Item } from "../entities/Item";

interface Props {
  items: Item[];
  total: number;
}

const ExpectedPremiere = async ({ items, total }: Props) => {
  return (
    <div className=" text-neutral-200">
      <div className="flex justify-between pr-48 border-t border-neutral-100 border-opacity-5 mt-5">
        <p className="p-5 pl-36 text-2xl">
          <strong>Expected Premiere </strong>
        </p>

        <ExpectedPagination total={total} />
      </div>
      <div className="py-2 px-10 lg:px-36 grid grid-cols-6 relative gap-y-60 border-b pb-60 border-neutral-100 border-opacity-5">
        <Items items={items} />
      </div>
    </div>
  );
};

export default ExpectedPremiere;
