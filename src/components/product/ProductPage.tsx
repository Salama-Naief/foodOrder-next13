"use client";
import { products, reviews } from "@/utils/dumyData";
import Image from "next/image";
import React, { useState } from "react";
import StarSytem from "../utils/StarSytem";
import Divider from "../utils/Divider";
import { FaOpencart } from "react-icons/fa";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import BestSellerSlider from "./BestSellerSlider";
import Slider from "../utils/Slider";

const ReviewsItem = ({ reviews }: { reviews: ReviewTypes[] }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id} className="p-4">
          <div className="flex space-x-4">
            <div className="relative w-14 h-14 rounded-full">
              <Image src={review.user.profileImg} fill alt={review.user.name} />
            </div>
            <div>
              <div className="text-mainGreen-100 capitalize">
                {review.user.name}
              </div>
              <div className="text-gray-300">{review.date}</div>
              <StarSytem rate={review.rate} />
              <p className="py-2 text-600">{review.content}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default function ProductPage({ product }: { product: ProductTypes }) {
  const [qty, setQty] = useState<number>(1);
  const [img, setImg] = useState(product.coverImage);
  const [activeTab, setActiveTab] = useState<string>("description");

  const tabs = [
    { name: "description", label: "Food Description" },
    { name: "reviews", label: `Reviews (${product.numOfReview})` },
    { name: "about", label: "About Restaurant" },
  ];

  const tabContent =
    activeTab === "description" ? (
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    ) : activeTab === "reviews" ? (
      <ReviewsItem reviews={reviews} />
    ) : (
      <div>Restaurant description</div>
    );
  return (
    <div>
      <div className="px-4 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-12 gap-6 my-6 justify-center items-center">
        {/**images section */}
        <div className="relative w-full lg:col-span-4">
          {product.discount && (
            <div className="absolute z-10 text-xs top-0 left-0 p-1 bg-mainYellew-200 text-black ">
              {product.discount}%
            </div>
          )}
          <div className="relative  h-[250px] md:h-[300px] lg:h-[300px] overflow-hidden rounded">
            <Image src={img} alt={product.title} fill loading="lazy" />
          </div>
          <div className="flex space-x-4 mt-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setImg(img)}
                className="relative w-[80px] hover:opacity-40 cursor-pointer  h-[70px]  overflow-hidden rounded transition-all duration-150"
              >
                <Image src={img} alt={product.title} fill loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/**details section */}
        <div className="p-4 flex flex-col w-full lg:col-span-5">
          <h1 className="text-lg md:text-xl my-2 font-bold">{product.title}</h1>
          <div className="flex space-x-2 items-center">
            <StarSytem rate={4.5} />
            <span className="text-gray-400">
              ({product.numOfReview})reviews
            </span>
          </div>
          <Divider />
          <div className="font-bold  py-2 flex space-x-2">
            <div className="text-mainGreen-100">
              $
              {product.discount
                ? Math.floor(product.price * ((100 - product.discount) / 100))
                : product.price}
            </div>
            {product.discount && (
              <div className="text-gray-400 line-through">${product.price}</div>
            )}
            {product.discount && (
              <span className="text-mainYellew-200 font-normal">
                %{product.discount} off
              </span>
            )}
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-gray-600">Availability:</span>
            <span className="font-semibold">{product.Availability}</span>
          </div>
          <div className="flex items-center space-x-6 my-4">
            <span className="text-gray-600">Category:</span>
            <span className="font-semibold">{product.category}</span>
          </div>

          <div className="">
            <div className="flex items-center space-x-2 ">
              <span className="font-semibold">Select Spice Level:</span>
              <select
                name=""
                id=""
                className="outline-none px-4 py-1 capitalize border rounded"
              >
                <option value="xs">small</option>
                <option value="md">meduim</option>
                <option value="lg">large</option>
              </select>
            </div>
            <div className="flex items-center space-x-2 my-4 ">
              <span className="font-semibold">Size:</span>
              <select
                name=""
                id=""
                className="outline-none px-4 py-1 capitalize border rounded"
              >
                <option value="xs">Xs</option>
                <option value="md">Md</option>
                <option value="lg">Lg</option>
              </select>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
              <div className="flex justify-between space-x-4 py-1 bg-gray-100 rounded px-2">
                <button
                  disabled={qty <= 1}
                  onClick={() => setQty(qty - 1)}
                  className="text-mainGreen-100 hover:text-mainYellew-200"
                >
                  <BsDashLg size={20} />
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="text-mainGreen-100 hover:text-mainYellew-200"
                >
                  <BsPlusLg size={20} />
                </button>
              </div>
              <button className=" bg-mainGreen-50 font-semibold px-2 py-1 flex space-x-2 items-center text-mainGreen-100 rounded-lg transition-all duration-150 active:scale-95">
                <FaOpencart size={23} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
        {/**best seller section */}
        <div className=" h-full hidden lg:block lg:col-span-3">
          <h2 className="text-gray-400 mb-4 text-2xl uppercase">Best Seller</h2>
          <BestSellerSlider products={products.slice(0, 3)} />
        </div>
      </div>

      {/**description -reviews section */}
      <div className="bg-gray-100 my-16  rounded mx-auto max-w-3xl p-4">
        <div className="grid grid-cols-3 relative">
          {tabs.map((tab, index) => (
            <div key={index} className="relative text-center">
              <button
                onClick={() => setActiveTab(tab.name)}
                className={`${
                  activeTab === tab.name
                    ? "text-mainGreen-100"
                    : "text-gray-400"
                } transition-all duration-150 hover:text-mainGreen-100 font-medium text-lg`}
              >
                {tab.label}
              </button>
              <div className="bg-gray-200">
                <div
                  className={`w-3/4 mx-auto bg-mainGreen-100 my-6 h-1 transition-all rounded duration-200 ease-in scale-0 ${
                    activeTab === tab.name ? "scale-100" : "scale-0"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-gray-500 px-4 max-h-96 overflow-y-auto">
          {tabContent}
        </div>
      </div>

      {/**Product related */}
      <Slider products={products.slice(0, 5)} />
    </div>
  );
}
