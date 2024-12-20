"use client";
import React, { useEffect, useRef, useState } from "react";

interface AnimateUpProps {
  children: React.ReactNode;
}

export default function AnimateUp({ children }: AnimateUpProps) {
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

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-out ${
        isVisible
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-32 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
