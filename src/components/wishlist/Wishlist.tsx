import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook"
import { removeFromWishlist } from "../../redux/wishlistSlice"


const Wishlist = () => {

  const {wishlist} = useAppSelector(state => state.wishlist)
  const dispatch = useAppDispatch()

  const removeWishlist = (id:number) => {
    dispatch(removeFromWishlist(id))
    toast.info("Product removed from wishlist")
  }

  return (
    <div className="lg:p-4 w-full">
      {wishlist.map(wish => {
        const {id, thumbnail, price, title, stock} = wish;
        return (
          <div className="flex items-center w-full p-4 my-4" key={id}>
            <figure>
              <img src={thumbnail} alt={title} width={100}/>
            </figure>
            <div className="w-full ml-2">
              <p>{title}</p>
              <strong>${price}</strong>
              <p className="text-sm text-gray-500">{stock} units left</p>
              <div className="flex justify-between items-center text-sm w-ful">
                <span className="hover:bg-dark-transparent hover:text-white p-2 rounded-sm
                text-center cursor-pointer" onClick={() => removeWishlist(id)}>Remove</span>
                <span className="bg-black text-white text-center
                p-2 rounded-sm cursor-pointer">Add to cart</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Wishlist