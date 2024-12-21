"use client";

import Image from "next/image";

import speaker from "@/public/speaker.webp";
import { useRouter } from "next/navigation";

export default function EventSpeakers() {
  const nav = useRouter();
  const speakers = [
    {
      name: "James Killer",
      photo: speaker,
      role: "Founder-Edita",
    },
    {
      name: "Jane Doe",
      photo: speaker,
      role: "Co-Founder-TechWave",
    },
    {
      name: "Alice Smith",
      photo: speaker,
      role: "CEO-Innovate",
    },
    {
      name: "Robert Brown",
      photo: speaker,
      role: "CTO-CreativeLabs",
    },
  ];

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
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:opacity-60 transition-all duration-200 ease-in-out"
          >
            <div
              className="relative group flex justify-center items-center text-primary"
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
            <h4 className="font-bold text-2xl">{speaker.name}</h4>
            <p className="text-sm">{speaker.role}</p>
          </div>
        ))}
      </div>
      <button
        onClick={Navigate}
        className="mx-auto px-4 py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-all duration-200 ease-in-out"
      >
        View All
      </button>
    </div>
  );
}
