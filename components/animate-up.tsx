"use client";
import React, { useEffect, useRef, useState } from "react";

interface AnimateUpProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimateUp({
  children,
  direction = "up",
}: AnimateUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0" : "translate-y-32";
      case "down":
        return isVisible ? "translate-y-0" : "-translate-y-32";
      case "left":
        return isVisible ? "translate-x-0" : "translate-x-32";
      case "right":
        return isVisible ? "translate-x-0" : "-translate-x-32";
      default:
        return "translate-y-0"; // Default to "up" if no valid direction is passed
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()}`}
    >
      {children}
    </div>
  );
}
