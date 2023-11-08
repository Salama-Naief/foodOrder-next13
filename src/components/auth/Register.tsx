"use client";
import Button from "@/components/utils/Button";
import React, { use, useState } from "react";
import { useFormik } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import registerSchema from "@/utils/validations/RegisterValidations";
import { useLocale, useTranslations } from "next-intl";

export default function Register() {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: registerSchema(t),

    // Handle form submission
    onSubmit: async ({ username, email, password, confirmPassword, phone }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="px-4 py-16 w-full md:w-1/2 lg:1/4 mx-auto text-mainGreen-100">
      <h1 className="text-4xl text-center font-sans italic md:text-5xl lg:text-6xl ">
        {t("register_title")}
      </h1>
      <p className="text-center py-4">{t("register_header_text")}</p>
      <form className="" onSubmit={handleSubmit}>
        {/** username input */}
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder={t("username")}
          className="input mt-6 invalid:border-mainRed-200"
        />
        {errors.username && (
          <p className="text-mainRed-200 text-sm">{errors.username}</p>
        )}
        {/** email input */}
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder={t("email")}
          className="input mt-6 text-mainGreen-100"
        />
        {errors.email && (
          <p className="text-mainRed-200 text-sm">{errors.email}</p>
        )}
        <div className="mt-6 relative">
          {/** password with show password option */}
          <input
            type={showPass ? "text" : "password"}
            name="password"
            autoComplete="current-password"
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
        <div className="mt-6 relative">
          {/** confirm password with show password option */}
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            autoComplete="current-password"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder={t("confirm_password")}
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
        {errors.confirmPassword && (
          <p className="text-mainRed-200 text-sm">{errors.confirmPassword}</p>
        )}

        {/** phone input */}
        <input
          type="text"
          name="phone"
          autoComplete="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder={t("phone")}
          className="input mt-6"
        />
        {errors.phone && (
          <p className="text-mainRed-200 text-sm">{errors.phone}</p>
        )}

        <Button title={t("register")} bg={true} fullWidth={true} />
      </form>
    </section>
  );
}
