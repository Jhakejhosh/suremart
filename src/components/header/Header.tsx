import Cart from "./Cart"
import Logo from "./Logo"
import Profile from "./Profile"
{/****import Search from "./Search"***/}


const Header = () => {
  return (
    <div className="w-full fixed lg:px-6 px-4 py-5 flex justify-between items-center 
    shadow-md z-50 bg-white top-0">
        <Logo/>
        {/***<Search/>****/}
        <div className="flex items-center text-xl">
          <Cart/>
          <Profile/>
        </div>
    </div>
  )
}

export default Header