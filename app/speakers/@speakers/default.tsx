import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import EventSpeakers from "../event-speakers";
import TitleBar from "@/components/title-bar";
import GuestSpeakers from "../guest-speakers";

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Speakers"} />
      <GuestSpeakers />
      <EventSpeakers />
      <Footer />
      <ScrollUp />
    </>
  );
}
