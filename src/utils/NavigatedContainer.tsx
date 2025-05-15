import React from 'react'

interface NavigateContainerType {
    children: React.ReactNode,
    label: string,
}

const NavigatedContainer:React.FC<NavigateContainerType> = ({children, label}) => {
  return (
    <div className='bg-white w-full relative'>
        <div className='w-full border-b-2 border-gray-100 p-4'>
            <strong className='text-xl'>{label}</strong>
        </div>
        <div className='w-full p-4 md:grid grid-cols-2 gap-4'>
            {children}
        </div>
    </div>
  )
}

export default NavigatedContainer