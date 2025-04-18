"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
    "/g_1.jpg",
    "/g_2.jpg",
    "/g_3.jpg",
    "/g_4.jpg",
    "/g_5.jpg",
    "/g_6.jpg",
    "/g_7.jpg",
];

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            width={1280}
                            height={400}
                            alt="group image"
                            className="w-full h-[600px] object-contain"
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
