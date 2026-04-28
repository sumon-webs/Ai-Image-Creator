import HeroImageSlider from "@/components/HeroImageSlider";
import RatingCard from "@/components/Rating";
import TopSection from "@/components/TopSection";

export const metadata = {
  title: "Image-Lab | Home",
  description: "Generate image by ai",
};

export default function Home() {
  return (
    <div>
      <HeroImageSlider/>
      <RatingCard/>
      <TopSection/>
    </div>
  );
}
