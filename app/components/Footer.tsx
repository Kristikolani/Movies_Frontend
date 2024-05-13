"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      {!(pathname == "/api/auth" || pathname == "/api/auth/register") && (
        <div className="flex gap-x-8 justify-end items-center text-neutral-200 border-t border-t-neutral-100 border-opacity-10 mt-5 p-4">
          <p>About Us</p>
          <p>Contact</p>
          <p>Privacy policy</p>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="rounded p-1.5 h-8 w-7 border-2 flex object-center border-yellow-500"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;
