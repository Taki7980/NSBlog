"use client"

import { cn } from "@/lib/utils"

interface Props{
      children: React.ReactNode,
      classN?:string
}


const MaxWidthRapper:React.FC<Props> = ({children,classN}) => {
  return (
    <div className={cn("max-w-5xl mx-auto",classN)}>
      {children}
    </div>
  )
}

export default MaxWidthRapper