"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import images from "../../public/sliderimage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";

// Custom Left Arrow
function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-3 rounded-full"
    >
      <FaArrowLeft />
    </button>
  );
}

// Custom Right Arrow
function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black text-white p-3 rounded-full"
    >
      <FaArrowRight />
    </button>
  );
}

export default function AutoSlider() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    // 🔥 track slide change
    beforeChange: (oldIndex, newIndex) => {
      setCurrent(newIndex);
    },
  };

  return (
    <div className="w-full container mx-auto mt-6 relative">

      {/* 🔥 Dynamic Welcome Message */}
      <div className="text-center mb-4">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
          Welcome 👋 {images[current]?.title}
        </h1>

        <p className="text-gray-600">
          Stay updated with latest news & stories
        </p>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((item) => (
          <div key={item.id} className="relative w-full h-[300px] md:h-[500px]">

            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-xl"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

            {/* Text Content */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-lg md:text-3xl font-bold">
                {item.title}
              </h2>
            </div>

          </div>
        ))}
      </Slider>

    </div>
  );
}