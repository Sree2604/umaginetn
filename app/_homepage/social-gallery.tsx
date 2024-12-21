import Image from "next/image";

import Gallery1 from "@/public/gallery1.jpg";
import Gallery2 from "@/public/gallery2.jpg";
import Gallery3 from "@/public/gallery3.jpg";
import AnimateUp from "@/components/animate-up";

export default function SocialGallery() {
  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto overflow-hidden">
      <h3 className="text-2xl font-bold">
        Social <span className="text-primary">Gallery</span>
      </h3>

      <AnimateUp>
        <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
          <Image
            src={Gallery1}
            alt="Innovate Today, Inspire Tomorrow"
            className="w-full md:w-1/4"
          />
          <Image
            src={Gallery2}
            alt="Innovate Today, Inspire Tomorrow"
            className="w-full md:w-1/4"
          />
          <Image
            src={Gallery3}
            alt="Driving Innovation, Fueling Sustainability"
            className="w-full md:w-1/4"
          />
        </div>
      </AnimateUp>
    </div>
  );
}
