import Image from "next/image";
import stadium from "@/../public/stadium.png";

export default function Home() {
  return (
    <Image src={stadium} alt="Stadium photo" />
  );
}
