import Image from "next/image";
import Link from "next/link";

import {
  facebookLink,
  instagramLink,
  registrationLink,
  twitterLink,
  youtubeLink,
} from "@/links";

import Venue from "@/public/venue.jpg";
import bg1 from "@/public/footer.jpg";
import bg2 from "@/public/redKeys.jpg";
import Map from "./map";

export default function Footer() {
  const links = [
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
      ),
      path: facebookLink,
      label: "Follow us on Facebook",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M16.5 7.5l0 .01"></path>
        </svg>
      ),
      path: instagramLink,
      label: "Follow us on Instagram",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
        </svg>
      ),
      path: twitterLink,
      label: "Follow us on Twitter",
    },
    {
      name: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
        >
          <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
          <path d="M10 9l5 3l-5 3z"></path>
        </svg>
      ),
      path: youtubeLink,
      label: "Follow us on YouTube",
    },
  ];

  return (
    <div className="text-white relative flex flex-col justify-around items-center overflow-hidden w-full">
      <div className="absolute w-full h-full -z-30">
        <Image src={bg1} alt="background" className="h-1/2 w-full" />
        <Image src={bg2} alt="background" className="h-1/2 w-full" />
      </div>
      <div className="z-10 text-2xl font-bold flex flex-col items-center p-8 text-black">
        <p>Hurry Up</p>
        <p>Book your Tickets</p>
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
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>

        <Link
          href={registrationLink}
          className="p-2 px-4 text-lg bg-primary text-white hover:bg-secondary rounded font-semibold transition-colors duration-200 ease-in-out mt-8"
        >
          Register Now!
        </Link>
      </div>
      <div
        id="directions"
        className="w-full md:w-4/5 p-3 bg-gray-100 text-black rounded flex flex-col md:flex-row justify-center items-center gap-3 z-10"
      >
        <div className="max-w-96 md:max-w-80 flex flex-col gap-4 items-center">
          <Image src={Venue} alt="venue" className="rounded" />
          <p className="flex flex-col">
            <span className="font-semibold text-lg">
              VENUE - Chennai Trade Centre
            </span>
            <span>Nandambakkam, Nandambakkam, Tamil Nadu - 600089, India</span>
          </p>
          <Link
            href="https://maps.app.goo.gl/7xZANUjJjTBxzJ3L9"
            target="_blank"
            className="p-2 px-4 bg-primary text-white hover:bg-secondary border-2 border-primary rounded font-semibold transition-colors duration-200 ease-in-out"
          >
            Get Directions
          </Link>
        </div>
        <Map />
      </div>
      <div className="flex flex-col items-center gap-8 z-10 p-8">
        <ul className="flex gap-5">
          {links.map(({ name, path, label }, index) => (
            <li
              key={index}
              className="border-2 border-white p-1 rounded-full hover:bg-primary"
            >
              <Link
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <p>@2025 Umagine. All rights reserved</p>
      </div>
    </div>
  );
}
