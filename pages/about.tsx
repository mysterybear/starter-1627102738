import { GetStaticProps } from "next"
import { useIntl, useTranslations } from "next-intl"
import { useRouter } from "next/router"
import Code from "components/Code"
import PageLayout from "components/PageLayout"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.json`),
        ...require(`../messages/about/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  }
}

const About = () => {
  const t = useTranslations("About")
  const { locale } = useRouter()
  const intl = useIntl()
  const lastUpdated = new Date(2021, 0, 26, 17, 4, 45)

  return (
    <PageLayout title={t("title")}>
      <p>
        {t("description", {
          locale,
          code: (children) => <Code>{children}</Code>,
        })}
      </p>
      <p>
        {t("lastUpdated", {
          lastUpdated,
          lastUpdatedRelative: intl.formatRelativeTime(lastUpdated),
        })}
      </p>
    </PageLayout>
  )
}

export default About
