
import { IconType } from "react-icons"
import {FiSettings} from "react-icons/fi"
import {IoBagCheckOutline, IoHelp, IoHeartOutline} from "react-icons/io5"


interface navMenuType {
    id: number,
    icon: IconType,
    menu: string,
    link: string
}

export const navMenu: navMenuType[] = [
    {
        id: 1,
        icon: FiSettings,
        menu: "My Account",
        link:"/account"
    },
    {
        id: 2,
        icon: IoBagCheckOutline,
        menu: "My Order",
        link: "/order"
    },
    {
        id: 3,
        icon: IoHeartOutline,
        menu: "Wishlist",
        link: "/wishlist"
    },
    {
        id: 4,
        icon: IoHelp,
        menu: "Help",
        link: "/"
    }
]