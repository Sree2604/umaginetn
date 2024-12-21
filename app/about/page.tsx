import React from "react";
import Image from "next/image";
import bg from "@/public/tp_Bg.webp";
import tn from "@/public/TN.webp";
import experience from "@/public/experience.webp";
import platform from "@/public/platformImg.webp";
import convergence from "@/public/convergence.webp";
import phoneExperience from "@/public/phoneExpe.webp";

import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="relative w-full sm:w-11/12 h-[60vh] sm:h-full lg:h-screen bg-cover bg-center flex items-center justify-center mx-auto">
        <div className="relative w-full h-full sm:hidden mb-10">
          <Image
            src={phoneExperience}
            alt="Mobile Experience Img"
            layout="fill"
            objectFit="contain"
            className="z-0 transform scale-110"
          />
        </div>

        <div className="relative w-full h-full hidden sm:block">
          <Image
            src={experience}
            alt="Desktop Experience Img"
            layout="fill"
            objectFit="contain"
            className="z-0"
          />
        </div>
      </div>

      <div
        className="relative h-auto py-10 bg-cover bg-center flex flex-col sm:flex-row items-center justify-center mb-10 sm:px-20"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="text-white w-full sm:w-[40%] px-4 sm:px-5 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Accelerating Tamil Nadu&lsquo;s Tech Progression!
          </h1>
          <p className="text-base sm:text-xl">
            AT&lsquo;TN is not just a theme; it&lsquo;s a reinforcement for Tech
            organisations to pay attention to Tamil Nadu&lsquo;s thriving tech
            ecosystem. At UmagineTN, we are committed to propelling growth
            through the adoption of compelling strategies for Start-ups,
            harnessing the power of Emerging Technologies for productivity,
            fostering innovations for e-governance, and leveraging Geomatics for
            sustainability.
          </p>
        </div>
        <div className="mt-6 sm:mt-0">
          <Image
            src={tn}
            alt="TN-Img"
            width={450}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="relative h-auto py-10 bg-cover bg-center flex flex-col sm:flex-row items-center justify-center mb-10 sm:px-20">
        <div>
          <Image
            src={platform}
            alt="platform-Img"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-black w-1/2 px-4 sm:px-10 mt-6 sm:mt-0 text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Pivotal Platform for Technological Advancement
          </h1>
          <p className="text-2xl sm:text-lg">
            UmagineTN stands as an evolving platform propelling Tamil Nadu
            towards its trillion-dollar dream. Join us in shaping the future of
            technology, entrepreneurship, and talent mobility, contributing to
            the global wave of innovation.
          </p>
        </div>
      </div>

      <div className="relative h-auto py-10 bg-cover bg-center flex flex-col-reverse sm:flex-row items-center justify-center mb-10 sm:px-20">
        <div className="text-black w-1/2 px-4 sm:px-10 mt-6 sm:mt-0 text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Convergence of Visionaries & Experts:
          </h1>
          <p className="text-2xl sm:text-xl">
            Immerse yourself in an unparalleled gathering of distinguished
            policymakers, thought leaders, CXOs, start-up mavericks, tech
            virtuosos, skill developers, academia, and representatives from
            diverse technology sectors. UmagineTN is not just a platform;
            it&lsquo;s a dynamic melting pot of ideas, insights, and
            collaborations.
          </p>
        </div>
        <div>
          <Image
            src={convergence}
            alt="convergence-Img"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <Footer />
      <ScrollUp />
    </>
  );
}
