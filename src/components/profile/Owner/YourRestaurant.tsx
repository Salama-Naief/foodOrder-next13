"use client";

import Image from "next/image";
import React, { useState } from "react";
import { naanImage } from "../../../../public/images";
import Field from "../Field";
import StarSytem from "@/components/utils/StarSytem";
import Button from "@/components/utils/Button";
import RestaurantForm from "./RestaurantForm";

export default function YourRestaurant() {
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <div>
      <h1 className="text-2xl md:text-4xl  font-semibold text-mainGreen-100 text-center mb-8">
        Your Restaurant
      </h1>
      <div className="relative w-full h-36 mb-4 rounded-lg overflow-hidden">
        <Image src={naanImage} fill alt="Restuarnat" />
      </div>
      {edit ? (
        <RestaurantForm setEdit={setEdit} />
      ) : (
        <div>
          <Field text="Restaurant Name" />
          <Field text="Address" />
          <Field text="Phone Number" />
          <Field text="Opening Hours" />
          <Field text="Joined Date" />
          <div className="flex justify-between font-semibold text-mainGreen-100 px-4">
            <span>Currently Rating</span>
            <StarSytem rate={4.3} />
            <span>(1.023)</span>
          </div>
          <div onClick={() => setEdit(true)}>
            <Button title="Edit" style="bg-mainGreen-100 text-white w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
