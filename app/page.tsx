import urica from "../public/urica2.jpg";
import Image from "next/image";
import auto from "../public/auto.jpg";
import mustang from "../public/mustang.jpg";
import mercedes from "../public/mercedes.jpg";

export default function Home() {
  return (
<main className="h-screen bg-black flex flex-col justify-end items-center">
  <Image
    height={1000}
    width={1000}
    src={urica}
    alt=""
    className="w-full h-full object-contain absolute top-0 left-0 z-0"
  />
  <div className="text-green-400 z-10 text-center w-1/2 mx-auto text-2xl leading-10 mb-10 font-thin ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ut
    aperiam veritatis libero placeat, blanditiis sit corrupti quidem ab
    dignissimos ex minus odio dolores temporibus molestias autem, doloribus,

  </div>
</main>


  );
}
