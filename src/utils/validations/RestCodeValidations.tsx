"use client";
import * as Yup from "yup";

const RestCodeSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    restCode: Yup.string()
      .required(t("rest_code_required"))
      .min(6, t("too_short")),
  });
  return schema;
};

export default RestCodeSchema;
