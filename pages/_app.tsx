import { NextIntlProvider } from "next-intl"
import { DefaultSeo } from "next-seo"
import { AppPropsType } from "next/dist/next-server/lib/utils"
import { Fragment } from "react"
import "tailwindcss/tailwind.css"
import SEO from "../next-seo.config"
import { i18n } from "../next.config"

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <Fragment>
      <DefaultSeo
        {...SEO}
        languageAlternates={i18n.locales.map((locale) => ({
          href: SEO.canonical + locale,
          hrefLang: locale,
        }))}
      />
      <NextIntlProvider
        // To achieve consistent date, time and number formatting
        // across the app, you can define a set of global formats.
        formats={{
          dateTime: {
            short: {
              day: "numeric",
              month: "short",
              year: "numeric",
            },
          },
        }}
        messages={pageProps.messages}
        // Providing an explicit value for `now` ensures consistent formatting of
        // relative values regardless of the server or client environment.
        now={new Date(pageProps.now)}
        // Also an explicit time zone is helpful to ensure dates render the
        // same way on the client as on the server, which might be located
        // in a different time zone.
        timeZone="Asia/Amman"
      >
        <Component {...pageProps} />
      </NextIntlProvider>
    </Fragment>
  )
}

export default MyApp
