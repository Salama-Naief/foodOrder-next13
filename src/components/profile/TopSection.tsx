"use client";

import Image from "next/image";
import React from "react";
import { userImage } from "../../../public/images";
import { useLocale } from "next-intl";

interface Props {
  activeTab: string;
  setActiveTab: Function;
  tabs: { name: string; label: string }[];
}
export default function TopSection({ activeTab, setActiveTab, tabs }: Props) {
  const locale = useLocale();
  return (
    <div className="container mx-auto relative w-full">
      <div className="absolute hidden md:block -left-0 z-10 -top-28 w-48 h-48 ">
        <Image src={userImage} alt="" fill />
      </div>
      <div className="py-20">
        <div
          className={`mx-auto group text-xs md:text-base flex justify-center items-center rounded-lg border border-mainYellew-200 w-fit`}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.name)}
              className={`${
                activeTab === tab.name
                  ? "text-gray-900 bg-mainYellew-200"
                  : "text-gray-600 bg-white"
              } capitalize transition-all duration-150 hover:bg-mainYellew-200 hover:text-gray-900
             py-2 px-4 border-xd border-mainYellew-200 
             ${
               locale === "ar"
                 ? "first-of-type:rounded-tr-lg first-of-type:rounded-br-lg last-of-type:rounded-tl-lg last-of-type:rounded-bl-lg"
                 : "first-of-type:rounded-tl-lg first-of-type:rounded-bl-lg last-of-type:rounded-tr-lg last-of-type:rounded-br-lg"
             } font-semibold first-of-type:border-none last-of-type:border-none border-x border-mainYellew-200
             `}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
