import AlsoLike from "@/app/components/AlsoLike";
import FilteredDetails from "@/app/components/FilteredDetails";
import Footer from "@/app/components/Footer";
import { Item } from "@/app/entities/Item";
import { catalogItems, comments } from "@/app/items";
import { getItems } from "@/app/page";
import classnames from "classnames";
import Image from "next/image";
import React from "react";
import { IoPlayCircle } from "react-icons/io5";

interface Props {
  params: { id: number };
}

const page = async ({ params: { id } }: Props) => {
  const items = await getItems();

  return (
    <>
      {items.result
        .filter((item) => item.id == id)
        .map((item) => (
          <>
            <div className="relative text-neutral-100 ">
              <p
                key={item.id}
                className="py-4 pl-20 pr-10 text-3xl font-semibold"
              >
                {item.title}
              </p>
              <div className="absolute bg-[url('../public/images/home__bg.jpg')] top-0 opacity-5 bg-cover bg-center h-[80vh] w-full"></div>

              <div className=" flex">
                <div>
                  <div className="flex min-w-max">
                    <img
                      key={item.id}
                      className="relative rounded h-80 pb-8 pl-20 pr-10"
                      src={"/images/" + item.cover}
                      alt={"cover"}
                    />
                    <div
                      key={item.id}
                      className={classnames({
                        "border-green-700": 10 > item.rating && item.rating > 7,
                        "border-yellow-500":
                          7 > item.rating && item.rating > 5.6,
                        "border-red-700": item.rating < 5.7,

                        "p-1 ml-24 m-3 border-2 bg-neutral-600 bg-opacity-50 h-fit w-7 rounded-full flex align-middle justify-center text-xs font-semibold absolute":
                          true,
                      })}
                    >
                      {item.rating}
                    </div>
                  </div>
                  <button className="flex gap-x-2 border-2 border-yellow-500 rounded py-2 px-8 ml-20 text-xs font-medium uppercase leading-normal text-white ">
                    <IoPlayCircle color="white" className="h-5 w-5" />
                    Watch trailer
                  </button>
                </div>
                <div className=" relative text-sm space-y-2">
                  <p>Director: {item.director}</p>
                  <p className="w-[28vw]">
                    Cast:
                    <span className="text-yellow-500"> {item.cast} </span>
                  </p>
                  <p>
                    Genre:{" "}
                    <span key={item.id} className="text-yellow-500">
                      {item.genres}
                    </span>
                  </p>
                  <p>Release year: {item.releaseYear}</p>
                  <p>
                    Country:{" "}
                    <span key={item.id} className="text-yellow-500">
                      {item.country}
                    </span>
                  </p>
                  <div
                    style={{
                      backgroundColor: "rgb(40, 42, 50)",
                    }}
                    className="w-[28vw] h-44 overflow-auto mt-4 p-4 rounded"
                  >
                    <p className=" tracking-wide">{item.description}</p>
                  </div>
                </div>
                <div className="relative py-2 px-5 2xl:px-28">
                  <iframe
                    className="rounded-lg"
                    width="550"
                    height="350"
                    src={item.link}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="text-neutral-200 flex gap-x-20">
              <FilteredDetails items={items.result} params={{ id }} />
              <AlsoLike items={items.result} params={{ id }} />
            </div>
          </>
        ))}
    </>
  );
};

export default page;
