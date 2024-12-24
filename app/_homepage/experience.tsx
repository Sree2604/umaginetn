import Image from "next/image";

import experience from "@/public/bg12.jpg";
import phoneExperience from "@/public/phoneExpe.png";

export default function Experience() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center p-3 sm:p-0">
      <h3 className="text-2xl font-bold sm:hidden">
        UmagaineTN 2025 <span className="text-primary">Experience</span>
      </h3>
      <div className="relative w-full h-full  sm:hidden">
        <Image
          src={phoneExperience}
          alt="Mobile Experience Img"
          style={{ objectFit: "contain" }}
          className="w-full"
        />
      </div>
      <div className="relative w-full h-full hidden sm:block">
        <Image
          src={experience}
          alt="Desktop Experience Img"
          className="w-full rounded"
        />
      </div>
    </div>
  );
}
