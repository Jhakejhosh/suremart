
import { categories } from "../../assets/data/category"


const CategoryList = () => {
    

  return (
    <div className="my-10 relative">
        <h1 className="text-center text-2xl font-bold">Shop by Category</h1>
        <div className="md:flex justify-center items-center
        grid grid-cols-2 gap-2 mt-3">
                {
                    categories.map(category => {
                        const {id, img, title} = category;
                        return (
                            <div key={id} className="bg-white md:mr-8 last:mr-0
                            py-4 px-2 rounded-sm cursor-pointer hover:transition-transform
                            md:py-3 md:px-10 mr-2">
                                <figure className="flex justify-center items-center p-2 w-full">
                                    <img src={img} alt={title} width={60}/>
                                </figure>
                                <p className="text-center font-semibold font text-[16px] pt-2">{title}</p>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default CategoryList