"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cuateImage } from "../../../public/images";
import { MdSearch } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";

export default function AuthNav() {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const [search, setSearch] = useState<string>("");
  return (
    <section className="h-[500px] md:h-[600px] w-full bg-mainGreen-100">
      <div className="pt-10 flex flex-col md:grid md:grid-cols-2 container mx-auto md:space-x-10 px-4 lg:space-x-16 h-full items-center ">
        <div className="text-white order-last md:order-first pt-6 md:pt-0">
          <h1 className="text-4xl font-sans italic md:text-5xl lg:text-7xl leading-9">
            {t("auth_title")}
          </h1>
          <p className="py-6 lg:py-10 text-sm">{t("auth_description")}</p>
          <form className=" flex w-full px-4 lg:px-0 lg:w-2/3">
            <input
              type="text"
              name="search"
              autoComplete="text"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("search")}
              className={`${
                locale === "ar"
                  ? "rounded-tr-md rounded-br-md"
                  : "rounded-tl-md rounded-bl-md"
              } appearance-none flex-1 block text-black w-full px-3 py-2 lg:py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            <button
              className={`${
                locale === "ar"
                  ? "rounded-tl-md rounded-bl-md"
                  : "rounded-tr-md rounded-br-md"
              } py-2 lg:py-3 px-6 bg-mainYellew-200 text-whie`}
            >
              {t("search")}
            </button>
          </form>
        </div>
        <div className="  w-full flex justify-center py-10 h-[200px] md:w-full md:h-[260px] lg:w-[520px] lg:h-[327px]  relative">
          <Image src={cuateImage} fill alt="cuate" />
        </div>
      </div>
    </section>
  );
}
