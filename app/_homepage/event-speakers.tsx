"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import AnimateUp from "@/components/animate-up";
import { eventSpeakers } from "@/speakers";

export default function EventSpeakers() {
  const nav = useRouter();

  const Navigate = () => {
    nav.push("/speakers");
  };

  const NavigateSpeaker = (name: string) => {
    nav.push(`/speakers/${name}`);
  };

  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto">
      <h3 className="text-2xl font-bold">
        Event <span className="text-primary">Speakers</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {eventSpeakers.slice(0, 4).map((speaker, index) => (
          <AnimateUp key={index}>
            <div className="flex flex-col items-center hover:opacity-60 transition-all duration-200 ease-in-out">
              <div
                className="relative group flex justify-center items-center text-primary cursor-pointer mb-2"
                onClick={() => NavigateSpeaker(speaker.name)}
              >
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  width={200}
                  height={200}
                  className="rounded-full group-hover:opacity-60"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 absolute hidden group-hover:block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-xl lg:text-2xl text-primary">
                {speaker.name}
              </h4>
              <p className="text-sm">{speaker.role}</p>
            </div>
          </AnimateUp>
        ))}
      </div>
      <button
        onClick={Navigate}
        className="mx-auto px-4 py-2 bg-primary hover:bg-secondary text-white font-bold rounded-md hover:bg-primary-dark transition-all duration-200 ease-in-out"
      >
        View All
      </button>
    </div>
  );
}
