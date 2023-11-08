"use client";
import React, { useState } from "react";
import TopSection from "../TopSection";
import Image, { StaticImageData } from "next/image";
import { teamUsers } from "@/utils/dumyData";
import Button from "../../utils/Button";
import Form from "./FormUser";
import PresonalInfo from "../PresonalInfo";
import ButtonTT from "../../utils/ButtonTT";
import OrderHistory from "../OrderHistory";
import Settings from "../Settings";
import { eggIcon, fruitIcon, popcornIcon } from "../../../../public/images";

interface Props {
  name: string;
  email: string;
  role: string;
  img: StaticImageData;
}

const TeamMember = ({ name, email, role, img }: Props) => {
  return (
    <div className="p-4 bg-mainGreen-50 h-fit rounded flex space-x-2 text-mainGreen-100 ">
      <div className="relative w-20 h-20 rounded-full overflow-hidden">
        <Image src={img} alt={name} fill />
      </div>
      <div className="flex flex-col">
        <div className="flex-1">
          <h4 className=" font-semibold">
            {name}({role})
          </h4>
          <h6 className="underline">{email}</h6>
        </div>
        {role === "member" && (
          <button className="text-mainYellew-200 w-fit hover:text-mainGreen-100 transition-all duration-150">
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const tabs = [
    { name: "profile", label: "Profile" },
    { name: "orderHistory", label: "Order history" },
    { name: "settings", label: "settings" },
  ];

  const userSettings = [
    {
      name: "Favorite Restaurants",
      label: "Favorite Restaurants",
      link: "favorite",
      img: popcornIcon,
    },
    {
      name: "Payment Method",
      label: "Payment Method",
      link: "Payment_Method",
      img: fruitIcon,
    },
    {
      name: "Invitation Privacy",
      label: "Invitation Privacy",
      link: "privacy",
      img: eggIcon,
    },
  ];

  return (
    <div className="mb-10">
      <TopSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />
      <div className="md:grid md:grid-cols-3 px-4 md:px-0 md:gap-10">
        <div className=" flex flex-col">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl  font-semibold text-mainGreen-100 text-center mb-8">
              Your team
            </h1>
            <div className="flex flex-col space-y-2">
              {teamUsers.map((user) => (
                <TeamMember
                  key={user.id}
                  email={user.email}
                  img={user.img}
                  name={user.name}
                  role={user.role}
                />
              ))}
            </div>
            <Button
              title="Add New Member"
              style="bg-mainGreen-100 hover:bg-mainGreen-200 w-full text-white"
            />
          </div>
          <div>
            <Button
              title="leave Team"
              style="w-full my-4 bg-mainYellew-200 hover:text-mainRed-200 text-white"
            />
            <Button
              title="Create new Team"
              style="bg-mainGreen-100 hover:bg-mainGreen-200  w-full text-white"
            />
          </div>
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
