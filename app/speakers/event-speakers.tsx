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

  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto">
      <h3 className="text-2xl font-bold">
        Event <span className="text-primary">Speakers</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-all duration-200 ease-in-out"
          >
            <div className="relative group flex justify-center items-center text-primary">
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
    </div>
  );
}
