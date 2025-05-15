import {MdDelete} from "react-icons/md"
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook'
import Button from "../../utils/Button"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../redux/cartSlice"
import { toast } from "react-toastify"

const Cart = () => {
    const {items, total} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    console.log(items)

    const removeItemFromCart = (item: number) => {
        dispatch(removeFromCart(item))
        toast.info("Product removed from cart")
    }
  return (
    <div className="pt-6">
        {
        items.map(item => {
            const {id, thumbnail, price, quantity, title} = item;
            return (
                <div className='flex mb-8 last:mb-0 w-full relative items-center' key={id}>
                    <figure className="bg-gray-100 rounded-sm">
                        <img src={thumbnail} alt={title} width={120}/>
                    </figure>
                    <div className="w-full px-4">
                        <strong className="text-[16px]">{title}</strong>
                        <p className="text-sm text-gray-500">Price: ${price*quantity}</p>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex border-2 border-gray-200 rounded-full p-1
                            w-[50%] justify-between items-center"><span className="bg-gray-200
                            rounded-full w-full text-center cursor-pointer" onClick={() => 
                              dispatch(decreaseQuantity(id))
                            }>-</span>
                            <p className="text-sm w-full text-center font-bold">{quantity}</p>
                            <span className="w-full bg-gray-200
                            rounded-full text-center cursor-pointer" onClick={() =>
                              dispatch(increaseQuantity(id))
                            }>+</span></div>
                            <span className="text-red-500 cursor-pointer" onClick={() => removeItemFromCart(id)}><MdDelete/></span>
                        </div>
                    </div>
                </div>
            )
        })
      }
      <div className="relative w-full bg-white  py-6">
        <strong className="w-full text-lg">CART SUMMARY</strong>
        <div className="flex justify-between items-center py-6 text-[16px]">
            <p className="font-semibold">Subtotal:</p>
            <p>${total.toFixed(2)}</p>
        </div>
        <Button label={`Proceed to checkout ($${total.toFixed(2)})`}/>
      </div>
    </div>
  )
}

export default Cart