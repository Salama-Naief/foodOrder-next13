import NewPassword from "@/components/auth/NewPassword";
import { pick } from "lodash";
import { NextIntlClientProvider, useLocale } from "next-intl";

export default async function NewPasswordPage() {
  const locale = useLocale();
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  return (
    <>
      <NextIntlClientProvider
        locale={locale}
        messages={
          // Only provide the minimum of messages
          pick(messages, "Auth")
        }
      >
        <NewPassword />
      </NextIntlClientProvider>
    </>
  );
}
