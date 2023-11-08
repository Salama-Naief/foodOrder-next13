"use client";
import * as Yup from "yup";

const RegisterSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    email: Yup.string()
      .required(t("email_required"))
      .min(3, t("too_short"))
      .email(t("invalid_email_formate")),

    // phone number needs to match the regex expression
    phone: Yup.string()
      .required(t("phone_required"))
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        t("invalid_phone_formate")
      ),
    username: Yup.string()
      .required(t("username_required"))
      .min(3, t("too_short")),
    // password is required with minimum length of 8
    password: Yup.string()
      .min(8, t("too_short"))
      .required(t("password_required"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        t("password_requirement")
      ),
    confirmPassword: Yup.string()
      .required(t("confirm_password_required"))
      .oneOf([Yup.ref("password"), "null"], t("confirm_password_not_match")),
  });
  return schema;
};

export default RegisterSchema;
