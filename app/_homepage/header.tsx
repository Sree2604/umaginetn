"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import header1 from "@/public/header1.png";
import header2 from "@/public/header2.png";
import { registrationLink } from "@/links";

const targetDate = new Date("2025-01-09T00:00:00");

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full flex flex-col-reverse md:flex-row items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="absolute flex flex-col justify-center items-center w-full md:gap-2 lg:gap-4 xl:gap-8 translate-y-5">
          <h1 className="flex flex-col gap-3 text-3xl md:text-4xl lg:text-6xl font-bold text-primary">
            <span>Embark on a</span>
            <span>Journey of</span>
            <span>Transformation</span>
          </h1>
          <a
            href={registrationLink}
            target="_blank"
            className="p-2 px-4 text-lg bg-primary hover:bg-secondary rounded text-white font-semibold transition-colors duration-200 ease-in-out scale-75 md:scale-100"
          >
            Register Now
          </a>
          <div className="flex gap-8 text-primary scale-65 lg:scale-100">
            <p className="flex flex-col items-center justify-center border-[5px] border-yellow-400 border-dashed rounded-full size-20">
              <span className="text-2xl font-bold">{timeLeft.days}</span>
              <span className="text-xs font-semibold">DAYS</span>
            </p>
            <p className="flex flex-col items-center justify-center border-[5px] border-blue-600 border-dashed rounded-full size-20">
              <span className="text-2xl font-bold">{timeLeft.hours}</span>
              <span className="text-xs font-semibold">HOURS</span>
            </p>
            <p className="flex flex-col items-center justify-center border-[5px] border-green-400 border-dashed rounded-full size-20">
              <span className="text-2xl font-bold">{timeLeft.minutes}</span>
              <span className="text-xs font-semibold">MINUTES</span>
            </p>
            <p className="flex flex-col items-center justify-center border-[5px] border-red-600 border-dashed rounded-full size-20">
              <span className="text-2xl font-bold">{timeLeft.seconds}</span>
              <span className="text-xs font-semibold">SECONDS</span>
            </p>
          </div>
          <p className="flex justify-center items-center gap-2 text-lg scale-85 md:scale-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            <span>Jan 09 - 10, 2025</span>
          </p>
        </div>
        <Image
          src={header2}
          alt="header"
          className="w-full object-cover h-full -z-10"
        />
      </div>
      <Image
        src={header1}
        alt="header"
        className="w-full object-cover h-full"
      />
    </div>
  );
}
