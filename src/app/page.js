import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="carousel w-full h-full pt-20">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/bg-1.jpg"
            quality={100}
            objectFit="cover"
            width={10000}
            height={10000}
            className="w-[100vw] h-[90vh]"
          />
          <div className="absolute flex justify-center items-center w-full h-full">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <div className="flex flex-col pl-[750px] pb-[250px] pr-[100px] text-white ">
              <h1 className="text-5xl font-bold  ">
                {" "}
                WE DELIVER CONCRETE SOLUTIONS{" "}
              </h1>
              <p className="text-base pt-4 text-justify">
                With experince more than 40 years from jayamix as the readymix
                concrete supplier in Indoneisa as well acquired by SCG which
                experienced more than 100 years in Thailand, lead us to keep
                innovating our concrete products to support various development
                in Indonesia.
              </p>
            </div>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/bg2.webp"
            objectFit="cover"
            quality={100}
            width={10000}
            height={10000}
            className="w-[100vw] h-[90vh]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative">
        <Image
          src="/bg-2.jpg"
          objectFit="cover"
          quality={100}
          width={10000}
          height={10000}
          className="w-[100vw] h-[100vh]"
        />
        <div className="absolute flex flex-col top-0 h-screen text-white items-center px-60 pt-20">
          <h1 className="text-5xl font-bold text-[#cc0000]">
            {" "}
            Jayamix by SCG{" "}
          </h1>
          <p className="text-lg pt-4 text-justify pt-10">
            PT SCG Readymix Indonesia or Jayamix by SCG has been experienced for
            more than 40 years in the Indonesian construction industry. We
            Deliver Concrete Solutions, is our commitment to provide the right
            and real pouring solutions according to project needs. Jayamix by
            SCG accommodates the needs of readymix concrete and Beton Instan®
            (bagged concrete) for residential, office building, up to
            infrastructure construction with more than 50 batching plants and
            600 mixer trucks spread across cities in Indonesia.{" "}
            <Link href="/about-us" className="text-blue-500">
              {" "}
              <u>Read More</u>
            </Link>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
