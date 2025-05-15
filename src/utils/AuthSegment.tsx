import React from "react"
import smile from "../assets/images/smile.png"

interface AuthSegmentType {
    heading: string,
    text: string,
    children: React.ReactNode
}

const AuthSegment:React.FC<AuthSegmentType> = ({heading, text, children}) => {
  return (
    <div className="px-6 py-25 lg:px-40">
        <figure className="flex justify-center items-center">
            <img src={smile} alt="smile" width={70}/>
        </figure>
        <div className="text-center">
            <strong className="text-3xl">{heading}</strong>
            <p className="text-sm py-5 text-gray-500">{text}</p>
        </div>
        <div>{children}</div>
    </div>
  )
}

export default AuthSegment