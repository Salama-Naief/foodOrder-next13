import SecondNavbar from "@/components/navbar/SecondNavbar";
import { pick } from "lodash";
import { NextIntlClientProvider, useLocale } from "next-intl";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <main>
      <NextIntlClientProvider
        locale={locale}
        messages={
          // Only provide the minimum of messages
          pick(messages, "Auth")
        }
      >
        <SecondNavbar />
      </NextIntlClientProvider>
      {children}
    </main>
  );
}
