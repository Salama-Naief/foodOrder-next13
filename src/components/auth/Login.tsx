"use client";
import Button from "@/components/utils/Button";
import LoginSchema from "@/utils/validations/LoginValidations";
import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const [showPass, setShowPass] = useState<boolean>(false);

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: LoginSchema(t),

    // Handle form submission
    onSubmit: async ({ email, password }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="px-4 py-16 w-full md:w-1/2 lg:1/4 mx-auto text-mainGreen-100">
      <h1 className="text-4xl text-center font-sans italic md:text-5xl lg:text-6xl ">
        {t("login_title")}
      </h1>
      <p className="text-center py-4">{t("login_header_text")}</p>
      <form className="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
          placeholder={t("email")}
          className="input my-6"
        />
        {errors.email && (
          <p className="text-mainRed-200 text-sm">{errors.email}</p>
        )}
        <div className="my-4 relative">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            value={values.password}
            onChange={handleChange}
            placeholder={t("password")}
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
        {errors.password && (
          <p className="text-mainRed-200 text-sm">{errors.password}</p>
        )}
        <div className="flex justify-between items-center">
          <div className={`flex space-x-2 my-6`}>
            <input
              type="checkbox"
              name="remember-me"
              id="remember-me"
              className="w-4 h-4 mx-2 text-green-600 accent-mainGreen-100  rounded"
            />
            <label
              htmlFor="remember-me"
              className="block text-sm text-mainGreen-100 italic"
            >
              {t("remember_me")}
            </label>
          </div>

          <Link
            href={"/forgotpassword"}
            className="ml-2 block text-sm text-mainGreen-100 italic"
          >
            {t("forgot_password")}
          </Link>
        </div>
        <Button title={t("login")} bg={true} loading={false} fullWidth={true} />
      </form>
    </section>
  );
}
