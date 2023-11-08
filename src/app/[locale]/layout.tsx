import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useLocale, useTranslations, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Providers } from "@/redux/provider";
import pick from "lodash/pick";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "food delivery",
  description: "food delevery app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} relative h-[2000px]`}
        style={locale === "ar" ? { direction: "rtl" } : { direction: "ltr" }}
      >
        <Providers>
          <NextIntlClientProvider
            locale={locale}
            messages={
              // Only provide the minimum of messages
              pick(messages, ["Navbar", "Cart"])
            }
          >
            <Navbar />
          </NextIntlClientProvider>
          {children}
          <NextIntlClientProvider
            locale={locale}
            messages={
              // Only provide the minimum of messages
              pick(messages, ["Navbar"])
            }
          >
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
