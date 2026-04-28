"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingSection = ({ initialRating = 0, title = "Rate This Item" }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(null);

    return (
        <div className=" container mx-auto my-5 md:my-14">
            <h1 className=" md:text-2xl lg:text-3xl text-center font-bold pb-3 ">Send your rating</h1>
            <div className="w-fit mx-auto  bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 space-y-4 border border-gray-100 dark:border-gray-800">

                {/* Title */}
                <div className="text-center space-y-1">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Give your honest feedback ⭐
                    </p>
                </div>

                {/* Stars */}
                <div className="flex justify-center items-center gap-2 py-2">

                    {Array.from({ length: 5 }).map((_, i) => {
                        const starValue = i + 1;

                        return (
                            <FaStar
                                key={i}
                                size={32}
                                className={`cursor-pointer transition duration-200
                ${(hover || rating) >= starValue
                                        ? "text-yellow-400 scale-110"
                                        : "text-gray-300"
                                    }`}

                                onClick={() => setRating(starValue)}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        );
                    })}

                </div>

                {/* Rating display */}
                <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                        {rating}/5
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {rating === 5
                            ? "Excellent ⭐"
                            : rating >= 4
                                ? "Very Good 👍"
                                : rating >= 3
                                    ? "Good 🙂"
                                    : rating >= 1
                                        ? "Needs Improvement ⚡"
                                        : "Not Rated"}
                    </p>
                </div>

                {/* Button (optional UI feel) */}
                <button
                    onClick={() => alert(`You rated ${rating}/5`)}
                    className="w-full bg-black text-white dark:bg-white dark:text-black py-2 rounded-lg hover:opacity-80 transition"
                >
                    Submit Rating
                </button>

            </div>
        </div>
    );
};

export default RatingSection;