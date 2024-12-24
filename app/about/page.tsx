import React from "react";
import Image from "next/image";
import platform from "@/public/platformImg.jpg";
import convergence from "@/public/convergence.jpg";

import Navbar from "@/components/navbar";
import ScrollUp from "@/components/scroll-up";
import Footer from "@/components/footer";
import TitleBar from "@/components/title-bar";
import SocialMedia from "@/components/social-media";
import AnimateUp from "@/components/animate-up";
import Experience from "../_homepage/experience";

export default function Page() {
  return (
    <>
      <Navbar />
      <TitleBar header={"AboutUs"} />
      <div className="relative h-auto py-10 bg-cover bg-center flex flex-col sm:flex-row items-center justify-center mb-10 p-2 sm:px-20 overflow-hidden">
        <AnimateUp direction={"right"}>
          <Image
            src={platform}
            alt="platform-Img"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </AnimateUp>
        <div className="text-black w-full md:w-1/2 sm:px-10 mt-6 sm:mt-0 text-center sm:text-left">
          <h1 className="text-4xl flex flex-col font-bold mb-4">
            <span>Pivotal Platform for</span>
            <span className="text-primary">Technological</span>
            <span className="text-primary">Advancement</span>
          </h1>
          <p className="text-lg sm:text-lg">
            UmagineTN stands as an evolving platform propelling Tamil Nadu
            towards its trillion-dollar dream. Join us in shaping the future of
            technology, entrepreneurship, and talent mobility, contributing to
            the global wave of innovation.
          </p>
        </div>
      </div>
      <div className="relative h-auto py-10 p-2 bg-cover bg-[#ebb043] overflow-hidden bg-center flex flex-col-reverse sm:flex-row items-center justify-center mb-10 sm:px-20">
        <div className="text-white w-full md:w-1/2 px-4 sm:px-10 mt-6 sm:mt-0 text-center sm:text-left">
          <h1 className="text-4xl font-bold mb-4 flex flex-col">
            <span>Convergence of</span>
            <span className="text-primary">Visionaries & Experts:</span>
          </h1>
          <p className="text-lg sm:text-xl">
            Immerse yourself in an unparalleled gathering of distinguished
            policymakers, thought leaders, CXOs, start-up mavericks, tech
            virtuosos, skill developers, academia, and representatives from
            diverse technology sectors. UmagineTN is not just a platform;
            it&lsquo;s a dynamic melting pot of ideas, insights, and
            collaborations.
          </p>
        </div>
        <AnimateUp direction={"left"}>
          <Image
            src={convergence}
            alt="convergence-Img"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </AnimateUp>
      </div>
      <SocialMedia />
      <Experience />
      <Footer />
      <ScrollUp />
    </>
  );
}
