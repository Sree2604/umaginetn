import Image from "next/image";
import bg from "@/public/tp_Bg.png";
import tn from "@/public/TN.png";
import AnimateUp from "@/components/animate-up";

export default function AcceleratingTN() {
  return (
    <div
      className="relative h-auto py-8 p-2 bg-cover bg-center flex flex-col md:flex-row items-center justify-center mb-10 sm:px-20"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="text-white w-full md:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Accelerating Tamil Nadu&lsquo;s Tech Progression!
        </h1>
        <p className="text-lg sm:text-xl">
          AT&lsquo;TN is not just a theme; it&lsquo;s a reinforcement for Tech
          organisations to pay attention to Tamil Nadu&lsquo;s thriving tech
          ecosystem. At UmagineTN, we are committed to propelling growth through
          the adoption of compelling strategies for Start-ups, harnessing the
          power of Emerging Technologies for productivity, fostering innovations
          for e-governance, and leveraging Geomatics for sustainability.
        </p>
      </div>
      <AnimateUp>
        <Image
          src={tn}
          alt="TN-Img"
          width={450}
          height={450}
          className="rounded-lg "
        />
      </AnimateUp>
    </div>
  );
}
