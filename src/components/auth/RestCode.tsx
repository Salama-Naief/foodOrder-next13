"use client";
import Button from "@/components/utils/Button";
import RestCodeValidation from "@/utils/validations/RestCodeValidations";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";

import React from "react";

export default function RestCode() {
  const t = useTranslations("Auth");
  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      restCode: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: RestCodeValidation(t),

    // Handle form submission
    onSubmit: async ({ restCode }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="px-4 py-16 w-full md:w-1/2 lg:1/4 mx-auto text-mainGreen-100">
      <h1 className="text-4xl mb-10 text-center font-sans italic md:text-5xl lg:text-6xl ">
        {t("verify_code_title")}
      </h1>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={values.restCode}
          onChange={handleChange}
          placeholder={t("rest_code")}
          className="input my-6"
        />
        {errors.restCode && (
          <p className="text-mainRed-200 text-sm">{errors.restCode}</p>
        )}
        <Button
          title={t("verify_code")}
          bg={true}
          loading={false}
          fullWidth={true}
        />
      </form>
    </section>
  );
}
