import { formattedScore } from "@/app/lib/utils/formattedScore";
import { FC, ReactNode } from "react"

interface Props {
    value: number
}

const Score: FC<Props> = ({value}) => {

  const setCurrentColor = (value: number) => {
    switch(true) {
      case value <= 3: 
        return "border-[#E90000] text-[#E90000]";
      case value <= 5:
        return "border-[#E97E00] text-[#E97E00]";
      case value <= 7:
        return "border-[#E9D100] text-[#E9D100]";
      default: return  "border-[#66E900] text-[#66E900]";
    }
  }
  return (
    <span className={`border-2 ${setCurrentColor(value)} rounded-full aspect-square min-w-[32px] flex items-center justify-center`}>
        {formattedScore(value)}
    </span>
  )
}

export default Score;