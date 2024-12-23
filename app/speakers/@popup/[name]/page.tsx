"use client";
import Modal from "@/components/modal";
import { eventSpeakers } from "@/speakers";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useEffect } from "react";

export default function SpeakerPage() {
  const { name }: { name: string } = useParams();
  const nav = useRouter();

  const decodedName = useMemo(() => {
    if (!name) return null;
    try {
      return decodeURIComponent(name);
    } catch (error) {
      console.error("Error decoding name:", error);
      return null;
    }
  }, [name]);

  const speakerDetails = useMemo(() => {
    if (!decodedName) return null;
    return eventSpeakers.find((speaker) => speaker.name === decodedName);
  }, [decodedName]);

  useEffect(() => {
    if (name && decodedName && !speakerDetails) {
      nav.push("/speakers");
    }
  }, [name, decodedName, speakerDetails, nav]);

  if (!name || !decodedName) {
    return <p>Loading...</p>;
  }

  if (!speakerDetails) {
    return null;
  }

  return (
    <Modal>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-around p-5">
        <Image
          src={speakerDetails.photo}
          alt={speakerDetails.name}
          width={288}
          height={288}
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
      </div>
    </Modal>
  );
}
