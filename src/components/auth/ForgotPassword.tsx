"use client";
import Button from "@/components/utils/Button";
import ForgotPasswordValidation from "@/utils/validations/ForgotPasswordValidations";
import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const t = useTranslations("Auth");
  const locale = useLocale();

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: ForgotPasswordValidation(t),

    // Handle form submission
    onSubmit: async ({ email }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="px-4 py-16 w-full md:w-1/2 lg:1/4 mx-auto text-mainGreen-100">
      <h1 className="text-4xl text-center font-sans italic md:text-5xl lg:text-6xl ">
        {t("forget_password_title")}
      </h1>
      <p className="text-center py-4">{t("forget_password_description")}</p>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder={t("email")}
          className="input my-6"
        />
        {errors.email && (
          <p className="text-mainRed-200 text-sm">{errors.email}</p>
        )}
        <Button
          title={t("submit")}
          style="w-full bg-mainGreen-200 text-white "
          loading={false}
        />
      </form>
    </section>
  );
}
