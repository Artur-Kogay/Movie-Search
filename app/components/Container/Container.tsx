import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Container: FC<Props> = ({children}) => {
  return (
    <div className="!px-[36px]">
        {children}
    </div>
  )
}

export default Container