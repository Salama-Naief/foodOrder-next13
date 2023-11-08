"use client";
import Button from "@/components/utils/Button";
import NewPasswordValidation from "@/utils/validations/NewPasswordValidations";
import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function NewPassword() {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: NewPasswordValidation(t),

    // Handle form submission
    onSubmit: async ({ newPassword, confirmNewPassword }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="px-4 py-16 w-full md:w-1/2 lg:1/4 mx-auto text-mainGreen-100">
      <h1 className="text-4xl text-center font-sans italic md:text-5xl lg:text-6xl ">
        {t("rest_new_password_title")}
      </h1>
      <p className="text-center py-4">{t("rest_new_password_description")}</p>
      <form className="" onSubmit={handleSubmit}>
        <div className="my-4 relative">
          <input
            type={showPass ? "text" : "password"}
            name="new-password"
            autoComplete="current-password"
            value={values.newPassword}
            onChange={handleChange}
            placeholder={t("new_password")}
            className="input"
          />
          <div
            onClick={() => setShowPass(!showPass)}
            className={`${
              locale === "ar" ? " left-3" : "right-3"
            } absolute top-3 cursor-pointer`}
          >
            {showPass ? <FiEyeOff size={24} /> : <FiEye size={24} />}
          </div>
        </div>
        {errors.newPassword && (
          <p className="text-mainRed-200 text-sm">{errors.newPassword}</p>
        )}
        <div className="my-4 relative">
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirm-new-password"
            autoComplete="current-password"
            value={values.confirmNewPassword}
            onChange={handleChange}
            placeholder={t("confirm_new_password")}
            className="input"
          />
          <div
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className={`${
              locale === "ar" ? " left-3" : "right-3"
            } absolute top-3 cursor-pointer`}
          >
            {showConfirmPass ? <FiEyeOff size={24} /> : <FiEye size={24} />}
          </div>
        </div>
        {errors.confirmNewPassword && (
          <p className="text-mainRed-200 text-sm">
            {errors.confirmNewPassword}
          </p>
        )}
        <Button title={t("reset")} bg={true} loading={false} fullWidth={true} />
      </form>
    </section>
  );
}
