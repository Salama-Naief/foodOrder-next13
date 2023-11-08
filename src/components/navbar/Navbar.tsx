"use client";
import Link from "next/link";
import React, { use, useCallback, useState } from "react";
import NavLinks from "./NavLinks";
import { BsSearch } from "react-icons/bs";
import Cart from "./Cart";
import CartOvarlay from "../overlay/CartOverlay";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { userImage } from "../../../public/images";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import SearchOverlay from "../overlay/SearchOverlay";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const user = useAppSelector((state) => state.user.user);
  const [cart, setCart] = useState(false);
  const [searchOverlay, setSearchOverlay] = useState(false);
  const [profileHover, setProfileHover] = useState(false);

  const screenHeight = useCallback(() => {
    if (typeof window !== undefined) {
      return window.screen.availHeight - 60;
    } else {
      return 0;
    }
  }, []);
  return (
    <nav className="h-[60px] z-20 sticky top-0  text-white flex items-center bg-mainGreen-100 px-4">
      {cart && <CartOvarlay setCart={setCart} />}
      {searchOverlay && <SearchOverlay setSearchOverlay={setSearchOverlay} />}
      <div className="container mx-auto flex justify-between items-center ">
        <Link
          href={"/"}
          className="font-extrabold text-2xl md:text-3xl lg:text-4xl"
        >
          TPayEAT
        </Link>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <div
          className="flex md:hidden fixed  p-4 justify-center left-0 bg-mainGreen-200 z-50 w-full"
          style={{ top: `${screenHeight}` }}
        >
          <NavLinks />
        </div>
        <div className="flex items-center">
          {user ? (
            <div className="relative">
              <Image
                src={userImage}
                alt="user image"
                loading="lazy"
                width={36}
                height={36}
                className="cursor-pointer"
                onClick={() => setProfileHover(!profileHover)}
              />
              {true && (
                <div
                  className={`${
                    profileHover ? "scale-y-100" : "scale-y-0"
                  } transition-all origin-top duration-75 absolute top-10 bg-mainGreen-100 text-white -left-4 p-4 rounded-lg`}
                >
                  <Link
                    href={"/profile"}
                    className="hover:text-mainYellew-200 p-1 "
                  >
                    {t("profile")}
                  </Link>
                  <button className="whitespace-nowrap hover:text-mainYellew-200 mt-4">
                    {t("logout")}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={"/login"}
              className="bg-mainYellew-200 text-black rounded-lg px-4 py-1"
            >
              {t("login")}
            </Link>
          )}
          <BsSearch
            onClick={() => setSearchOverlay(true)}
            size={22}
            className="mx-6 cursor-pointer"
          />
          <Cart setCart={setCart} />
        </div>
      </div>
    </nav>
  );
}
