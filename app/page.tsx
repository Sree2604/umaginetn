import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "./_homepage/header";
import KeyTracks from "./_homepage/key-tracks";
import SocialMedia from "@/components/social-media";
// import SocialGallery from "./_homepage/social-gallery";
// import EventSpeakers from "./_homepage/event-speakers";
import AcceleratingTN from "./_homepage/accelerating-tn";
import ScrollUp from "@/components/scroll-up";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <KeyTracks />
      <AcceleratingTN />
      <SocialMedia />
      {/* <EventSpeakers /> */}
      {/* <SocialGallery /> */}
      <Footer />
      <ScrollUp />
    </>
  );
}
