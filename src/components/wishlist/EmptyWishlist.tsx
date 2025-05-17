import { useNavigate } from "react-router-dom"
import robot from "../../assets/images/robot-wishlist.png"
import Button from "../../utils/Button"

const EmptyWishlist = () => {

    const navigate = useNavigate()

  return (
    <div className="p-4 pt-12 lg:px-40">
        <figure className="flex justify-center items-center">
            <img src={robot} alt="empty-wishlist" width="200px"/>
        </figure>
        <div className="my-8 text-center relative w-full">
            <strong className="py-4">You haven't saved a product yet!</strong>
            <p className="text-sm py-4">Found something you like? Tap on the heart shape icon next to the product to add it to 
                your wishlist! All your saved products will appear here.
            </p>
            <div className="mt-6">
                <span className="bg-black p-4 text-center text-white text-[15px]
                rounded-sm cursor-pointer" onClick={() =>navigate("/")}>Continue Shopping</span>
            </div>
        </div>
    </div>
  )
}

export default EmptyWishlist