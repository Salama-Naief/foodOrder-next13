"use client";
import * as Yup from "yup";

const ForgotPasswordSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    email: Yup.string()
      .required(t("email_required"))
      .min(3, t("too_short"))
      .email(t("invalid_email_formate")),
  });
  return schema;
};

export default ForgotPasswordSchema;
