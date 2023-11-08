"use client";
import { navbarLinks } from "@/utils/data";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkLocale from "next-intl/link";

export default function NavLinks() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

  const path = pathname
    .split("/")
    .filter((i) => i !== "ar")
    .join("/");
  const otherLocale = locale === "en" ? "ar" : "en";

  const content = navbarLinks.map((item, index) => (
    <div key={index} className="group mx-4">
      <Link className="hover:translate-y-10  capitalize" href={item.link}>
        {t(`${item.name}`)}
      </Link>
      <div className="scale-0 transition-all duration-200 ease-in-out h-[3px] group-hover:scale-100 bg-mainYellew-200"></div>
    </div>
  ));
  return (
    <>
      {content}
      {
        <div className="group cursor-pointer mx-4">
          <LinkLocale href={path} locale={otherLocale}>
            {locale === "ar" ? "انجليزي" : "Arabic"}
          </LinkLocale>
          <div className="scale-0 transition-all duration-200 ease-in-out h-[3px] group-hover:scale-100 bg-mainYellew-200"></div>
        </div>
      }
    </>
  );
}
