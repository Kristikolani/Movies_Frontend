import ExpectedPremiere from "./components/ExpectedPremiere";
import FilteredItems from "./components/FilteredItems";
import NewItems from "./components/NewItems";
import PricingPlans from "./components/PricingPlans";
import { Item } from "./entities/Item";
import { FetchResponse } from "./entities/Response";
import { APIServer } from "./api/api-client";
import { Toaster } from "react-hot-toast";

export const getItems = async (
  searchText?: string,
  pageSize?: number,
  pageNumber?: number
) => {
  const apiServer = new APIServer();
  const response: FetchResponse<Item> = await apiServer.getAll(
    "Item",
    searchText,
    pageSize,
    pageNumber
  );
  return response;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { pageNumber: number };
}) {
  const items = await getItems(
    "",
    6,
    searchParams.pageNumber ? searchParams.pageNumber : 1
  );
  return (
    <div className="text-white">
      <NewItems />
      <Toaster />
      <FilteredItems />
      <div className="pt-52">
        <ExpectedPremiere items={items.result} total={items.count} />
      </div>
      <PricingPlans />
    </div>
  );
}
