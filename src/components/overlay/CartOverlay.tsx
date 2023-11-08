"use client";
import Image from "next/image";
import React, { useState } from "react";
import { closeIcon } from "../../../public/images";
import { useAppSelector } from "@/redux/hooks";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import Cart from "../cart/Cart";

interface Props {
  setCart: Function;
}

export default function CartOvarlay({ setCart }: Props) {
  return (
    <div className="absolute top-0 left-0 flex justify-end w-full h-screen ">
      <div
        onClick={() => setCart(false)}
        className="absolute top-0  left-0 w-full h-screen opacity-25 bg-black"
      ></div>
      <div className="h-full flex flex-col w-full md:w-1/2 lg:w-1/3 relative z-20 bg-white  p-4">
        <div className="flex justify-start">
          <Image
            src={closeIcon}
            alt="close icon"
            onClick={() => setCart(false)}
            className="cursor-pointer"
          />
        </div>
        <Cart includeTitle={true} />
      </div>
    </div>
  );
}
