import {LuUserRoundCheck} from "react-icons/lu"
import { CiUser } from "react-icons/ci"
import { useAppSelector } from "../../hooks/reduxHook"

const UserInfo = () => {

  const {user} = useAppSelector(state => state.auth)

  return (
    <div className="flex items-center mb-8 relative w-full">
        <span className="border-2 border-gray-300 rounded-full text-center mr-4 p-3 text-xl">
            {user ? <LuUserRoundCheck/> : <CiUser/>}
        </span>
        <div>
            <p className="font-semibold">{user ? user?.displayName : "Hi, Guest"}</p>
            <p className="text-gray-400">{user ? 'Online' : 'Welcome to Suremart'}</p>
        </div>
    </div>
  )
}

export default UserInfo