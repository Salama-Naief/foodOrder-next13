import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import CartPage from "@/components/cart/CartPage";
import SecondNavbar from "@/components/navbar/SecondNavbar";
import { pick } from "lodash";

export default async function Cart() {
  const locale = useLocale();
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <main className="relative ">
      <NextIntlClientProvider
        locale={locale}
        messages={
          // Only provide the minimum of messages
          pick(messages, ["Cart", "Auth"])
        }
      >
        <>
          <div className="bg-mainGreen-100">
            <div className="container mx-auto">
              <SecondNavbar />
            </div>
          </div>
          <div className="container mx-auto px-4 ">
            <CartPage />
          </div>
        </>
      </NextIntlClientProvider>
    </main>
  );
}
