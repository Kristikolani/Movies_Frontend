import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CatalogFilter from "../components/CatalogFilter";
import Pagination from "../components/CatalogPagination";
import ExpectedPremiere from "../components/ExpectedPremiere";
import PricingPlans from "../components/PricingPlans";
import { getItems } from "../page";

const page = async ({
  searchParams,
}: {
  searchParams: {
    pageNumber: number;
    searchText: string;
    catalogPageNumber: number;
  };
}) => {
  const expectedItems = await getItems(
    searchParams.searchText ? searchParams.searchText : "",
    searchParams.searchText ? 0 : 6,
    searchParams.pageNumber ? searchParams.pageNumber : 1
  );

  const catalogItems = await getItems(
    searchParams.searchText ? searchParams.searchText : "",
    searchParams.searchText ? 0 : 12,
    searchParams.catalogPageNumber ? searchParams.catalogPageNumber : 1
  );
  return (
    <>
      <div className="relative text-neutral-200">
        <div className="flex justify-between text-neutral-200 pt-6">
          <p className="p-5 pl-36 text-2xl">
            <strong>Catalog</strong>
          </p>
          <div className="flex gap-x-4 pt-8 pb-5 pr-48 text-sm">
            <Link href="/">Home</Link>
            <FaArrowRight className="h-5" />
            <strong>Catalog</strong>
          </div>
        </div>
        <div className="absolute bg-[url('../public/images/cinema.png')] top-0 opacity-20 bg-cover bg-center h-32 w-full"></div>
      </div>
      <CatalogFilter items={catalogItems.result} />
      <div className="flex justify-center pt-52">
        <Pagination total={catalogItems.count} />
      </div>
      <ExpectedPremiere
        items={expectedItems.result}
        total={expectedItems.count}
      />
      <PricingPlans />
    </>
  );
};

export default page;
