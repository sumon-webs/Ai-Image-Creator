import ImageDetailsCard from "@/components/ImageDetailCard";
import { getImage } from "@/lib/DataFetch";

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const images = await getImage()

    const image = images.find(image => image.id == id);



    return (
        <div>
            <ImageDetailsCard image={image} />
        </div>
    );
};

export default PhotoDetailsPage;