import { getImage } from "@/lib/DataFetch";
import ImageCard from "./ImageCard";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const TopSection = async () => {
    const images = await getImage();

    return (
        <div className="container mx-auto px-4 py-6">

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Top Images
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {images.slice(0, 8).map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}

            </div>
            <div className=" flex justify-end pt-5 ">
                <Link href={"/all-photos"} className="hover:translate-x-0.5">
                    <Button>
                        Show More <FaArrowRight />

                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default TopSection;