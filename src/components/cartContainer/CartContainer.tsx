import React from "react"
import {IoIosClose} from "react-icons/io"
import EmptyCart from "./EmptyCart"
import CartItems from "./CartItems"
import { useAppSelector } from "../../hooks/reduxHook"

export interface setShowType {
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

const CartContainer = ({setShowCart}:setShowType) => {

 const {items} = useAppSelector(state => state.cart)

  return (
    <div className="w-full absolute h-screen bg-dark-transparent top-0 z-50 left-0">
        <div className="w-[90%] md:w-[50%] lg:w-[30%] h-screen bg-white right-0 absolute top-0 overflow-y-scroll">
            <span className="absolute top-2 right-2 border-2 border-gray-300 rounded-sm p-2 text-xl
            cursor-pointer" onClick={() => setShowCart(false)}><IoIosClose/></span>
            {items.length !==0 ? <CartItems/> : <EmptyCart setShowCart={setShowCart}/>}
        </div>
    </div>
  )
}

export default CartContainer