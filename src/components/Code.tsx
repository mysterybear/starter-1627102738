import { HTMLProps } from "react"

type Props = HTMLProps<HTMLElement> & {}

const Code = ({ children }: Props) => (
  <code style={{ background: "#eee", padding: 4, borderRadius: 4 }}>
    {children}
  </code>
)

export default Code
