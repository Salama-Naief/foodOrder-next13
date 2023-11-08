"use client";
import React, { useState } from "react";
import FormUser from "./User/FormUser";
import { useAppSelector } from "@/redux/hooks";
import Button from "../utils/Button";
import Field from "./Field";

export default function PresonalInfo() {
  const [edit, setEdit] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.user);
  return (
    <div>
      <h1 className="text-2xl md:text-4xl  font-semibold text-mainGreen-100 text-center mb-8">
        Personal Info
      </h1>
      {edit ? (
        <FormUser setEdit={setEdit} />
      ) : (
        <div>
          <Field text={user?.name} />
          <Field text={user?.email} />
          <Field text={user?.address} />
          <Field text={user?.phoneNumber} />
          <Field text={user?.brithDate} />
          <div onClick={() => setEdit(true)}>
            <Button
              title="Edit"
              style="bg-mainGreen-100 hover:bg-mainGreen-200 w-full text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
