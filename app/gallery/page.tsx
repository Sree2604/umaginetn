import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import TitleBar from "@/components/title-bar";
import SocialGallery from "../_homepage/social-gallery";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Gallery"} />
      <SocialGallery />
      <Footer />
      <ScrollUp />
    </>
  );
}
