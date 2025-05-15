import { Link } from 'react-router-dom'
import empty from '../../assets/images/empty-cart.png'
import Button from '../../utils/Button'
import { setShowType } from './CartContainer'

const EmptyCart = ({setShowCart}:setShowType) => {


  const navigateToProduct = () => {
    setShowCart(false);

  }

  return (
    <div className="mt-25 px-5 md:px-20">
      <figure className='flex justify-center items-center w-full'>
        <img src={empty} alt="empty-cat" width={230}/>
      </figure>
      <div className='text-center my-8'>
        <strong className='text-2xl font-bold'>Your cart is empty</strong>
        <p className='text-[15px] py-3'>You have no item in your cart, shop now to add items</p>
      </div>
      <div className='md:px-4'><Link to="/"><Button label='Shop now' onClick={navigateToProduct} /></Link></div>
    </div>
  )
}

export default EmptyCart