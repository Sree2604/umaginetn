import Image from "next/image";
import tn from "@/public/TN.png";
import AnimateUp from "@/components/animate-up";

export default function AcceleratingTN() {
  return (
    <div className="relative border-t-8 border-primary h-auto py-8 sm:py-12 p-3 bg-cover bg-center flex flex-col gap-12 md:flex-row items-center justify-center sm:px-20 overflow-hidden">
      <AnimateUp direction={"right"}>
        <Image src={tn} alt="TN-Img" width={430} className="rounded-lg " />
      </AnimateUp>
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 flex flex-col">
          Accelerating Tamil Nadu&lsquo;s
          <span className="text-primary">Tech Progression!</span>
        </h1>
        <p className="lg:text-lg">
          AT&lsquo;TN is not just a theme; it&lsquo;s a reinforcement for Tech
          organisations to pay attention to Tamil Nadu&lsquo;s thriving tech
          ecosystem. At UmagineTN, we are committed to propelling growth through
          the adoption of compelling strategies for Start-ups, harnessing the
          power of Emerging Technologies for productivity, fostering innovations
          for e-governance, and leveraging Geomatics for sustainability.
        </p>
      </div>
    </div>
  );
}
