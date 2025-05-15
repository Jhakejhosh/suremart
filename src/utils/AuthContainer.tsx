import React from 'react'
import bgImg from '../assets/images/women-happily.jpg'
import {CgArrowLongLeft} from "react-icons/cg"
import { useNavigate } from 'react-router-dom'

export interface AuthContainerType {
    children: React.ReactNode
}

const AuthContainer:React.FC<AuthContainerType> = ({children}) => {

  const navigate = useNavigate()

  return (
    <div className='bg-cover bg-center relative min-h-screen flex justify-center items-center' style={{
        backgroundImage: `url(${bgImg})`
    }}>
        <div className='absolute bg-white top-0 right-0 w-full md:w-[50%] h-screen'>
          <span className='absolute top-3 left-3 text-2xl border-2
           border-gray-300 rounded-sm px-3 cursor-pointer' onClick={() => navigate(-1)}><CgArrowLongLeft/></span>
            {children}
        </div>
    </div>
  )
}

export default AuthContainer