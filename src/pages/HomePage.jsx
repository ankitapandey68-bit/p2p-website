import { useEffect } from "react";
import Hero from "../components/Hero";
import TaglineSection from "../components/TaglineSection";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import LatestNews from "../components/LatestNews";
import OurBlogs from "../components/OurBlogs";

/* OurBlogs images – preload ke liye import (HomePage load hote hi start) */
import blogImg1 from "../assets/vecteezy_nighttime-panorama-wireless-network-and-connection_26175616.jpg";
import blogImg2 from "../assets/vecteezy_professional-home-cctv-and-security-cameras_22994012.jpg";
import blogImg3 from "../assets/vecteezy_close-up-of-server-rack-with-blinking-lights-and-connected_59573294.jpeg";

export default function HomePage() {
  /* OurBlogs images – background preload, scroll par fast dikhe */
  useEffect(() => {
    [blogImg1, blogImg2, blogImg3].forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
    return () => {
      [blogImg1, blogImg2, blogImg3].forEach((src) => {
        document.querySelector(`link[rel="preload"][href="${src}"]`)?.remove();
      });
    };
  }, []);

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
