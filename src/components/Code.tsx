import { HTMLProps } from "react"

type Props = HTMLProps<HTMLElement> & {}

const Code = ({ children }: Props) => (
  <code className="bg-gray-100 p-1 rounded">{children}</code>
)

export default Code
