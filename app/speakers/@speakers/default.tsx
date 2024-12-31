import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import EventSpeakers from "../event-speakers";
import TitleBar from "@/components/title-bar";

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Speakers"} />
      <EventSpeakers />
      <Footer />
    </>
  );
}
