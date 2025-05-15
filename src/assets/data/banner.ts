import banner1 from '../images/grocery-category.png'
import banner2 from '../images/banner2.png'
import banner3 from '../images/banner3.png'
import banner4 from '../images/payment.png'


interface bannerType {
    id: number,
    title: string,
    text: string,
    link: string,
    bgColor: string,
    img: string
}

export const banners: bannerType[] = [
    {
        id: 1,
        title: "Delivered with Care",
        text: "Your delivery will be well packaged",
        link:"#products",
        bgColor: "banner-pink",
        img: banner1
    },
    {
        id: 2,
        title: "Fast Delivery",
        text: "We deliver within 30min",
        link:"#products",
        bgColor: "banner-orange",
        img: banner2
    },
    {
        id: 3,
        title: "Secure Payment",
        text: "Your payment is always secured",
        link:"#products",
        bgColor: "banner-blue",
        img: banner4
    },
    {
        id: 4,
        title: "Excellent service",
        text: "we are always at your door",
        link:"#products",
        bgColor: "banner-green",
        img: banner3
    }
]