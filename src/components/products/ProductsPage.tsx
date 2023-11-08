"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import SideFilter from "./SideFilterList";
import Image from "next/image";
import { noodleImage, productImage } from "../../../public/images";
import { MdMenu, MdGrid3X3 } from "react-icons/md";
import ProductsList from "../utils/ProductsList";
import { products } from "@/utils/dumyData";
import ProductItem from "../utils/ProductItem";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Pagenation from "../utils/Pagenation";
import ProductItemList from "./ProductItemList";

/**main function  */
export default function ProductsPage() {
  const t = useTranslations("AllProducts");
  const locale = useLocale();
  const [maxPrice, setMaxPrice] = useState(100);
  const [minPrice, setMinPrice] = useState(12);
  const [rangPrice, setRangPrice] = useState(maxPrice);
  const [showType, setShowType] = useState<string>("grid");
  const [sortBy, setSortBy] = useState<string>("name");
  const [filter, setFilter] = useState<string>("trending");

  const filtersData = [
    { name: "trending", label: t("trending"), qty: 4 },
    { name: "asian", label: t("asian"), qty: 44 },
    { name: "indian", label: t("indian"), qty: 34 },
    { name: "western", label: t("western"), qty: 34 },
    { name: "african", label: t("african"), qty: 34 },
    { name: "europen", label: t("europen"), qty: 34 },
    { name: "middle_east", label: t("middle_east"), qty: 34 },
  ];
  const recommendedRestaurants = [
    { name: "Bok choy", label: "Bok choy", qty: 4 },
    { name: "Gai Lai", label: "Gai Lai", qty: 44 },
    { name: "Morning Glow", label: "Morning Glow", qty: 34 },
    { name: "Okra", label: "Okra", qty: 34 },
  ];

  return (
    <section className="bg-white px-4 md:px-0">
      <div className="flex items-center justify-center my-6 bg-gary-100 font-bold">
        <span className="text-mainGreen-100">{t("home")} / </span>
        <span> {filter}</span>
      </div>
      {/**gird container */}
      <div className="md:grid md:grid-cols-4 md:space-x-6">
        {/**frist grid col */}
        <div className="hidden md:block col-span-1">
          {/**filters section or box */}
          <SideFilter
            setSelected={setFilter}
            data={filtersData}
            title={t("filters")}
            selected={filter}
          />
          {/**price section or box */}
          <div className="roundned  bg-gary-100 text-gray-950 p-6 font-bold bg-gray-100 my-6">
            <span>{t("price")}</span>
            <div className="flex justify-between py-3">
              <span className="">{t("ranger")}:</span>
              <span>
                ${minPrice}-${maxPrice}
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={rangPrice}
                step={1}
                onChange={(e) => setRangPrice(parseFloat(e.target.value))}
                className="bg-mainGreen-200 cursor-pointer flex-1 h-1.5  appearance-none rounded-full  accent-mainGreen-100"
              />
              <span className="px-2">${rangPrice}</span>
            </div>
          </div>

          {/**recommended restaurant section or box */}
          <SideFilter
            data={recommendedRestaurants}
            setSelected={setFilter}
            title={t("recommended_Restaurants")}
            selected={filter}
          />
        </div>
        {/** */}
        <div className="col-span-3">
          {/**image and title section */}
          <div className="relative bg-gray-400 rounded overflow-hidden">
            <div
              className={`${
                locale === "ar" ? "right-4 md:right-10" : "left-4 md:left-10"
              } absolute top-10 w-full md:w-2/3 lg:1/3 z-10`}
            >
              <p className="text-xl md:text-2xl italic font-mono lg:text-3xl font-bold ">
                {t("title")}
              </p>
              <p className="font-sans italic font-semibold">
                {t("description")}
              </p>
            </div>
            <div className="w-full h-44 md:h-52 lg:h-60 relative rounded-lg overflow-hidden">
              <Image
                src={noodleImage}
                fill
                alt=""
                className="opacity-40 rounded-lg"
              />
            </div>
          </div>
          {/**sort by section */}
          <div className="my-6 bg-gray-100 rounded px-5 py-4 flex justify-between">
            <div className="flex space-x-4 items-center font-semibold">
              <span>12 {t("items")}</span>
              <span>{t("sorted_by")}</span>
              <select
                name="sort"
                id=""
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-100 px-1 md:px-2 lg:px-4 border border-gray-400 outline-none py-1 rounded"
              >
                <option value="name">{t("name")}</option>
                <option value="latest">{t("latest")}</option>
                <option value="price">{t("price")}</option>
              </select>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowType("grid")}
                className={`${
                  showType === "grid" ? "text-mainGreen-100" : "text-gray-400"
                }`}
              >
                <MdGrid3X3 size={30} />
              </button>
              <button
                onClick={() => setShowType("list")}
                className={`${
                  showType === "list" ? "text-mainGreen-100" : "text-gray-400"
                }`}
              >
                <MdMenu size={30} />
              </button>
            </div>
          </div>
          {/**filter section in mobile */}
          <div className="my-6 md:hidden bg-gray-100 rounded px-5 py-2   justify-between">
            <div className="flex space-x-4 items-center font-semibold">
              <span>{t("filters")}:</span>
              <select
                name="filter-mobile"
                id=""
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gray-100 px-2 border border-gray-400 outline-none py-1 rounded"
              >
                {filtersData.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            {/**price section or box */}
            <div className="roundned  bg-gary-100 text-gray-950 font-semibold bg-gray-100">
              <div className="flex justify-between py-1">
                <span className="">{t("price")}:</span>
                <span>
                  ${minPrice}-${maxPrice}
                </span>
              </div>
              <div className="flex items-center">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={rangPrice}
                  step={1}
                  onChange={(e) => setRangPrice(parseFloat(e.target.value))}
                  className="bg-mainGreen-200 cursor-pointer flex-1 h-1.5  appearance-none rounded-full  accent-mainGreen-100"
                />
                <span className="px-2">${rangPrice}</span>
              </div>
            </div>
          </div>
          {/**show products section */}
          {showType === "grid" ? (
            <ProductsList
              products={products}
              Item={ProductItem}
              style="rounded-xl overflow-hidden w-1/2 md:w-1/2 lg:w-1/3 p-1 md:p-2 lg:p-3"
            />
          ) : (
            <ProductsList
              products={products}
              Item={ProductItemList}
              list={true}
              style="my-6"
            />
          )}
          {/**pagnation system */}
          <Pagenation />
        </div>
      </div>
    </section>
  );
}
