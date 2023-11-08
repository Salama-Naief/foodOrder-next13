import Image from "next/image";
import React from "react";
import { cartIcon } from "../../../public/images";
import { useAppSelector } from "@/redux/hooks";

interface Props {
  setCart: Function;
}
export default function Cart({ setCart }: Props) {
  const cartItems = useAppSelector((state) => state.cart);

  return (
    <button className="relative" onClick={() => setCart(true)}>
      <div className="absolute -top-5 left-2 text-mainYellew-200">
        {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      </div>
      <Image src={cartIcon} alt="cart icon" />
    </button>
  );
}
