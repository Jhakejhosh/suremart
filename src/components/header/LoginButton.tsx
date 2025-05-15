import { Link } from "react-router-dom"
import { useAppSelector } from "../../hooks/reduxHook" 
import {IoLogInOutline, IoLogOutOutline} from "react-icons/io5"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config"
import { toast } from "react-toastify"

const LoginButton = () => {

    const {user} = useAppSelector(state => state.auth)

    const handleSignOut = async() => {
      try {
         await signOut(auth)
         toast.info("Goodbye 👌")
      } catch (error) {
        console.log(error)
      }
    } 

  return (
    <>
      {user ? (
        <div className="flex items-center text-red-500 cursor-pointer" onClick={handleSignOut}>
           <span className="mr-3 text-xl"><IoLogOutOutline/></span>
           <p>Logout</p>
        </div>
      ) : (
        <Link to='/login' className="flex items-center cursor-pointer">
            <span className="mr-3 text-xl"><IoLogInOutline/></span>
            <p>Login</p>
        </Link>
      )}
    </>
  )
}

export default LoginButton