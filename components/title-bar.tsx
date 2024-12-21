import Image from "next/image";

import title from "@/public/title.png";

export default function TitleBar({ header }: { header: string }) {
  return (
    <div className="w-full max-h-96 h-full overflow-hidden relative flex justify-center items-center text-white">
      <Image src={title} alt="titlebar" className="" />
      <div className="absolute ">
        <h2 className="font-bold text-3xl">{header}</h2>
        <p>Home &gt; {header}</p>
      </div>
    </div>
  );
}
