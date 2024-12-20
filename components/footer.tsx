import { facebookLink, instagramLink, twitterLink, youtubeLink } from "@/links";
import Image from "next/image";

import Venue from "@/public/venue.jpg";
import bg1 from "@/public/umagine 25 microsite-25.png";
import bg2 from "@/public/umagine 25 microsite-26.png";

export default function Footer() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Schedule", path: "/schedule" },
  ];
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
    },
  ];

  return (
    <div className="text-white relative flex flex-col justify-around items-center overflow-hidden w-full">
      <div className="absolute w-full h-full -z-30">
        <Image src={bg2} alt="background" className="h-1/2" />
        <Image src={bg1} alt="background" className="h-1/2" />
      </div>
      <div className="z-10 text-2xl font-bold flex flex-col items-center p-8">
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

        <button className="p-2 px-4 text-lg bg-primary hover:bg-secondary rounded font-semibold transition-colors duration-200 ease-in-out mt-8">
          Register Now!
        </button>
      </div>
      <div className="w-full md:w-4/5 p-3 bg-secondary rounded flex flex-col md:flex-row justify-center items-center gap-3 z-10">
        <div className="max-w-96 md:max-w-80 flex flex-col gap-4 items-center">
          <h5 className="font-bold text-3xl text-center">Venue</h5>
          <Image src={Venue} alt="venue" className="rounded" />
          <p className="flex flex-col">
            <span className="font-semibold text-lg">Chennai Trade Centre</span>
            <span>Nandambakkam, Nandambakkam, Tamil Nadu - 600089, India</span>
          </p>
          <a
            href="https://maps.app.goo.gl/7xZANUjJjTBxzJ3L9"
            target="_blank"
            className="p-2 px-4 bg-primary hover:bg-secondary border-2 border-primary rounded font-semibold transition-colors duration-200 ease-in-out"
          >
            Get Directions
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46473.55342003622!2d80.14643088500641!3d12.986407372415599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526734ffcb019d%3A0xb4e49a3ed028b70c!2sCHENNAI%20TRADE%20CENTRE%2C%20Nandambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600089!5e0!3m2!1sen!2sin!4v1734681613114!5m2!1sen!2sin"
          className="w-full rounded h-96 hidden md:block"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-8 z-10 p-8">
        <ul className="flex gap-5">
          {links.map(({ name, path }, index) => (
            <li
              key={index}
              className="border-2 border-white p-1 rounded-full hover:bg-primary"
            >
              <a href={path} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-5">
          {routes.map(({ name, path }) => (
            <li key={name} className="hover:text-primary font-semibold">
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
        <p>@2025 Umagine. All rights reserved</p>
      </div>
    </div>
  );
}
