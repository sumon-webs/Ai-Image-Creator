"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
    {
        url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708",
        caption: "Welcome to Our Platform",
    },
    {
        url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b",
        caption: "Build Something Amazing",
    },
    {
        url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91",
        caption: "Fast & Secure Experience",
    },
];

const ImageSlide = () => {
    return (
        <div className="w-full relative">
            <Slide
                duration={2000}
                transitionDuration={900}
                infinite
                arrows={false}
                indicators={true}
            >
                {slideImages.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="h-125 w-full flex items-center justify-center bg-cover bg-center relative rounded-2xl overflow-hidden"
                            style={{ backgroundImage: `url(${slide.url})` }}
                        >
                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* content */}
                            <div className="relative text-center text-white px-6">
                                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                    {slide.caption}
                                </h1>
                                <p className="text-sm md:text-lg opacity-80">
                                    Experience modern web performance with Next.js
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default ImageSlide;