"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  total: number;
}

const Pagination = ({ total }: Props) => {
  const router = useRouter();
  const path = usePathname();
  const [pageNumber, setPageNumber] = useState(1);
  const maxPage = Math.floor(total % 12 != 0 ? total / 12 + 1 : total / 12);
  const pages = [...Array(maxPage + 1).keys()].slice(1);

  const updatePageNumber = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
    router.push(`${path}?catalogPageNumber=${newPageNumber}`, {
      scroll: false,
    });
  };

  return (
    <div className="block rounded-lg w-fit h-fit my-4 py-1 px-4 text-white">
      <nav aria-label="Page navigation">
        <ul className="list-style-none flex gap-x-4">
          <li style={{ backgroundColor: "rgb(40, 42, 50)" }} className="w-9 ">
            <button
              className="relative block rounded bg-transparent px-3 py-1.5 text-base text-white transition-all duration-300"
              onClick={() =>
                updatePageNumber(pageNumber > 1 ? pageNumber - 1 : 1)
              }
              aria-label="Previous"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
          </li>
          {pages.map((num) => (
            <li
              key={num}
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              className=" w-8"
            >
              <button
                className={`${
                  pageNumber === num ? "border-2 " : "border-0"
                }relative block rounded bg-transparent border-yellow-500 px-3 py-1.5 text-base text-white transition-all duration-300`}
                onClick={() => updatePageNumber(num)}
              >
                {num}
              </button>
            </li>
          ))}
          <li style={{ backgroundColor: "rgb(40, 42, 50)" }} className="w-9 ">
            <button
              className="relative block rounded bg-transparent px-3 py-1.5 text-base text-white transition-all duration-300"
              onClick={() =>
                updatePageNumber(
                  pageNumber < maxPage ? pageNumber + 1 : maxPage
                )
              }
              aria-label="Next"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
