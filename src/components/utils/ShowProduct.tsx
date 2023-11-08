import React from "react";
import Overlay from "../overlay/Overlay";
import { MdStar } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import StarSytem from "./StarSytem";

interface Props {
  product: ProductTypes;
  setClose: Function;
}
export default function ShowProduct({ product, setClose }: Props) {
  return (
    <Overlay setCloseOverlay={setClose}>
      <div className="h-full md:flex justify-center items-center mx-auto">
        <div className="bg-white p-2 md:p-6 rounded-lg">
          <div className="rounded-xl relative overflow-auto h-fit md:flex">
            {product.discount && (
              <div className="absolute z-10 text-xs top-0 left-0 p-1 bg-mainYellew-200 text-black ">
                {product.discount}%
              </div>
            )}
            <div className="relative w-2/3  md:w-1/3 h-[150px] md:[200px] lg:h-[250px]">
              <Image
                src={product.coverImage}
                alt={product.title}
                fill
                loading="lazy"
              />
            </div>
            <div className="p-4 md:w-2/3 flex flex-col">
              <p className="text-sm md:text-base font-semibold">
                {product.title}
              </p>
              <div className="flex space-x-2 items-center">
                <StarSytem rate={4.5} />
                <span className="text-gray-400">
                  ({product.numOfReview})reviews
                </span>
              </div>
              <div className="font-bold text-sm md:text-base py-2 flex space-x-2">
                <span className="text-mainGreen-100">
                  $
                  {product.discount
                    ? Math.floor(
                        product.price * ((100 - product.discount) / 100)
                      )
                    : product.price}
                </span>
                {product.discount && (
                  <span className="text-gray-400 line-through">
                    ${product.price}
                  </span>
                )}
                {product.discount && (
                  <span className="text-mainYellew-200">
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
              <div className="flex-1 my-2">
                <p className="text-gray-500 line-clamp-2 overflow-hidden text-sm">
                  {product.description}
                </p>
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="flex items-center space-x-2 text-sm ">
                  <span className="font-semibold">Size</span>
                  <select
                    name=""
                    id=""
                    className="outline-none px-2 border rounded"
                  >
                    <option value="xs">Xs</option>
                    <option value="md">Md</option>
                    <option value="lg">Lg</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2 text-sm ">
                  <span className="font-semibold">Spice Level:</span>
                  <select
                    name=""
                    id=""
                    className="outline-none px-2 border rounded"
                  >
                    <option value="xs">small</option>
                    <option value="md">meduim</option>
                    <option value="lg">large</option>
                  </select>
                </div>
                <button className=" bg-mainYellew-200 text-white rounded-lg transition-all duration-150 active:scale-95">
                  <BsPlusLg className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
