"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

// import Logo from "@/public/logo.png";
import Logo1 from "@/public/logo1.png";
import Logo3 from "@/public/logo3.png";
import Image from "next/image";
import { registrationLink } from "@/links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Speakers", path: "/speakers" },
    { name: "Partners", path: "/partners" },
    { name: "Agenda", path: "/agenda" },
  ];

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 400);
      if (menuOpen) setMenuOpen(false);
      lastScrollY.current = scrollY;
    }
  }, [menuOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [controlNavbar, handleClickOutside]);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div
        ref={menuRef}
        className={`${
          scrolled
            ? "fixed top-0 left-0 w-full bg-white text-black shadow-md"
            : "relative md:absolute w-full"
        } transform transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="flex justify-around items-center py-1">
          <div className="flex flex-row items-center">
            <Image src={Logo1} alt="logo" className="h-24 w-24" />
            <Image src={Logo3} alt="logo" className="h-14 w-44 " />
          </div>
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {routes.map(({ name, path }) => (
              <li
                key={name}
                className={`${
                  pathname === path
                    ? "text-primary "
                    : "text-gray-700 hover:text-primary"
                } transition-colors font-semibold duration-200`}
              >
                <a href={path}>{name}</a>
              </li>
            ))}
            <li>
              <a
                href={registrationLink}
                target="_blank"
                className="p-2 px-4 bg-primary hover:bg-secondary rounded text-white font-semibold transition-colors duration-200 ease-in-out"
              >
                Register
              </a>
            </li>
          </ul>
          <div
            className={`md:hidden p-2 rounded bg-primary text-white transition-all duration-200 ease-in-out ${
              menuOpen ? "border-2 border-red-400" : ""
            }`}
            onClick={toggleMenu}
          >
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-24 left-1/2 w-11/12 z-40 transform -translate-x-1/2 bg-white p-5 rounded shadow-lg transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4">
          {routes.map(({ name, path }) => (
            <li
              key={name}
              className={`${
                pathname === path
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              } transition-colors duration-200`}
            >
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
