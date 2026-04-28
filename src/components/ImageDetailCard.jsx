import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaArrowLeft, FaDownload } from "react-icons/fa";

const ImageDetailsCard = ({ image }) => {
    const {
        imageUrl,
        title,
        category,
        likes,
        downloads,
        prompt,
        model,
        resolution,
        createdAt,
        tags,
    } = image;

    return (
        <div className="container  mx-auto my-6 md:my-12">
            <p className=" text-center md:text-2xl lg:text-3xl font-bold pb-4">{title}'s details</p>

            <div className=" bg-white pb-3.5  dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">


                {/* Image */}
                <div className="relative w-full h-64 md:h-96">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">

                    {/* Title */}
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </h1>

                    {/* Category + Model */}
                    <div className="flex flex-wrap gap-2 text-sm">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                            {category}
                        </span>

                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                            {model}
                        </span>

                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                            {resolution}
                        </span>
                    </div>

                    {/* Prompt */}
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Prompt:</span> {prompt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags?.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

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

                        <div className="text-sm">
                            📅 {createdAt}
                        </div>

                    </div>

                </div>
                <Link href={`/all-photos`} className="p-5 ">
                    <Button className="  hover:-translate-x-0.5">
                        <FaArrowLeft /> Go back
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ImageDetailsCard;