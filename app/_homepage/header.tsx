import Image from "next/image";

import header from "@/public/umagine 25 microsite-11.png";

export default function Header() {
  return (
    <div>
      <Image src={header} alt="" />
    </div>
  );
}
