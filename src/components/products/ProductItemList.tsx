import React, { useState } from "react";
import { productImage } from "../../../public/images";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { BsFillHeartFill, BsHeart, BsPlusLg } from "react-icons/bs";
import Link from "next/link";

export default function ProductItemList({
  product,
}: {
  product: ProductTypes;
}) {
  const [love, setLove] = useState<boolean>(false);
  return (
    <div className="rounded-xl relative overflow-auto h-fit border flex bg-white">
      {product.discount && (
        <div className="absolute z-10 text-xs top-0 left-0 p-1 bg-mainYellew-200 text-black ">
          {product.discount}%
        </div>
      )}

      <Link
        href={`/product/${product.id}`}
        className="relative w-1/3 h-[150px] md:[200px] lg:h-[250px]"
      >
        <Image
          src={product.coverImage}
          alt={product.title}
          fill
          loading="lazy"
        />
      </Link>

      <div className="p-4 w-2/3 flex flex-col">
        <Link
          href={`/product/${product.id}`}
          className="text-sm md:text-base font-semibold"
        >
          {product.title}
        </Link>
        <div className="font-bold text-sm md:text-base py-2 flex space-x-2">
          <span className="text-mainGreen-100">
            $
            {product.discount
              ? Math.floor(product.price * ((100 - product.discount) / 100))
              : product.price}
          </span>
          {product.discount && (
            <span className="text-gray-400 line-through">${product.price}</span>
          )}
          {product.discount && (
            <span className="text-mainYellew-200 text-sm">
              %{product.discount}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Availability:</span>
          <span>{product.Availability}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Category:</span>
          <span>{product.category}</span>
        </div>
        <div className="flex-1 my-1">
          <p className="text-gray-500 line-clamp-2 overflow-hidden text-sm">
            {product.description}
          </p>
        </div>

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
          <div className="flex space-x-4 ">
            {love ? (
              <button
                onClick={() => setLove(!love)}
                className="text-mainYellew-200 transition-all duration-150 hover:text-mainGreen-200"
              >
                <BsFillHeartFill size={20} />
              </button>
            ) : (
              <button
                onClick={() => setLove(!love)}
                className="text-mainGreen-100 transition-all duration-150 hover:text-mainYellew-200"
              >
                <BsHeart size={20} />
              </button>
            )}

            <button className=" bg-mainYellew-200 text-white rounded-lg transition-all duration-150 active:scale-95">
              <BsPlusLg className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
