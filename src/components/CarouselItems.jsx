import { FaAngleRight } from "react-icons/fa6"


function CarouselItems({ item }) {
    const { img1, h1, p, btn, IMG } = item
    return (
        <div className='w-full  relative text-white'>
                <img src={IMG} className='w-full h-[450px] object-cover' alt="" />
                <div className="details absolute z-10 top-60 left-0 flex flex-col text-center items-center w-full ">
                    <h1 className='font-bold text-3xl '>{h1}</h1>
                    <p>{p}</p>
                    <button className="flex items-center gap-2 mt-5  py-2 px-4 font-extrabold bg-[#8bd80a] text-green-950 y-3 "> {btn} <FaAngleRight /></button>
                </div>

        </div>
    )
}

export default CarouselItems