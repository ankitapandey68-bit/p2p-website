import Hero from "../components/Hero";
import CursorBlocks from "../components/CursorBlocks";
import TaglineSection from "../components/TaglineSection";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import LatestNews from "../components/LatestNews";
import OurBlogs from "../components/OurBlogs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TaglineSection />
      <Services />
      <WhyChoose />
      <LatestNews />
      <OurBlogs />
    </>
  );
}
