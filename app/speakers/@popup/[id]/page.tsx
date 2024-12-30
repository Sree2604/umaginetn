"use client";

import { useMemo, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

import Modal from "@/components/modal";
import { eventSpeakers } from "@/speakers";

export default function SpeakerPage() {
  const { id } = useParams();
  const router = useRouter();

  const speakerIndex = useMemo(() => {
    return eventSpeakers.findIndex((speaker) => speaker.id === id);
  }, [id]);

  const speakerDetails = useMemo(() => {
    return eventSpeakers[speakerIndex] || null;
  }, [speakerIndex]);

  const close = useCallback(() => {
    router.push(`/speakers`);
  }, [router]);

  const goToSpeaker = useCallback(
    (index: number) => {
      const targetSpeaker = eventSpeakers[index];
      if (targetSpeaker) {
        router.push(`/speakers/${targetSpeaker.id}`);
      }
    },
    [router]
  );

  const goToPrevious = useCallback(() => {
    const prevIndex =
      (speakerIndex - 1 + eventSpeakers.length) % eventSpeakers.length;
    goToSpeaker(prevIndex);
  }, [speakerIndex, goToSpeaker]);

  const goToNext = useCallback(() => {
    const nextIndex = (speakerIndex + 1) % eventSpeakers.length;
    goToSpeaker(nextIndex);
  }, [speakerIndex, goToSpeaker]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevious, goToNext, close]);

  useEffect(() => {
    if (id && speakerIndex === -1) {
      router.push("/speakers");
    }
  }, [id, speakerIndex, router]);

  if (!id) {
    return <p>Loading...</p>;
  }

  if (!speakerDetails) {
    return null;
  }

  return (
    <Modal>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 absolute top-3 right-3 hover:rotate-12 transition-all duration-150 ease-in-out cursor-pointer"
          onClick={close}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <Image
          src={speakerDetails.photo}
          alt={speakerDetails.name}
          width={288}
          className="rounded-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="font-bold text-2xl mb-2">{speakerDetails.name}</h2>
          <p className="text-primary mb-4">{speakerDetails.role}</p>
          <p>
            Join us in shaping the future of technology, entrepreneurship, and
            talent mobility, contributing to the global wave of innovation.
          </p>
        </div>
        <div className="flex w-full absolute justify-between">
          <button
            onClick={goToPrevious}
            className="bg-slate-300 bg-opacity-60 hover:bg-opacity-90 transition-all duration-150 ease-in-out text-white p-1 py-6 rounded-md"
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
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="bg-slate-300 bg-opacity-60 hover:bg-opacity-90 transition-all duration-150 ease-in-out text-white p-1 py-6 rounded-md"
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </Modal>
  );
}
