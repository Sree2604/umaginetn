import Image from "next/image";

import title from "@/public/title.webp";

export default function TitleBar({ header }: { header: string }) {
  return (
    <div className="w-full max-h-96 h-full overflow-hidden relative flex justify-center items-center">
      <Image src={title} alt="titlebar" className="w-full" />
      <div className="absolute text-center">
        <h2 className="font-bold text-4xl text-primary">{header}</h2>
        <p>Home &gt; {header}</p>
      </div>
    </div>
  );
}
