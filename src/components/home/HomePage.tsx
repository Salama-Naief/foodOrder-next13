"use client";
import { products } from "@/utils/dumyData";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ProductItem from "../utils/ProductItem";
import { useFormik } from "formik";
import QuestionSchema from "@/utils/validations/QuestionValidations";
import Button from "../utils/Button";
import Image from "next/image";
import { deliveryManImage } from "../../../public/images";
import ProductsList from "../utils/ProductsList";
import Selector from "../utils/Selector";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const t = useTranslations("Home");
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string>("all");
  const itemArray = [
    { title: "all", label: t("all") },
    { title: "offers", label: t("offers") },
    { title: "free_devlivery", label: t("free_devlivery") },
    { title: "new", label: t("new") },
    { title: "coming", label: t("coming") },
  ];
  const filterArray = [
    { title: "Price", label: "Price" },
    { title: "Latest", label: "Latest" },
  ];

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: QuestionSchema(t),

    // Handle form submission
    onSubmit: async ({ email, message, username }) => {
      // Make a request to your backend to store the data
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  console.log("message", values.message);
  return (
    <section className="px-4 my-10 lg:my-20">
      <h1 className="text-xl md:text-2xl lg:text-3xl capitalize italic font-bold my-3 md:my-4 lg:my-6">
        {t("trending_today")}
      </h1>
      <div className="rounded border capitalize w-fit flex items-center border-mainYellew-200 text-gray-500">
        {itemArray.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item.title)}
            className={`${
              selectedItem === item.title &&
              "bg-mainYellew-200 text-black font-semibold"
            } transition-all duration-200 cursor-pointer border-x border-mainYellew-200 py-1.5 px-1.5 md:px-4`}
          >
            {item.label}
          </div>
        ))}
      </div>

      <Selector data={filterArray} />
      <ProductsList
        products={products}
        Item={ProductItem}
        style="rounded-xl overflow-hidden w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2 lg:p-3"
      />
      <button
        onClick={() => router.push("/products")}
        className="mx-auto text-gray-400 rounded-lg transition-all duration-150 hover:bg-mainYellew-200 hover:text-gray-900 items-center border border-mainYellew-200 flex space-x-2 p-2 my-16"
      >
        <BsPlusLg />
        <span>{t("load_more")}</span>
      </button>
      <div className="grid md:grid-cols-2">
        <div className="order-last md:order-first  my-6 md:my-0">
          <p className="fond-bold text-xl w-full  lg:w-1/2">
            {t("having_question_title")}
          </p>
          <p className="text-xs my-4">{t("having_question_description")}</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 space-x-2">
              <div>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder={t("username")}
                  className="input"
                />
                {errors.username && (
                  <p className="text-mainRed-200 text-sm">{errors.username}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder={t("email")}
                  className="input"
                />
                {errors.email && (
                  <p className="text-mainRed-200 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            <textarea
              name="message"
              value={values.message}
              id=""
              onChange={handleChange}
              placeholder={t("message")}
              rows={6}
              className="input w-full mt-6"
            />
            {errors.message && (
              <p className="text-mainRed-200 text-sm">{errors.message}</p>
            )}
            <Button
              title={t("submit")}
              style="bg-mainGreen-200 text-white px-4 my-6"
            />
          </form>
        </div>
        <div className=" w-full h-full p-4">
          <Image src={deliveryManImage} alt="deliveryManImage" />
        </div>
      </div>
    </section>
  );
}
