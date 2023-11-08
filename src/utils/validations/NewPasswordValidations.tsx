"use client";
import * as Yup from "yup";

const NewPasswordSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    newPassword: Yup.string()
      .min(8, t("too_short"))
      .required(t("new_password_required"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        t("password_requirement")
      ),
    confirmNewPassword: Yup.string()
      .required(t("confirm_new_password_required"))
      .oneOf([Yup.ref("password"), "null"], t("confirm_password_not_match")),
  });
  return schema;
};

export default NewPasswordSchema;
