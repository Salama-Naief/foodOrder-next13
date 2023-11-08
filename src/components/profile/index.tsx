"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import UserProfilePage from "./User/UserProfilePage";
import OwnerProfilePage from "./Owner/OwnerProfilePage";

export default function Index() {
  const user = useAppSelector((state) => state.user.user);
  return user?.role === "user" ? <UserProfilePage /> : <OwnerProfilePage />;
}
