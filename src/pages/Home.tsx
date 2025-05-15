import Banner from "../components/banner/Banner"
import Category from "../components/category/Category"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Product from "../components/product/Product"
import Steps from "../components/steps/Steps"


const Home = () => {
  return (
    <div className="bg-gray-50 w-full relative">
        <Header/>
        <Banner/>
        <Steps/>
        <Category/>
        <Product/>
        <Footer/>
    </div>
  )
}

export default Home