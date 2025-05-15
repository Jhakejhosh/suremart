import React from 'react'

interface ButtonType {
    label: string | boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string
}

const Button: React.FC<ButtonType> = ({label, onClick, className}) => {
  return (
    <><button
    onClick={onClick}
    className={`w-full bg-banner-blue text-white text-sm p-3 rounded-md 
    shadow-md font-semibold cursor-pointer ${className}`}>
        {label}</button></>
  )
}

export default Button