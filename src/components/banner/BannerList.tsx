
import { banners } from "../../assets/data/banner"
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { useState } from "react"


const BannerList = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        if (currentSlide === banners.length - 1) {
            setCurrentSlide(0)
        }else{
            setCurrentSlide(currentSlide + 1)
        }
    }
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(banners.length - 1)
        }else{
            setCurrentSlide(currentSlide - 1)
        }
    }

   // useEffect(() => {
        //const autoChangeInterval = setInterval(() => {
           // nextSlide();
       // }, 5000)
       // return() => clearInterval(autoChangeInterval)
   // }, [])


  return (
    <div className="relative">
       {/*******buttons for slider */}
        <div className="flex justify-between items-center w-full md:hidden">
            <button onClick={prevSlide} className="text-2xl font-semibold bg-white rounded-full
            absolute z-40 top-[55%] left-[-3%] shadow-lg"><MdOutlineKeyboardArrowLeft/></button>
            <button onClick={nextSlide} className="text-2xl font-semibold bg-white rounded-full
            absolute z-40 top-[55%] right-[-3%] shadow-lg"><MdOutlineKeyboardArrowRight/></button>
        </div>
        <div className="relative overflow-hidden my-10 md:overflow-auto">
        <div className="flex md:grid md:gap-2 md:grid-cols-2 lg:grid-cols-4 relative 
            w-full transition-transform duration-500 ease-in-out"
            style={{
                transform: `translateX(-${currentSlide * 100}%)`
            }}>
        {banners.map(banner => {
            return (
                <div key={banner.id} className={`${banner.bgColor === 'banner-pink' && "bg-banner-pink" ||
                banner.bgColor === 'banner-blue' && 'bg-banner-blue' || 
                banner.bgColor === 'banner-green' && 'bg-banner-green' ||
                banner.bgColor === 'banner-orange' && 'bg-banner-orange'} flex justify-between items-center 
                px-6 py-7 rounded-md shadow-sm min-w-full lg:min-w-0`}>
                    <div className="text-white">
                        <h1 className="text-lg font-bold">{banner.title}</h1>
                        <p className="text-sm mb-4">{banner.text}</p>
                        <a href={banner.link}><button className={`${banner.bgColor === 'banner-pink' && "text-banner-pink" ||
                banner.bgColor === 'banner-blue' && 'text-banner-blue' || 
                banner.bgColor === 'banner-green' && 'text-banner-green' ||
                banner.bgColor === 'banner-orange' && 'text-banner-orange'} bg-white text-[12px]
                px-3 py-2 rounded-sm hover:bg-gray-100 transition-all shadow-md`}>View products</button></a>
                    </div>
                    <figure className="">
                        <img src={banner.img} alt={banner.title} width={170}/>
                    </figure>
                </div>
            )
        })}
        </div>
    </div></div>    
  )
}

export default BannerList