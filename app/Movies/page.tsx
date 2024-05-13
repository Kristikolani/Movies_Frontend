import React from "react";
import Items from "../components/Items";
import { getItems } from "../page";

const page = async ({
  searchParams,
}: {
  searchParams: { searchText: string };
}) => {
  const items = await getItems(
    searchParams.searchText ? searchParams.searchText : ""
  );
  return (
    <div className="pt-4 pb-60 px-10 lg:px-32 grid grid-cols-5 gap-y-60 text-white">
      <Items items={items.result} />
    </div>
  );
};

export default page;
