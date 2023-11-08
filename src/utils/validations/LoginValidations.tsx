"use client";
import * as Yup from "yup";

const LoginSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    email: Yup.string()
      .required(t("email_required"))
      .min(3, t("too_short"))
      .email(t("invalid_email_formate")),
    // phone number needs to match the regex expression
    password: Yup.string()
      .min(8, t("too_short"))
      .required(t("password_required"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        t("password_requirement")
      ),
  });
  return schema;
};

export default LoginSchema;
