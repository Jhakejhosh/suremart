import { useParams } from "react-router-dom"
import { ProductType, useGetProductsQuery } from "../../redux/apiSlice";
import { useState } from "react";
import {LiaStar, LiaStarHalfAltSolid, LiaStarSolid, LiaShippingFastSolid} from "react-icons/lia"
import {IoHeartOutline, IoHeartSharp} from "react-icons/io5"
import {PiKeyReturn} from "react-icons/pi"
import {IoMdClose} from "react-icons/io"
import Button from "../../utils/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { addToCart } from "../../redux/cartSlice";
import { addToWishlist, setWishlist } from "../../redux/wishlistSlice";
import { toast } from "react-toastify";
import { capitalisedFirstLetter } from "../../utils/CapitalisedFirstLetter";

const ProductById = () => {
    
    const {id} = useParams();
    const {data} = useGetProductsQuery()
    const products = data?.products
    const productId = products?.find(product => product.id === Number(id))
    const productImg = productId?.images[0]

    const dispatch = useAppDispatch()
    const {wishlistPresent} = useAppSelector(state => state.wishlist)

    console.log(productId)

    const [selectedImg, setSelectedImg] = useState<string|undefined>(productImg)
    const [showReview, setShowReview] = useState(false)

    const selectImage = (image:string) => {
        setSelectedImg(image)
    }

    const addItemtocart = (productId: ProductType) => {
        dispatch(addToCart(productId))
        toast.success("Added to cart successfully")
    }
    const addWishlist = (productId: ProductType) => {
        dispatch(addToWishlist(productId))
        toast.success("Successfully added to wishlist")
    }

    const renderStars = (rating: number|undefined) => {
        const starArray:number[] | undefined = [1,2,3,4,5]
        return starArray.map(star => {
            if(star <= rating!) {
                return <LiaStarSolid key={star} className="text-yellow-500"/>
            }else if (star <= rating! + 0.5) {
                return <LiaStarHalfAltSolid key={star} className="text-yellow-500"/>
            }else {
                return<LiaStar key={star} className="text-yellow-500"/>
            }
        })
        
    }

    const discountPrice = productId?.discountPercentage*productId?.price/100 + productId?.price

  return (
    <div className="pt-22 relative px-4 md:px-30 lg:px-50">
        <div className="lg:flex justify-between items-center lg:bg-white lg:p-4 lg:mt-8">
            <figure className="w-full">
                {
                    productId?.images?.length === 3 ? (
                        <div className="md:flex justify-between items-center">
                            {selectedImg && <img src={selectedImg} alt={productId.title} className="md:w-[80%]" loading="lazy"/>}
                            <div className="flex justify-center items-center md:flex-col gap-4">
                                {
                                    productId?.images.map((img, index) => (
                                        <figure key={index} onClick={() => selectImage(img)} className="bg-gray-200 
                                        mr-4 last:mr-0 rounded-sm md:mr-0 cursor-pointer 
                                        hover:border-2 hover:border-banner-blue ">
                                            <img src={img} alt="img" width={80} loading="lazy"/>
                                        </figure>
                                    ))
                                }
                            </div>
                        </div>
                    ) : (<><img src={productId?.images[0]} alt={productId?.title}/></>)
                }
            </figure>
            <div className="w-full px-4 lg:px-6 py-8 lg:py-3">
                <div className="border-b-2 border-gray-200 pb-2">
                    <strong className="text-2xl">{productId?.title}</strong>
                    <div className="flex items-center font-medium
                    mt-2">Brand:<p className="text-banner-blue ml-1">{productId?.brand ? 
                        productId?.brand : `${capitalisedFirstLetter(productId?.category)} shopping`
                    } | {capitalisedFirstLetter(productId?.category)}</p></div>
                </div>
                <div className="py-4 flex items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                        <span className="flex mr-2 text-xl">{renderStars(productId?.rating)}</span>
                        <div>({productId?.rating.toFixed(1)} rating)</div>
                    </div>
                    { wishlistPresent ? 
                    <span className="text-3xl text-banner-blue"><IoHeartSharp/></span> :
                    <span className="text-3xl text-banner-blue"  onClick={() => addWishlist(productId!)}><IoHeartOutline/></span>}
                </div>
                <div>
                    <p className="text-gray-500 text-[15px]">{productId?.description}</p>
                </div>
                <div className="flex justify-between items-center py-6">
                    <strong className="text-xl">${productId?.price}</strong>
                    <strike className="text-lg text-gray-400">${discountPrice.toFixed(2)}</strike>
                </div>
                <div className="flex items-center">
                    <span className="text-3xl border-2 border-gray-300 rounded-sm
                    p-2 text-gray-700"><LiaShippingFastSolid/></span>
                    <div className="pl-4">
                        <strong>Shipping information</strong>
                        <p className="text-gray-500 text-sm pt-2">{productId?.shippingInformation}</p>
                    </div>
                </div>
                <div className="flex items-center py-6">
                    <span className="text-3xl border-2 border-gray-300 rounded-sm
                    p-2 text-gray-700"><PiKeyReturn/></span>
                    <div className="pl-4">
                        <strong>Return policy</strong>
                        <p className="text-gray-500 text-sm pt-2">{productId?.returnPolicy}</p>
                    </div>
                </div>
                <div className="">
                    <strong>Reviews</strong>
                    <p className="text-sm pt-4 text-gray-500
                    cursor-pointer hover:text-banner-blue" onClick={() => setShowReview(true)}><i>Click to see reviews</i></p>
                    {showReview && <div className="bg-dark-transparent fixed z-50
                    w-full h-screen top-0 left-0 flex justify-center items-center"><div className="bg-white
                    lg:w-[30%] md:w-[70%] rounded-md shadow-md w-full fixed md:relative top-[10%] h-screen md:h-auto
                    "><div className="flex justify-between items-center p-5 border-b-2 border-gray-100">
                        <strong className="text-xl">Customer Feedback</strong>
                        <span className="text-lg
                    cursor-pointer hover:text-banner-blue" onClick={() =>
                        setShowReview(false)
                    }><IoMdClose/></span></div>
                    <div className="p-5">{productId?.reviews.map((review, index) => {
                        const date = new Date(review.date)
                        const day = String(date.getDate()).padStart(2, '0') 
                        const month = String(date.getMonth()).padStart(2, '0')
                        const year = String(date.getFullYear())
                        const shortDate = `${day}/${month}/${year}`
                        return (
                        <div key={index} className="py-6  border-b-2 border-gray-100
                        last:border-0">
                            <div className="flex justify-between items-center
                            mb-2 last:mb-0">
                                <div className="flex">{renderStars(review.rating)}</div>
                                <p className="text-gray-500 text-sm">{shortDate}</p>
                            </div>
                            <div>
                                <p>{review.comment}</p>
                                <p className="text-sm text-gray-400 pt-4">by {review.reviewerName}</p>
                            </div>
                        </div>
                    )})}</div></div></div>}
                </div>
                <div className="py-4">
                    <Button label="Add to cart" onClick={() => addItemtocart(productId!)}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductById