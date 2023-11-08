"use client";
import React, { useState } from "react";
import TopSection from "../TopSection";
import Image, { StaticImageData } from "next/image";
import { teamUsers } from "@/utils/dumyData";
import Button from "../../utils/Button";
import PresonalInfo from "../PresonalInfo";
import OrderHistory from "../OrderHistory";
import Settings from "../Settings";
import {
  baconIcon,
  breadIcon,
  eggIcon,
  fruitIcon,
  popcornIcon,
} from "../../../../public/images";
import YourRestaurant from "./YourRestaurant";

export default function OwnerProfilePage() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const tabs = [
    { name: "profile", label: "Profile" },
    { name: "Management", label: "Management" },
    { name: "orderHistory", label: "Order history" },
    { name: "settings", label: "settings" },
  ];

  const userSettings = [
    {
      name: "Open/Close Restaurant",
      label: "Open/Close Restaurant",
      link: "Open_Close_Restaurant",
      img: popcornIcon,
    },
    {
      name: "Receiving Payment",
      label: "Receiving Payment",
      link: "Receiving_Payment",
      img: fruitIcon,
    },
    {
      name: "Dashboard",
      label: "Dashboard",
      link: "Dashboard",
      img: eggIcon,
    },
    {
      name: "Terms&Policies",
      label: "Terms & Policies",
      link: "Terms&Policies",
      img: baconIcon,
    },
    {
      name: "removeBusinessAccount",
      label: "Remove Business Account",
      link: "Remove Business Account",
      img: breadIcon,
    },
  ];

  return (
    <div className=" mb-10">
      <TopSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <div className="md:grid md:grid-cols-3 px-4 md:px-0 md:gap-10">
        <div className=" flex flex-col">
          {activeTab === "Management" ? null : <YourRestaurant />}
        </div>
        <div className="col-span-2">
          {activeTab === "profile" ? (
            <PresonalInfo />
          ) : activeTab === "orderHistory" ? (
            <OrderHistory />
          ) : (
            <Settings items={userSettings} />
          )}
        </div>
      </div>
    </div>
  );
}
