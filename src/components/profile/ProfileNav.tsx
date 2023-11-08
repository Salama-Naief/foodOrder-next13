"use client";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import React from "react";
import { ownerImage, regImage, userImage } from "../../../public/images";

export default function ProfileNav() {
  const user = useAppSelector((state) => state.user.user);
  return (
    <section className="bg-white max-h-[720px] w-full relative">
      <div>
        <Image
          src={user?.role === "user" ? regImage : ownerImage}
          alt={user?.name || ""}
        />
      </div>
    </section>
  );
}
