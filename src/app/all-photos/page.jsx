import ImageCard from "@/components/ImageCard";
import { getImage } from "@/lib/DataFetch";

const AllImagePage = async () => {

    const images = await getImage()

    return (
        <div className="container mx-auto px-4 py-6">

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                All Photos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {images.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}

            </div>
        </div>
    );
};

export default AllImagePage;