"use client";
import { useCallback, useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const onDismiss = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      router.push("/speakers");
    });
  }, [router]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    setShowModal(true);

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="absolute z-50 inset-0 bg-black/60 p-2 flex items-center justify-center"
    >
      <div
        ref={wrapper}
        className={`bg-white rounded w-11/12 lg:w-3/5 max-h-[calc(100vh-4rem)] overflow-y-auto transition-transform duration-300 ${
          showModal ? "scale-100 opacity-100" : "scale-85 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
