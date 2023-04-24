'use client';

import { IconType } from "react-icons"

interface CategoryInputProps {
  onClick: () => void
  selected?: boolean
  label: string
  icon: IconType
}


const CategoryInput = ({onClick, selected, label, icon: Icon}: CategoryInputProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        flex-col
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? 'border-black' : 'border-neutral-200'}
      `}
    >
      <Icon size={30}/>
      <p className="font-semibold"> {label} </p>
    </div>
  )
}

export default CategoryInput