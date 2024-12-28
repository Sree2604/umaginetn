"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SocialGallery() {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    setShowIframe(true);
  }, []);

  const nav = useRouter();
  const Navigate = () => {
    nav.push("/gallery");
  };

  return (
    <div className="flex flex-col gap-5 my-6 w-5/6 mx-auto overflow-hidden">
      <h2 className="text-2xl font-bold">
        Social <span className="text-primary">Gallery</span>
      </h2>

      {showIframe && (
        <>
          <iframe
            src="//lightwidget.com/widgets/dee1623729df5ee3a43f6fc4ea2f8e1a.html"
            scrolling="no"
            className="lightwidget-widget w-full border-0 overflow-hidden"
          ></iframe>
        </>
      )}
      <button
        onClick={Navigate}
        className="mx-auto px-4 py-2 bg-primary hover:bg-secondary text-white font-bold rounded-md hover:bg-primary-dark transition-all duration-200 ease-in-out"
      >
        View More
      </button>
    </div>
  );
}
