"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { BsEye, BsFillHeartFill, BsHeart, BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import ShowProduct from "./ShowProduct";

export default function ProductItem({ product }: { product: ProductTypes }) {
  const [likeIt, setLikedIt] = useState<boolean>(false);
  const [cartHover, setCartHover] = useState<boolean>(false);
  const [openShowProduct, setOpenShowProduct] = useState<boolean>(false);
  return (
    <div>
      <div
        onMouseEnter={() => setCartHover(true)}
        onMouseLeave={() => setCartHover(false)}
        className="rounded-xl relative h-full border flex flex-col bg-white overflow-hidden"
      >
        {product.discount && (
          <div className="absolute z-10 text-xs top-0 left-0 p-1 bg-mainYellew-200 text-black ">
            {product.discount}%
          </div>
        )}

        <div
          className={`absolute z-10 text-xs top-0  flex flex-col gap-3 md:gap-4 lg:gap-5
        px-2 py-3 md:py-4 lg:py-5 bg-gray-500 text-white rounded-lg transition-all duration-200
       ${cartHover ? "right-0" : "-right-20"} 
       `}
        >
          <button
            onClick={() => setOpenShowProduct(true)}
            className="hover:text-mainGreen-100 transition-all duration-150"
          >
            <BsEye size={20} />
          </button>
          {likeIt ? (
            <button
              onClick={() => setLikedIt(!likeIt)}
              className="text-mainYellew-200 transition-all duration-150 hover:text-mainGreen-200"
            >
              <BsFillHeartFill size={20} />
            </button>
          ) : (
            <button
              onClick={() => setLikedIt(!likeIt)}
              className="text-mainGreen-100 transition-all duration-150 hover:text-mainYellew-200"
            >
              <BsHeart size={20} />
            </button>
          )}
        </div>

        <Link href={`/product/${product.id}`}>
          <div className="relative w-full h-[150px] md:[200px] lg:h-[250px]">
            <Image
              src={product.coverImage}
              alt={product.title}
              fill
              loading="lazy"
            />
          </div>
        </Link>
        <div className="p-2">
          <Link
            href={`/product/${product.id}`}
            className="flex justify-between mb-4"
          >
            <p className="text-sm md:text-base">{product.title}</p>
            <p className="font-bold text-sm md:text-base">${product.price}</p>
          </Link>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm ">
              <div className="flex space-x-2 rounded border items-center p-1 bg-gray-100">
                <MdStar />
                <p className="font-bold">{product.rate}</p>
              </div>

              <p className="text-gray-500 text-xs border rounded p-1.5 bg-gray-100">
                {product.cookingTime}
              </p>
            </div>
            <button className=" bg-mainYellew-200 text-white rounded-lg transition-all duration-150 active:scale-95">
              <BsPlusLg className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
        {/**show produt */}
      </div>
      {openShowProduct && (
        <ShowProduct product={product} setClose={setOpenShowProduct} />
      )}
    </div>
  );
}
