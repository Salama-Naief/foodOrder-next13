import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Home from "../../components/home/HomePage";
import SecondNavbar from "../../components/navbar/SecondNavbar";
import { pick } from "lodash";

export default async function HomePage() {
  const locale = useLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <main className="relative bg-gray-100">
      <NextIntlClientProvider
        locale={locale}
        messages={
          // Only provide the minimum of messages
          pick(messages, ["Home", "Auth"])
        }
      >
        <>
          <div className="bg-mainGreen-100">
            <div className="container mx-auto">
              <SecondNavbar />
            </div>
          </div>
          <div className="container mx-auto ">
            <Home />
          </div>
        </>
      </NextIntlClientProvider>
    </main>
  );
}
