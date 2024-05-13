"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const user =
    typeof window !== "undefined" ? localStorage.getItem("name") : null;
  const path = usePathname();
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/Movies?searchText=${searchText}`, {
      scroll: true,
    });
  };

  return (
    <>
      {!(path == "/api/auth" || path == "/api/auth/register") && (
        <div className="flex justify-center">
          <nav className="flex m-2 space-x-14 py-6 text-neutral-200 justify-center">
            <Link href="/" className="flex">
              HOME
            </Link>
            <Link href="/catalog" className="flex">
              CATALOG
            </Link>
            <Link href="/pricing_plan">PRICING PLAN </Link>
          </nav>
          <div className="flex space-x-10">
            <form
              onSubmit={handleSubmit}
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              className="ml-20 mt-5 rounded flex border-solid h-fit"
            >
              <input
                style={{ backgroundColor: "rgb(40, 42, 50)" }}
                className="rounded m-2 px-3 py-[0.25rem] text-base text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
                placeholder="Search... "
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              ></input>
              <button
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
                type="submit"
              >
                <IoIosSearch color="white" />
              </button>
            </form>

            {!user ? (
              <Link
                href="/api/auth"
                type="button"
                className="inline-block h-max mt-5 rounded border-2 border-yellow-500 px-10 py-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
              >
                Sign in
              </Link>
            ) : (
              <Link
                href="/api/auth"
                onClick={() => localStorage.clear()}
                type="button"
                className="inline-block h-max mt-5 rounded border-2 border-yellow-500 px-10 py-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
              >
                Logout
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
