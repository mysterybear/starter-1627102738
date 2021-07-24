import { JSXElementConstructor, ReactElement, ReactNodeArray } from "react"

export type Translation =
  | string
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactNodeArray
