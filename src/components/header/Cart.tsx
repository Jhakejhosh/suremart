import { useState } from "react"
import {PiShoppingCart} from "react-icons/pi"
import CartContainer from "../cartContainer/CartContainer"
import { useAppSelector } from "../../hooks/reduxHook"

const Cart = () => {

  const [showCart, setShowCart] = useState<boolean>(false)
  const {items} = useAppSelector(state => state.cart)

  return (
    <><div className="relative mr-4 border-2 border-gray-300 p-3 rounded-sm">
        <span onClick={() => setShowCart(true)}><PiShoppingCart/></span>
        {items.length !== 0 && <span className="text-sm bg-red-500 absolute top-[-10%] right-[-10%] p-1 text-white
        rounded-full flex justify-center items-center w-5 h-5">{items.length}</span>}
    </div>
    <div className={`${showCart ? "block" : "hidden"}`}>
      <CartContainer setShowCart={setShowCart}/>
    </div>
    </>
  )
}

export default Cart