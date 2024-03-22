import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="carousel w-full h-full mt-20">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src="/bg-1.jpg" fill={true} quality={100} objectFit="cover" />
          <div className="absolute flex justify-center items-center w-full h-full">
            <a href="#slide4" className="btn btn-circle">
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
          <Image src="/bg2.webp" fill={true} quality={100} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative">
        <Image src="/bg-2.jpg" fill={true} quality={100} />
      </div>
    </>
  );
}
