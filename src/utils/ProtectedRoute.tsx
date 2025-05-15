import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../hooks/reduxHook"


const ProtectedRoute = () => {

    const {user} = useAppSelector(state => state.auth)
    
    //if no user, redirect to login
    if(!user) {
        return <Navigate to="/login" replace/>
    }

  return <Outlet/>
}

export default ProtectedRoute