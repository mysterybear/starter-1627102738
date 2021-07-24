import NextLink, { LinkProps } from "next/link"
import React, { HTMLProps } from "react"
import clsx from "clsx"

type Props = LinkProps & HTMLProps<HTMLAnchorElement>

const Link = ({
  href,
  as,
  locale,
  passHref,
  prefetch,
  replace,
  scroll,
  shallow,
  className,
  ...restProps
}: Props) => {
  return (
    <NextLink
      {...{ href, as, locale, passHref, prefetch, replace, scroll, shallow }}
    >
      <a className={clsx("text-blue-600", className)} {...restProps} />
    </NextLink>
  )
}

export default Link
