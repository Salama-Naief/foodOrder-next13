import { NextIntlClientProvider, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { NextApiRequest } from "next";
import SecondNavbar from "@/components/navbar/SecondNavbar";
import { pick } from "lodash";
import ProductPage from "@/components/product/ProductPage";
import { products } from "@/utils/dumyData";

interface Props {
  params: { id: string };
}

export default async function Products({ params }: Props) {
  const locale = useLocale();
  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;
  const product = products[parseInt(params.id)];

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
          {/**header section */}
          <div className="text-center bg-gray-100 text-lg text-gray-400 py-6">
            <span className="text-mainGreen-100 mx-1">Home</span>/
            <span className="text-mainGreen-100 mx-1">Indian</span>/
            <span className="text-mainGreen-100 mx-1">
              {product.restaurant}
            </span>
            /<span className="text-gray-900 mx-1">{product.title}</span>
          </div>
          <div className="container mx-auto">
            <ProductPage product={product} />
          </div>
        </>
      </NextIntlClientProvider>
    </main>
  );
}
