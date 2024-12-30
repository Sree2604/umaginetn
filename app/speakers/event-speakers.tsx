import Image from "next/image";
import Link from "next/link";

import AnimateUp from "@/components/animate-up";
import { eventSpeakers } from "@/speakers";

export default function EventSpeakers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center my-8 w-5/6 mx-auto">
      {eventSpeakers.map((speaker) => (
        <AnimateUp key={speaker.id}>
          <div className="flex flex-col items-center transition-all duration-200 ease-in-out">
            <Link
              className="relative group flex justify-center items-center text-primary cursor-pointer transition-all duration-150 ease-in-out"
              href={`/speakers/${speaker.id}`}
            >
              <Image
                src={speaker.photo}
                alt={speaker.name}
                className="rounded-full size-52 group-hover:opacity-60 object-cover"
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
            </Link>
            <h4 className="font-bold text-xl">{speaker.name}</h4>
            <p className="text-sm text-primary">{speaker.role}</p>
          </div>
        </AnimateUp>
      ))}
    </div>
  );
}
