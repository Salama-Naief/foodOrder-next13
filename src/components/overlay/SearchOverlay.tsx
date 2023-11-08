"use client";

import { cartData } from "@/utils/dumyData";
import Image from "next/image";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

interface Props {
  setSearchOverlay: Function;
}
export default function SearchOverlay({ setSearchOverlay }: Props) {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="absolute top-0 left-0 flex justify-center w-full h-screen ">
      <div
        onClick={() => setSearchOverlay(false)}
        className="absolute top-0   left-0 w-full h-screen opacity-25 bg-black"
      ></div>
      <div className="px-4 flex flex-col relative z-20 top-20 h-fit w- md:w-2/3 lg:w-1/2 mx-auto">
        <form className=" flex">
          <input
            type="text"
            name="search"
            autoComplete="text"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="appearance-none flex-1 block text-black w-full px-3 py-2 border border-gray-300 rounded-tl-md rounded-bl-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button className="p-2 bg-gray-200 text-mainGreen-100 rounded-tr-md rounded-br-md ">
            <MdSearch size={30} />
          </button>
        </form>
        {search && (
          <div className="bg-gray-100 overflow-y-auto flex-1 w-full mt-2 rounded p-4">
            {cartData.map((item, index) => (
              <div key={index} className="mt-3 flex space-x-3">
                <Image
                  src={item.product.coverImage}
                  width={70}
                  height={70}
                  loading="lazy"
                  alt={item.product.title}
                  className="rounded"
                />
                <div>
                  <p className="font-bold text-gray-950">
                    {item.product.title}
                  </p>
                  <p className="text-gray-500">{item.product.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
