import OwnerProfilePage from "@/components/profile/Owner/OwnerProfilePage";
import ProfileNav from "@/components/profile/ProfileNav";
import ProfilePage from "@/components/profile";
import { useAppSelector } from "@/redux/hooks";
import { pick } from "lodash";
import { NextIntlClientProvider, useLocale } from "next-intl";
import React from "react";

export default async function Profile() {
  const locale = useLocale();
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <main className="relative bg-white">
      <NextIntlClientProvider
        locale={locale}
        messages={
          // Only provide the minimum of messages
          pick(messages, ["Home", "Auth"])
        }
      >
        <>
          <ProfileNav />
          <div className="container mx-auto ">
            <ProfilePage />
          </div>
        </>
      </NextIntlClientProvider>
    </main>
  );
}
