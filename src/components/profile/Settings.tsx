"use client";
import { useAppSelector } from "@/redux/hooks";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { eggIcon, fruitIcon, popcornIcon } from "../../../public/images";

interface Props {
  name: string;
  label: string;
  img: StaticImageData;
  link: string;
}
export default function Settings({ items }: { items: Props[] }) {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl  font-semibold text-mainGreen-100 text-center mb-8">
        Setttings
      </h1>
      {items.map((item, index) => (
        <div key={index} className="p-2 my-4 rounded-lg bg-mainGreen-50 ">
          <Link
            href={item.link}
            className="flex space-x-2 items-center w-fit mx-auto"
          >
            <Image
              src={item.img}
              width={item.name === "removeBusinessAccount" ? 50 : 60}
              height={item.name === "removeBusinessAccount" ? 50 : 60}
              alt={item.name}
            />
            <h4
              className={`font-semibold ${
                item.name === "removeBusinessAccount"
                  ? "text-mainYellew-200"
                  : "text-mainGreen-100"
              } `}
            >
              {item.label}
            </h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
