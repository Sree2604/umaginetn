import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "./_homepage/header";
import KeyTracks from "./_homepage/key-tracks";
import SocialMedia from "@/components/social-media";
import AcceleratingTN from "./_homepage/accelerating-tn";
import ScrollUp from "@/components/scroll-up";
import Experience from "./_homepage/experience";
import SocialGallery from "./_homepage/social-gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AcceleratingTN />
      <Experience />
      <KeyTracks />
      <SocialMedia />

      <SocialGallery />
      <Footer />
      <ScrollUp />
    </>
  );
}
