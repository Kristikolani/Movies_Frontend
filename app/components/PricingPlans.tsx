import React from "react";
import { TiTick } from "react-icons/ti";
import { FaXmark } from "react-icons/fa6";

const PricingPlans = () => {
  return (
    <div className="pb-5 pt-10 pl-32 text-neutral-200">
      <p className="text-lg">
        <strong className="text-xl">HotFlix</strong> - Best Place for Movies
      </p>
      <p className="text-sm w-[80%] py-4">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text.
        <br />
        <br />
        ‘Content here, content here’, making it. look like{" "}
        <span className="text-yellow-500">readable</span> English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their
        default model text, and a search for ‘lorem ipsum’ will uncover many web
        sites still in their infancy. Various versions have evolved over the
        years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </p>
      <div className="flex gap-x-4">
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="hover:border-t-4 group hover:border-t-green-700 hover:ease-in hover:duration-75"
        >
          <div className="flex p-4 rounded justify-between w-[25vw]">
            <p className="text-lg">Basic</p>
            <p className="text-lg text-yellow-500  group-hover:text-green-700 hover:ease-in hover:duration-75">
              Free
            </p>
          </div>
          <div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>7 days</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>720p Resolution</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4 border-b border-black border-opacity-50">
              <FaXmark color="crimson" /> <p>Limited Availability</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4 border-b border-black border-opacity-50">
              <FaXmark color="crimson" /> <p>Desktop Only</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4">
              <FaXmark color="crimson" /> <p>Limited Support</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-block h-max mx-8 my-5 justify-center rounded border-2 border-yellow-500 group-hover:border-green-700 hover:ease-in hover:duration-75 px-16 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
          >
            Choose Plan
          </button>
        </div>
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="hover:border-t-4 group hover:border-t-green-700 hover:ease-in hover:duration-75"
        >
          <div className="flex p-4 rounded justify-between w-[25vw]">
            <p className="text-lg">Premium</p>
            <p className="text-xl text-yellow-500 group-hover:text-green-700 hover:ease-in hover:duration-75">
              $34.99 <span className="text-xs">/month</span>
            </p>
          </div>
          <div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>1 Month</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p> Full HD</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>Lifetime Availability</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4 border-b border-black border-opacity-50">
              <FaXmark color="crimson" /> <p>TV & Desktop</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4">
              <FaXmark color="crimson" /> <p>24/7 Support</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-block h-max mx-8 my-5 justify-center rounded border-2 border-yellow-500 group-hover:border-green-700 hover:ease-in hover:duration-75 px-16 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
          >
            Choose Plan
          </button>
        </div>
        <div
          style={{ backgroundColor: "rgb(40, 42, 50)" }}
          className="hover:border-t-4 group hover:border-t-green-700 hover:ease-in hover:duration-75"
        >
          <div className="flex p-4 rounded justify-between w-[25vw]">
            <p className="text-lg">Cinematic</p>
            <p className="text-xl text-yellow-500 group-hover:text-green-700 hover:ease-in hover:duration-75">
              $44.99 <span className="text-xs">/month</span>
            </p>
          </div>
          <div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>2 Months</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p> Ultra HD</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>Lifetime Availability</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4 border-b border-black border-opacity-50">
              <TiTick color="green" /> <p>Any device</p>
            </div>
            <div className="pr-4 py-4 w-[20vw] ml-4 flex  gap-x-4">
              <TiTick color="green" /> <p>24/7 Support</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-block h-max mx-8 my-5 justify-center rounded border-2 border-yellow-500 group-hover:border-green-700 hover:ease-in hover:duration-75 px-16 py-2 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-warning-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700"
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
