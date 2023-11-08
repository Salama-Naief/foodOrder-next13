import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import React, { use } from "react";
import Input from "../Input";
import EditInfoSchema from "@/utils/validations/EditInfoValidations";
import Button from "../../utils/Button";
import { useAppSelector } from "@/redux/hooks";

export default function FormUser({ setEdit }: { setEdit: Function }) {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const user = useAppSelector((stete) => stete.user.user);
  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      username: user?.name,
      email: user?.email,
      address: user?.address,
      phoneNumber: user?.phoneNumber,
      brithDate: user?.brithDate,
    },

    // Pass the Yup schema to validate the form
    validationSchema: EditInfoSchema(t),

    // Handle form submission
    onSubmit: async ({ username, email, address, brithDate, phoneNumber }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      {user && (
        <form onSubmit={handleSubmit} className="">
          <Input
            error={errors.username}
            handleChange={handleChange}
            placeHolder="Username"
            type="text"
            value={values.username || ""}
            label="username"
            name="username"
          />
          <Input
            error={errors.email}
            handleChange={handleChange}
            placeHolder="Email"
            type="email"
            value={values.email || ""}
            label="Email"
            name="email"
          />
          <Input
            error={errors.address}
            handleChange={handleChange}
            placeHolder="Address"
            type="text"
            value={values.address || ""}
            label="Address"
            name="address"
          />
          <Input
            error={errors.phoneNumber}
            handleChange={handleChange}
            placeHolder="Phone Number"
            type="text"
            value={values.phoneNumber || ""}
            label="phone"
            name="phoneNumber"
          />
          <Input
            error={errors.brithDate}
            handleChange={handleChange}
            placeHolder="brith date"
            type="date"
            value={values.brithDate || ""}
            label="brith date"
            name="brithDate"
          />
          <div onClick={() => setEdit(false)}>
            <Button
              title="Save"
              style="bg-mainGreen-100 hover:bg-mainGreen-200 w-full text-white"
            />
          </div>
        </form>
      )}
    </>
  );
}
