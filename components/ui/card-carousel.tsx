"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { SparklesIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

// import { Badge } from "@/components/ui/badge";

interface ImageDescription {
  full_name: string;
  quote: string;
}

interface CarouselProps {
  images: {
    image: string;
    name: string;
    description: ImageDescription;
  }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="w-ace-y-4">
      <style>{css}</style>

      <div className="flex w-full items-center justify-center gap-4 mask-[linear-gradient(to_right,transparent,black_1%,black_99%,transparent)]">
        <div className="w-full">
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={showPagination}
            navigation={
              showNavigation
                ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                : undefined
            }
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full size-full  overflow-hidden rounded-3xl cursor-pointer bg-gray-100"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <Image
                    src={image.image}
                    alt={image.name}
                    width={200}
                    height={200}
                    className={`size-full  transition-transform duration-700 ${activeIndex === index ? "scale-110 " : "scale-100"}`}
                  />

                  {/* Overlay Informasi: Animasi dari bawah ke tengah */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-3/6 flex flex-col items-center justify-center bg-black/80 p-6 text-white text-center transition-all duration-500 ease-out

                       mask-[linear-gradient(to_bottom,transparent,black_50%,black_100%,transparent)]

          ${activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
                  >
                    <h3 className="text-lg font-bold mb-2">
                      {image.description.full_name || image.name}
                    </h3>
                    <p className="text-sm leading-relaxed italic">
                      {image.description.quote || "-"}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="size-full rounded-3xl">
                  <Image
                    src={image.src}
                    width={200}
                    height={200}
                    className="size-full rounded-xl"
                    alt={image.alt}
                  />
                </div>
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
