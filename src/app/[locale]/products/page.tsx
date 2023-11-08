import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import ProductsPage from "../../../components/products/ProductsPage";
import SecondNavbar from "../../../components/navbar/SecondNavbar";
import { pick } from "lodash";

export default async function Products() {
  const locale = useLocale();
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return (
    <main className="relative">
      <NextIntlClientProvider
        locale={locale}
        messages={
          // Only provide the minimum of messages
          pick(messages, ["AllProducts", "Auth"])
        }
      >
        <>
          <div className="bg-mainGreen-100">
            <div className="container mx-auto">
              <SecondNavbar />
            </div>
          </div>
          <div className="container mx-auto">
            <ProductsPage />
          </div>
        </>
      </NextIntlClientProvider>
    </main>
  );
}
