import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

const ImageCard = ({ image }) => {
    const { imageUrl, title, category, likes, downloads } = image;

    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">

            {/* Image */}
            <div className="relative w-full h-52 md:h-64">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

                {/* Title */}
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {title}
                </h2>

                {/* Category */}
                <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 inline-block px-2 py-1 rounded-md">
                    {category}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 text-gray-600 dark:text-gray-300">

                    <div className="flex items-center gap-1">
                        <AiFillLike className="text-red-500" />
                        <span className="text-sm">{likes}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaDownload className="text-blue-500" />
                        <span className="text-sm">{downloads}</span>
                    </div>

                </div>

            </div>

            {/* Button */}
            <div className="p-3">
                <Button
                    fullWidth
                    className="bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
                >
                    View Details
                </Button>
            </div>

        </div>
    );
};

export default ImageCard;