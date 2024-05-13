"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  total: number;
}

const ExpectedPagination = ({ total }: Props) => {
  const router = useRouter();
  const path = usePathname();
  const [pageNumber, setPageNumber] = useState(1);
  const maxPage = Math.floor(total % 6 != 0 ? total / 6 + 1 : total / 6);

  const updatePageNumber = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
    router.push(`${path}?pageNumber=${newPageNumber}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex mt-5 gap-x-4 text-xs">
      <a
        href="/catalog"
        style={{ backgroundColor: "rgb(40, 42, 50)" }}
        className="rounded p-2 h-8"
      >
        View All
      </a>
      <FaChevronLeft
        style={{ backgroundColor: "rgb(40, 42, 50)" }}
        className="h-8 w-7 p-2.5"
        onClick={() => {
          updatePageNumber(pageNumber > 1 ? pageNumber - 1 : maxPage),
            console.log(pageNumber);
        }}
      />
      <FaChevronRight
        style={{ backgroundColor: "rgb(40, 42, 50)" }}
        className="h-8 w-7 p-2.5"
        onClick={() => {
          updatePageNumber(pageNumber < maxPage ? pageNumber + 1 : 1),
            console.log(pageNumber);
        }}
      />
    </div>
  );
};

export default ExpectedPagination;
