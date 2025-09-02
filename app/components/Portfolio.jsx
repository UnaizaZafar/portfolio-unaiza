'use client'
import { arrowLeft } from "../utils/svgs";
import { projects } from "../utils/data"
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import WorkCards from "./WorkCards"
const Portfolio = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiperChange = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };
    return (
        <div id="portfolio" className=" min-h-screen  flex flex-col gap-6 items-center mx-auto px-6 py-8 max-w-screen-xl ">
            <p className="font-gamilia text-6xl lg:text-7xl xl:text-[100px] text-black ">
                Portfolio
            </p>
            <div className="relative w-full">
                {/* Previous Button */}
                <button
                    className={`cursor-pointer hover:bg-white hover:text-black max-lg:hidden  swiper-button-prev rounded-full lg:flex items-center absolute top-1/2 z-[2] -mt-8 ${isBeginning
                        ? "bg-white/10 opacity-50 grayscale"
                        : "opacity-100"
                        } transition-all duration-500 ease-in-out shadow-custom-1 max-md:size-8 md:p-2 xl:p-3 md:size-14 text-primary -ml-14`}
                >
                    {arrowLeft}
                </button>

                {/* Next Button */}
                <button
                    className={`cursor-pointer hover:bg-white hover:text-black max-lg:hidden swiper-button-next rounded-full lg:flex items-center absolute right-0 top-1/2 z-[2] -mt-8 ${isEnd ? "bg-white/10 opacity-50 grayscale" : "opacity-100"
                        } transition-all duration-500 ease-in-out  max-md:size-8 md:p-2 xl:p-3 md:size-14 shadow-custom-1 rotate-180 -mr-14`}
                >
                    {arrowLeft}
                </button>

                <div className="swiper-container max-xl:px-6">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // when window width is >= 480px
                            1024: {
                                slidesPerView: 1.1,
                                spaceBetween: 30
                            },
                        }}
                        speed={1200}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        onSlideChange={handleSwiperChange}
                        onSwiper={handleSwiperChange}
                        autoplay
                        autoHeight={false}
                    >
                        {projects.map((item) => (
                            <SwiperSlide key={item.id}>
                                <WorkCards item={item} key={item.id} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="max-lg:flex lg:hidden flex justify-center items-center w-full max-sm:py-3 py-6 ">
                    <div className="swiper-pagination w-fit self-center justify-center"></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio