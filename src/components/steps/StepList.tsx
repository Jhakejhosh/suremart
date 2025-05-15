import { steps } from "../../assets/data/steps"

const StepList = () => {
  return (
    <div className="px-4 py-10 lg:px-10 bg-white rounded-md shadow-sm md:grid lg:grid-cols-4
    w-full md:gap-6 md:grid-cols-2">
        {steps.map(step => {
            const {id, text, title, color} = step;
            return (
                <div key={id} className="flex items-center justify-between w-full mb-8 last:mb-0 md:mb-0">
                    <div className="flex-1 items-center w-full
                    justify-center"><span className={`${color === 'orange' && "bg-number-orange" ||
                        color === "blue" && "bg-number-blue" ||
                        color === "green" && "bg-number-green" ||
                        color === "violet" && "bg-number-violet"}  
                        font-bold w-full h-full mr-4 text-xl p-3`}>{id}
                    </span></div>
                    <div className="w-full">
                        <strong className="text-lg">{title}</strong>
                        <p className="text-[16px] text-gray-600 pt-2 lg:text-sm">{text}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default StepList