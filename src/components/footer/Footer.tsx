import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import NavLinks from "../navbar/NavLinks";

export default function Footer() {
  return (
    <footer className=" z-20 sticky top-0  text-white flex py-4 items-center flex-col bg-mainGreen-100 px-4">
      <div className="container mx-auto flex justify-between items-center ">
        <Link
          href={"/"}
          className="font-extrabold text-xl md:text-2xl lg:text-3xl"
        >
          TPayEAT
        </Link>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div className="flex space-x-4">
          <button className="p-1 bg-white text-gray-700 rounded active:scale-95 transition-all duration-150 hover:bg-gray-300">
            <FaFacebookF />
          </button>
          <button className="p-1 bg-white text-gray-700 rounded active:scale-95 transition-all duration-150 hover:bg-gray-300">
            <FaInstagram />
          </button>
        </div>
      </div>
      <div className="flex md:hidden mt-2">
        <NavLinks />
      </div>
      <div className=" h-[1px] bg-white container mx-auto my-2"></div>
      <div className="text-center text-white text-sm">
        Copyright @2022 TBayEAT
      </div>
    </footer>
  );
}
