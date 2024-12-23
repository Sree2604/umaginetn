import Image from "next/image";

import AnimateUp from "@/components/animate-up";
import { gallery } from "@/gallery";

export default function SocialGallery() {
  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold">
        Social <span className="text-primary">Gallery</span>
      </h2>

      <AnimateUp>
        <div className="flex flex-col md:flex-row gap-3 w-full justify-between">
          {gallery.map((image, index) => (
            <Image
              key={index}
              src={image.photo}
              alt={image.alt}
              className="w-full md:w-1/4"
            />
          ))}
        </div>
      </AnimateUp>
    </div>
  );
}
