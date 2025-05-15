
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import { clearCart } from "../../redux/cartSlice"
import Cart from "./Cart"

const CartItems = () => {

    const {items} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    console.log(items)

  return (
    <div className="mt-15 relative w-full">
      <div className="px-5 md:px-8 pb-8">
        <div className="flex justify-between items-center mb-4">
            <strong>Cart ( {items.length} )</strong>
            <span className="text-sm cursor-pointer border-2 border-gray-200
            rounded-lg px-2" onClick={() => dispatch(clearCart())}>clear cart</span>
        </div>
        <Cart/>
        </div>
    </div>
  )
}

export default CartItems