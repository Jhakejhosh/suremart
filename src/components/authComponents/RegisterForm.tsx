import { Link, useNavigate } from "react-router-dom"
import Button from "../../utils/Button"
import {MdOutlineMailOutline, MdLock} from "react-icons/md"
import {IoMdEye, IoMdEyeOff} from "react-icons/io"
import {HiUser} from "react-icons/hi"
import React, { useState } from "react"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/config"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook"
import { setUser, setLoading } from "../../redux/authSlice"
import { toast } from "react-toastify"


const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const [showPassword, setShowPassword] = useState(false)
    
    const dispatch = useAppDispatch()
    const {loading, error} = useAppSelector(state => state.auth)
    const navigate = useNavigate()


    const handleRegister = async(e: React.FormEvent) => {
      e.preventDefault();
      dispatch(setLoading(true))
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        await updateProfile(user, {displayName:username})
        console.log(user)
        dispatch(setUser(user))
        toast.success("Sign up succesful!")
        navigate('/login')
      } catch (error) {
        console.log(error)
      }
      
    }
  
    return (
      <form onSubmit={handleRegister}>
          <div className="text-[15px] mb-2">
            <p className="font-medium pb-2">User name</p>
            <div className="relative text-[16px] font-serif">
              <span className="absolute top-[32%] left-3 text-gray-500
              text-lg"><HiUser/></span>
              <input type="text" className="border-[1px] rounded-sm border-gray-300
              py-2 w-full px-10 outline-0 font-san" value={username}
              placeholder="Enter your name" onChange={e=>setUsername(e.target.value)} required/>
              <span>{error}</span>
            </div>
        </div>
          <div className="text-[15px] mb-2">
              <p className="font-medium pb-2">Email</p>
              <div className="relative text-[16px] font-serif">
                <span className="absolute top-[32%] left-3 text-gray-500
                text-lg"><MdOutlineMailOutline/></span>
                <input type="email" className="border-[1px] rounded-sm border-gray-300
                py-2 w-full px-10 outline-0 font-san" value={email}
                placeholder="Enter your email" onChange={e=>setEmail(e.target.value)} required/>
              </div>
          </div>
          <div className="text-[15px] mb-2">
              <p className="font-medium pb-2">Password</p>
              <div className="relative text-[16px] font-serif">
                <span className="absolute top-[32%] left-3 text-gray-500
                text-lg"><MdLock/></span>
                <input type={showPassword ? "text" : "password"} className="border-[1px] rounded-sm border-gray-300
                py-2 w-full px-10 outline-0 font-san" value={password}
                placeholder="Enter your password" onChange={e=>setPassword(e.target.value)} required/>
                <span className="absolute top-[32%] right-3 text-gray-500
                text-lg cursor-pointer" 
                onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoMdEyeOff/> : <IoMdEye/>}</span>
              </div>
          </div>
          <Button label={loading ? "Signing up..." : "Sign up"} className="mt-10"/>
          <p className="mt-2 text-gray-500">Already have an account? <Link to='/login' className="text-banner-blue">
            Login
          </Link></p>
      </form>
    )
}

export default RegisterForm