"use client";
import React, { useState } from "react";
import Cart from "./Cart";
import Divider from "../utils/Divider";
import CartItem from "./CartItem";
import { useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import Button from "../utils/Button";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart);
  const t = useTranslations("Cart");
  const [coupon, setCoupon] = useState<string>("");
  const cartPrice = cartItems.reduce(
    (total, i) => total + i.price * i.quantity,
    0
  );
  const shippingPrice = 10;
  const totalCartPrice = cartPrice + shippingPrice;
  return (
    <div className="container mx-auto">
      <h1 className="text-xl text-mainGreen-100 bg-gray-50 rounded my-14 py-4 flex justify-center items-center">
        <Link href={"/"}>Home</Link>{" "}
        <span className="text-gray-400 mx-2">/</span>
        Cart
      </h1>
      {/**cart section */}
      <section>
        <table className="table-auto overflow-y-auto text-start w-full border-separate border-spacing-y-2 text-black text-sm">
          <thead className="">
            <tr className="text-sm">
              <th className="px-2 text-start">{t("product")}</th>
              <th>{t("price")}</th>
              <th>{t("qty")}</th>
              <th>{t("unite_Price")}</th>
            </tr>
          </thead>
          <tbody className="">
            {cartItems.map((item) => (
              <tr key={item.product.id} className="my-2">
                <CartItem data={item} deleteText={t("remove")} />
              </tr>
            ))}
          </tbody>
        </table>
        <Divider />
        <div className="p-4 text-black font-medium">
          <div className="flex justify-between">
            <p className="">{t("sub_total")}</p>
            <p>${cartPrice}</p>
          </div>
          <div className="flex justify-between my-4 text-sm">
            <p className="">{t("shipping_price")}</p>
            <p>${shippingPrice}</p>
          </div>
          <Divider />
          <div className="flex justify-between font-bold">
            <p className="">{t("total")}</p>
            <p>${totalCartPrice}</p>
          </div>
          <div className="md:flex items-end justify-between  my-4">
            <div className="">
              <label htmlFor="coupon" className="text-mainGreen-100">
                Coupon
              </label>
              <form className="flex items-center min-w-fit ">
                <input
                  type="text"
                  id="coupon"
                  required
                  maxLength={6}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="rounded appearance-none text-mainGreen-100 ring-none border border-mainGreen-200 focus:outline-none h-full p-3"
                  placeholder="Enter Coupon"
                />
                <button className="bg-mainGreen-100 text-white p-3 rounded hover:bg-mainGreen-200 active:scale-95 transition-all duration-150">
                  apply
                </button>
              </form>
            </div>
            <div className="h-fit">
              <Button
                title={t("go_to_payment")}
                style="bg-mainGreen-100 text-white px-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
