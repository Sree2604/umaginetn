"use client";

import { useState } from "react";
import Image from "next/image";

import speaker1 from "@/public/speaker1.jpg";

export default function EventSpeakers() {
  const speakers = [
    {
      name: "James Killer",
      photo: speaker1,
      role: "Founder-Edita",
    },
    {
      name: "Jane Doe",
      photo: speaker1,
      role: "Co-Founder-TechWave",
    },
    {
      name: "Alice Smith",
      photo: speaker1,
      role: "CEO-Innovate",
    },
    {
      name: "Robert Brown",
      photo: speaker1,
      role: "CTO-CreativeLabs",
    },
    {
      name: "Chris Green",
      photo: speaker1,
      role: "Marketing Head",
    },
    {
      name: "Sophia Lee",
      photo: speaker1,
      role: "Product Manager",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleSpeakers = showAll ? speakers : speakers.slice(0, 4);

  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto">
      <h3 className="text-2xl font-bold">
        Event <span className="text-primary">Speakers</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {visibleSpeakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:opacity-60 transition-all duration-200 ease-in-out"
          >
            <Image
              src={speaker.photo}
              alt={speaker.name}
              width={200}
              height={200}
              className="rounded-full"
            />
            <h4 className="font-bold text-2xl">{speaker.name}</h4>
            <p className="text-sm">{speaker.role}</p>
          </div>
        ))}
      </div>
      {/* Show More / Show Less Button */}
      {speakers.length > 4 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mx-auto px-4 py-2 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-all duration-200 ease-in-out"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      )}
    </div>
  );
}
