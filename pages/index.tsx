import { GetStaticProps } from "next"
import { useTranslations } from "next-intl"
import { useRouter } from "next/dist/client/router"
import Code from "components/Code"
import PageLayout from "components/PageLayout"
import Image from "next/image"

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../messages/shared/${locale}.yaml`),
        ...require(`../messages/index/${locale}.yaml`),
      },
    },
  }
}

export default function Home() {
  const t = useTranslations("Index")
  const { locale } = useRouter()

  return (
    <PageLayout title={t("title")}>
      <p>
        {t("description", {
          locale,
          b: (children) => <b>{children}</b>,
          code: (children) => <Code>{children}</Code>,
        })}
      </p>
      <Image src={t("image") as string} width={800} height={600} />
    </PageLayout>
  )
}
