import Image from "next/image";

import sponsor1 from "@/public/sponsor1.png";
import sponsor2 from "@/public/sponsor2.png";
import sponsor3 from "@/public/sponsor3.png";
import sponsor4 from "@/public/sponsor4.png";
import sponsor5 from "@/public/sponsor5.png";
import sponsor6 from "@/public/sponsor6.png";
import sponsor7 from "@/public/sponsor8.png";

import sponsor from "@/public/sponsor_img.webp";

export default function Sponsors() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full text-white">
      {/* Background Image */}
      <Image
        src={sponsor}
        alt="background"
        className=" inset-0 w-full h-full object-cover -z-10 min-h-96"
      />

      {/* Header Section */}
      <div className="absolute">
        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-widest">Who Helps Us</p>
          <h2 className="text-3xl font-bold">Our Sponsors</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-auto mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
        </div>

        {/* Sponsor Images */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-7 px-4">
          <Image
            src={sponsor1}
            alt="Sponsor 1"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <Image
            src={sponsor2}
            alt="Sponsor 2"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <Image
            src={sponsor3}
            alt="Sponsor 3"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <Image
            src={sponsor4}
            alt="Sponsor 4"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <Image
            src={sponsor5}
            alt="Sponsor 5"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <Image
            src={sponsor6}
            alt="Sponsor 6"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
          <Image
            src={sponsor7}
            alt="Sponsor 7"
            className="w-full h-auto object-contain hover:scale-105 transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
