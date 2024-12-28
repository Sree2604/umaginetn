import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import TitleBar from "@/components/title-bar";

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <TitleBar header={"Gallery"} />
      <div className="w-full md:w-4/5 mx-auto my-6">
        <iframe
          src="//lightwidget.com/widgets/2e53cff6d8a5566e8b44b3e9ffaee213.html"
          scrolling="no"
          className="lightwidget-widget w-full border-0 overflow-hidden"
        ></iframe>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
}
