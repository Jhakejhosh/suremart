import { Link } from "react-router-dom"
import { ProductType, useGetProductsQuery } from "../../redux/apiSlice"
import {LuCirclePlus} from "react-icons/lu"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook"
import { addToCart} from "../../redux/cartSlice"
import { toast } from "react-toastify"


const ProductList = () => {

    const {data} = useGetProductsQuery()
    const products = data?.products

    const dispatch = useAppDispatch()
    const {} = useAppSelector(state => state.cart)

    const addItemsToCart = (product:ProductType) => {
        const pro = dispatch(addToCart(product))
        console.log(pro)
        console.log(pro.payload.quantity)
        toast.success("Added to cart successfully")
    }

 
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4
   lg:px-10">
    {
       products?.map(product => {
        const discountPrice = product?.discountPercentage*product?.price/100 + product?.price
        return(
        <div key={product.id} className="bg-white rounded-sm flex p-4 relative 
        cursor-pointer">
            <Link to={`product/${product.id}`} ><figure className="bg-gray-100 rounded-sm w-full">
                <img src={product.thumbnail} alt={product.title} width={100} loading="lazy"/>
            </figure></Link>
            <div className="w-full ml-4">
                <div><strong className="mr-4">${product.price}</strong><strike
                className="text-gray-400">${discountPrice.toFixed(2)}</strike></div>
                <p className="text-[15px]">{product.title}</p>
            </div>
            <span className="absolute right-4 bottom-4 text-2xl" onClick={() => addItemsToCart(product)}><LuCirclePlus/></span>
        </div>
       )}) 
    }
   </div>
  )
}

export default ProductList