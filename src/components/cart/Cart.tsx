"use client";
import React from "react";
import CartItem from "./CartItem";
import { useAppSelector } from "@/redux/hooks";
import Divider from "../utils/Divider";
import Button from "../utils/Button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Cart({ includeTitle }: { includeTitle?: boolean }) {
  const cartItems = useAppSelector((state) => state.cart);
  const t = useTranslations("Cart");
  const router = useRouter();
  const cartPrice = cartItems.reduce(
    (total, i) => total + i.price * i.quantity,
    0
  );
  const shippingPrice = 10;
  const totalCartPrice = cartPrice + shippingPrice;
  return (
    <section>
      <table className="table-auto overflow-y-auto text-start w-full border-separate border-spacing-y-2 text-black text-sm">
        <caption className="caption-top">
          {includeTitle && (
            <h2 className="text-mainGreen-100 text-xl font-semibold text-center my-4">
              {t("title")}
            </h2>
          )}
        </caption>
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
      <div className="p-4 text-black text-sm">
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
        <div
          onClick={() => router.push("/cart")}
          className="flex justify-center"
        >
          <Button
            title={t("go_to_payment")}
            style="bg-mainGreen-100 text-white w-full"
          />
        </div>
      </div>
    </section>
  );
}
