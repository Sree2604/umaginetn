"use client";
import Modal from "@/components/modal";
import speaker from "@/public/speaker.jpg";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function SpeakerPage() {
  const { name }: { name: string } = useParams();

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
    {
      name: "Chris Green",
      photo: speaker,
      role: "Marketing Head",
    },
    {
      name: "Sophia Lee",
      photo: speaker,
      role: "Product Manager",
    },
  ];

  if (!name) {
    return <p>Loading...</p>;
  }

  const decodedName = decodeURIComponent(name);

  const speakerDetails = speakers.find(
    (speaker) => speaker.name === decodedName
  );

  if (!speakerDetails) {
    return <p>Speaker not found</p>;
  }

  return (
    <Modal>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around">
        <Image
          src={speakerDetails.photo}
          alt={speakerDetails.name}
          className="size-72 rounded-l"
        />
        <div className="text-center p-3">
          <h2 className="font-bold text-2xl">{speakerDetails.name}</h2>
          <p className="text-primary">{speakerDetails.role}</p>
          <p>
            Join us in shaping the future of technology, entrepreneurship, and
            talent mobility, contributing to the global wave of innovation.
          </p>
        </div>
      </div>
    </Modal>
  );
}
