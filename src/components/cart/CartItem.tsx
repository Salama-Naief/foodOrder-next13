import Image from "next/image";
import { useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useAppDispatch } from "@/redux/hooks";
import { removeItem } from "../../redux/features/cartSlice";

const CartItem = ({
  data,
  deleteText,
}: {
  data: CartTypes;
  deleteText: string;
}) => {
  const [qty, setQty] = useState<number>(data.quantity);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (item: CartTypes) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      <td className="flex space-x-2">
        <Image
          src={data.product.coverImage}
          width={70}
          height={70}
          alt={data.product.title}
          loading="lazy"
          className="rounded-lg"
        />
        <div>
          <p className="font-bold">{data.product.title}</p>
          <p className="text-gray-400 text-sm">{data.product.description}</p>
        </div>
      </td>
      <td className="text-center px-2">${data.price * data.quantity}</td>
      <td className="text-center">
        <div className="flex justify-between space-x-2 py-1 bg-gray-100 rounded px-2">
          <button
            disabled={qty <= 1}
            onClick={() => setQty(qty - 1)}
            className="text-mainGreen-100 hover:text-mainYellew-200"
          >
            <BsDashLg />
          </button>
          <span>{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="text-mainGreen-100 hover:text-mainYellew-200"
          >
            <BsPlusLg />
          </button>
        </div>
        <button
          onClick={() => handleRemoveItem(data)}
          className="text-mainRed-200 text-xs"
        >
          {deleteText}
        </button>
      </td>
      <td className="text-center">${data.price}</td>
    </>
  );
};

export default CartItem;
