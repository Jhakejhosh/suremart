import { Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
import AuthListner from "./components/AuthListner"
import { Slide, ToastContainer } from "react-toastify"
import ProtectedRoute from "./utils/ProtectedRoute"



//using lazy loading to load route components
const Home = React.lazy(() => import ("./pages/Home"))
const Login = React.lazy(() => import ("./pages/Login"))
const Register = React.lazy(() => import ("./pages/Register"))
const ProductDetails = React.lazy(() => import ("./pages/ProductDetails"))
const Account = React.lazy(() => import ("./pages/Account"))
const Order = React.lazy(() => import ("./pages/Order"))
const Wishlist = React.lazy(() => import ("./pages/Wishlist"))

function App() {


  return (
    <>
    <ToastContainer theme="colored" transition={Slide}
    position="top-left"
    autoClose={3000}
    />
    <AuthListner/>
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route element={<ProtectedRoute/>}>
           <Route path="/account" element={<Account/>}/>
           <Route path="/order" element={<Order/>}/>
           <Route path="/wishlist" element={<Wishlist/>}/>
        </Route>
      </Routes> 
    </Suspense> 
    </>
  )
}

export default App
