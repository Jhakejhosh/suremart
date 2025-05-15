import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <Link to="/">
        <div className="leading-4">
            <p className="bg-gradient-to-br from-banner-blue to-banner-pink text-transparent
            bg-clip-text font-semibold text-md">Suremart</p>
            <p className="text-xl">EXPRESS</p>
        </div>
    </Link>
  )
}

export default Logo