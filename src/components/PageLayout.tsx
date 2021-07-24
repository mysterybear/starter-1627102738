import { PropsWithChildren } from "react"
import { Translation } from "../types"
import Navigation from "./Navigation"

type Props = PropsWithChildren<{
  title: Translation
}>

const PageLayout = ({ children, title }: Props) => {
  return (
    <div className="p-6 font-sans leading-6">
      <Navigation />
      <div className="max-w-lg">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default PageLayout
