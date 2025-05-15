import category1 from "../images/beauty-category.png"
import category2 from "../images/fragrance-category.png"
import category3 from "../images/furniture-category.png"
import category4 from "../images/grocery-category.png"


interface categoryType {
    id: number,
    img: string,
    title: string
}

export const categories:categoryType[] = [
    {
        id: 1,
        img: category1,
        title: "Beauty"
    },
    {
        id: 2,
        img: category2,
        title: "Fragrances"
    },
    {
        id: 3,
        img: category3,
        title: "Furniture"
    },
    {
        id: 4,
        img: category4,
        title: "Groceries"
    }
]