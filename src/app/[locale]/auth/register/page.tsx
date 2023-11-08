import Register from "@/components/auth/Register";
import { pick } from "lodash";
import { NextIntlClientProvider, useLocale } from "next-intl";

export default async function RegisterPage() {
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
        <Register />
      </NextIntlClientProvider>
    </>
  );
}
