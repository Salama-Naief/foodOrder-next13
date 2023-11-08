import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import React, { use } from "react";
import Input from "../Input";
import EditInfoSchema from "@/utils/validations/EditInfoValidations";
import Button from "../../utils/Button";
import { useAppSelector } from "@/redux/hooks";
import RestaurantSchema from "@/utils/validations/RestaurantFormValidations";

export default function RestaurantForm({ setEdit }: { setEdit: Function }) {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const user = useAppSelector((stete) => stete.user.user);
  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      restaurantName: "",
      openingHours: "",
      address: "",
      phoneNumber: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: RestaurantSchema(t),

    // Handle form submission
    onSubmit: async ({
      openingHours,
      restaurantName,
      address,
      phoneNumber,
    }) => {
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
            error={errors.restaurantName}
            handleChange={handleChange}
            placeHolder="Restaurant Name"
            type="text"
            value={values.restaurantName || ""}
            label="Resturant Name"
            name="restaurantName"
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
            error={errors.openingHours}
            handleChange={handleChange}
            placeHolder="Opening Hours"
            type="text"
            value={values.openingHours || ""}
            label="Opening Hours"
            name="openingHours"
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
