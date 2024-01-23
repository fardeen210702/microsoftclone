import { FaAngleRight } from "react-icons/fa6"


function CarouselItems({ item }) {
    const { img1, h1, p, btn, IMG } = item
    return (
        <div className="carouselitem w-full shrink-0  relative  sm:h-[800px] md:h-[900px] lg:h-[1000px] overflow-hidden xl:h-min">
            <img src={IMG} className='-z-10  sm:object-cover sm:w-full xl:hidden ' alt="" />
            <img src={img1} className="hidden xl:flex" alt="" />
            <div className="details absolute top-[50%] sm:top-[60%] flex flex-col items-center w-full xl:w-1/3 xl:top-[29%] xl:left-[3%] p-2 text-white gap-3 sm:gap-6">
                <h1 className="text-3xl  font-bold text-center sm:text-5xl ">{h1}</h1>
                <p className="text-xl text-center sm:text-2xl lg:text-3xl">{p}</p>
                <button className=" py-2 px-5 bg-[#9bf00b] font-extrabold text-green-950 flex items-center gap-4 sm:text-lg  sm:p-2">{btn}<FaAngleRight/> </button>
            </div>

        </div>
    )
}

export default CarouselItems