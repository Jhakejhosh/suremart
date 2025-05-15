import { useState } from "react"
import {CiUser} from "react-icons/ci"
import MenuList from "./MenuList"
import UserInfo from "./UserInfo"
import LoginButton from "./LoginButton"
import { useAppSelector } from "../../hooks/reduxHook"

const Profile = () => {

  const [showMenu, setShowMenu] = useState(false)
  const {user} = useAppSelector(state => state.auth)

  return (
    <>
      <div className="relative border-2 border-gray-300 p-3 rounded-sm">
        <span onClick={() => setShowMenu(!showMenu)}><CiUser/></span>
        {user && <span className="absolute right-1 bottom-1 w-3 h-3 rounded-full bg-green-500"></span>}
      </div>
      <div className={`${showMenu ? 'block' : 'hidden'} absolute z-40 top-18 right-4 w-[60%]
        bg-white rounded-md shadow-sm p-5 text-[15px] lg:w-[18%] md:w-[40%]`}>
        <div><UserInfo/></div>
        <div className=""><MenuList/></div>
        <div className="hover:bg-gray-50 rounded-sm px-2 py-3"><LoginButton/></div>
      </div>
    </>  
  )
}

export default Profile