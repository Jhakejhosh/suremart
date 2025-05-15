
import { Link } from "react-router-dom";
import { navMenu } from "../../assets/data/navMenu"


const MenuList = () => {
  return (
    <>
      {
        navMenu.map(nav => {
            const {id, icon, link, menu} = nav;
            const IconElement = icon
            return (
                <Link to={link} key={id} className="flex items-center py-3 px-2
                hover:bg-gray-50 rounded-sm">
                    <span className="mr-3 text-xl"><IconElement/></span>
                    <p>{menu}</p>
                </Link>
            )
        })
      }
    </>
  )
}

export default MenuList