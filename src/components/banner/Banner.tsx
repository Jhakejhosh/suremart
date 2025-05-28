import { useEffect } from "react"
import BannerList from "./BannerList"


const Banner = () => {

  useEffect(() => {
    const height = window.scrollY
    console.log(height)
  }, [])

  return (
    <div className="pt-22 px-4 lg:px-10 relative">
        <BannerList/>
    </div>
  )
}

export default Banner