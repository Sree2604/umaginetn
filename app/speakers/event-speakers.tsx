"use client";

import Image from "next/image";
<<<<<<< HEAD
import speaker from "@/public/speaker.webp";
=======
>>>>>>> b65a75364120e761fc74927b257b665c10296313
import { useRouter } from "next/navigation";
import AnimateUp from "@/components/animate-up";
import { eventSpeakers } from "@/speakers";

export default function EventSpeakers() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start my-8 w-5/6 mx-auto">
      {eventSpeakers.map((speaker) => (
        <AnimateUp key={speaker.id}>
          <div className="flex flex-col items-center transition-all duration-200 ease-in-out">
            <div
              className="relative group flex justify-center items-center text-primary transition-all duration-150 ease-in-out cursor-pointer"
              onClick={() =>
                router.push(`/speakers/${speaker.id}`, { scroll: false })
              }
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
            </div>
            <h4 className="font-bold text-xl">{speaker.name}</h4>
            <p className="text-sm text-primary">{speaker.company}</p>
            <p className="text-sm text-primary">{speaker.role}</p>
          </div>
        </AnimateUp>
      ))}
    </div>
  );
}
