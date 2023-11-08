"use client";

import Divider from "@/components/utils/Divider";
import { useAppSelector } from "@/redux/hooks";
import { orderData } from "@/utils/dumyData";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function OrderHistory() {
  const user = useAppSelector((state) => state.user.user);
  return (
    <div className="flex flex-col space-y-4 pb-6">
      <h1 className="text-2xl md:text-4xl  font-semibold text-mainGreen-100 text-center mb-8">
        Order history
      </h1>
      {orderData.map((order) => (
        <div key={order.id} className="p-4 rounded-lg bg-mainGreen-50 ">
          <div className="flex justify-between pb-2">
            <div>
              <h3 className="text-xl font-semibold text-mainGreen-100">
                Order #{order.id}
              </h3>
              <p className="text-gray-500 text-sm">{order.date}</p>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500 capitalize">
                from:{order.from.name}
              </span>
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={order.from.pic}
                  alt={order.from.name}
                  fill
                  sizes="10 10"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
            {order.items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </div>
          <Divider style="bg-gray-600" />
          <div className="flex justify-between">
            <div className="flex space-x-1 items-center">
              <h4 className="text-gray-500 font-medium">
                Total:${order.totalPrice}
              </h4>
              {user?.role === "owner" && (
                <>
                  <h4 className="text-gray-900 font-medium">
                    Income:${order.income}
                  </h4>
                  <Link
                    href={`/dashboard/orders/${order.id}`}
                    className="text-xs text-mainGreen-100 underline"
                  >
                    details
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {user?.role === "owner" && (
                <Link
                  href={`/dashboard/orders/${order.id}`}
                  className="text-xs text-gray-900 underline"
                >
                  Edit Manually
                </Link>
              )}
              {order.status === "complete" ? (
                <div className="bg-mainGreen-100 px-2 py-1 rounded-lg shadow-md shadow-gray-400 text-white">
                  complete
                </div>
              ) : order.status === "inprocess" ? (
                <div className="bg-mainYellew-200 px-2 py-1 rounded-lg shadow-md shadow-gray-400 text-white">
                  inprocess
                </div>
              ) : (
                <div className="bg-mainRed-200 px-2 py-1 rounded-lg shadow-md shadow-gray-400 text-white">
                  canceled
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface Props {
  product: {
    id: number;
    title: string;
    description: string;
    coverImage: StaticImageData;
  };
  price: number;
  quantity: number;
}
const Item = ({ item }: { item: Props }) => (
  <div className="border border-gray-300 p-4 flex space-x-2 rounded-lg">
    <div className="relative w-12 h-12 overflow-hidden">
      <Image src={item.product.coverImage} alt={item.product.title} fill />
    </div>
    <div className="flex-1">
      <h2 className=" font-medium ">{item.product.title}</h2>
      <p className="text-gray-400 text-xs">{item.product.description}</p>
      <div className="flex justify-between font-medium text-sm ">
        <div>${item.price}</div>
        <div>Qty:{item.quantity}</div>
      </div>
    </div>
  </div>
);
