
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import WishlistContainer from '../components/wishlist/WishlistContainer'

const Wishlist = () => {
  return (
    <div className="bg-gray-50 w-full relative h-full">
        <Header/>
        <WishlistContainer/>
        <Footer/>
    </div>
  )
}

export default Wishlist