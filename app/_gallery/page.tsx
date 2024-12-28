import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import TitleBar from "@/components/title-bar";
import Gallery from "./gallery";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Gallery"} />
      <Gallery />
      <Footer />
      <ScrollUp />
    </>
  );
}
