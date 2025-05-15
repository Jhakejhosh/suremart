import { Link, useNavigate } from "react-router-dom"
import Button from "../../utils/Button"
import {MdOutlineMailOutline, MdLock} from "react-icons/md"
import {IoMdEye, IoMdEyeOff} from "react-icons/io"
import React, { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import {auth} from "../../firebase/config"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook"
import { setLoading, setUser } from "../../redux/authSlice"
import { toast } from "react-toastify"


const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  
  const dispatch = useAppDispatch()
  const {loading} = useAppSelector(state => state.auth)
  const navigate = useNavigate()

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      dispatch(setUser(user))
      toast.success(`Welcome✌, ${user.displayName}`)
    } catch (error) {
      console.log(error)
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleLogin}>
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
        <p className="text-banner-blue">Forgot password?</p>
        <Button label={loading ? "Logging..." : "Sign in"} className="mt-10"/>
        <p className="mt-2 text-gray-500">Don't have an account? <Link to='/register' className="text-banner-blue">Register</Link></p>
    </form>
  )
}

export default LoginForm