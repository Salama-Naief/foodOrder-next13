"use client";
import * as Yup from "yup";

const QuestionSchema = (t: any) => {
  // const t = useTranslations("Auth");
  // Yup schema to validate the form
  const schema = Yup.object().shape({
    // email is required with email format
    email: Yup.string()
      .required(t("email_required"))
      .min(3, t("too_short"))
      .email(t("invalid_email_formate")),
    username: Yup.string()
      .required(t("username_required"))
      .min(3, t("too_short")),
    // password is required with minimum length of 8
    message: Yup.string()
      .required(t("message_required"))
      .min(10, t("too_short")),
  });
  return schema;
};

export default QuestionSchema;
