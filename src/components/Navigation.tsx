import { useTranslations } from "next-intl"
import { useRouter } from "next/router"
import Link from "./Link"

const Navigation = () => {
  const t = useTranslations("Navigation")
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Link href="/">{t("index")}</Link>
        <Link href="/about">{t("about")}</Link>
      </div>
      {otherLocale && (
        <Link href={route} locale={otherLocale}>
          <a>{t("switchLocale", { locale: otherLocale })}</a>
        </Link>
      )}
    </div>
  )
}

export default Navigation
