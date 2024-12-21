import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import EventSpeakers from "./event-speakers";

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <EventSpeakers />
      <Footer />
      <ScrollUp />
    </>
  );
}
