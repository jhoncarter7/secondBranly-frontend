import React from 'react'
interface paginationProps{
Icons: React.ReactNode,
text: string,
textSize?: string,
font?: string,
IconColor?: string

}

const SideBarItem = ({Icons, text, textSize, font, IconColor}: paginationProps) => {
  return (
    <div className={`flex gap-x-3  items-center cursor-pointer`}>
      <div  className={`${IconColor}`}>
       {Icons}
      </div>
   <div className={` text-${textSize} font-${font}  `} >{text}</div>
    </div>
  )
}

export default SideBarItem