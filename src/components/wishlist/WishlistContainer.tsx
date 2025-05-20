import { useAppSelector } from "../../hooks/reduxHook"
import EmptyWishlist from "./EmptyWishlist"
import Wishlist from "./Wishlist"


const WishlistContainer = () => {

    const {wishlist} = useAppSelector(state => state.wishlist)

  return (
    <div className='mt-24 md:bg-white lg:mx-80 px-4 rounded-sm md:mx-30 h-screen'>
        <div className='p-4 border-b-2 border-gray-100'>
            <strong className='text-xl'>Wishlist</strong>
        </div>
        <div>
            {wishlist.length === 0 ? <EmptyWishlist/> : <Wishlist/>}
        </div>
    </div>
  )
}

export default WishlistContainer