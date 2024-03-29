import Image from "next/image";
import Link from "next/link";

export default function InnovativeProduct() {
  return (
    <div>
      <div className="w-full h-[70vh] relative">
        <Image
          src="/bgprod3.webp"
          fill={true}
          loading="lazy"
          quality={100}
          // objectFit="cover"
          objectPosition="center"
          alt="Gambar Hero Product"
        />
      </div>

      <div className="flex flex-col justify-start items-center w-full h-[40vh] text-justify">
        <h1 className="pt-10 text-[#b21f29] text-3xl font-bold mobile:text-sm">
          {" "}
          JAYAMIX INNOVATIVE PRODUCT{" "}
        </h1>
        <div className="lg:px-52 px-10 py-10 text-lg mobile:px-10 mobile:text-xs">
          <p>
            Introducing our concrete innovations, our cutting-edge products
            revolutionize the construction industry by offering unparalleled
            strength, durability and versatility. Engineered with advanced
            technology and sustainable materials, our products are designed to
            exceed industry standards and meet the evolving needs of modern
            construction projects.
          </p>
          <p className="py-10 font-bold mobile:pt-10"> Our Product: </p>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 w-full h-auto sm:px-44 bg-gray-200 py-10 gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mobile:grid-cols-1 mobile:px-16 ">
          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">MiniMix</h1>
            <p className="text-sm"> Mini Readymix Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/minimix.jpg"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 1"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md ">
            <h1 className=" font-bold text-lg">Jayamix Super Concrete</h1>
            <p className="text-sm"> Easy Flow Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative ">
              <Image
                src="/jsc.jpg"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 2"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">Jayamix SFSC </h1>
            <p className="text-sm"> Super Fast Setting Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/sfsc.jpg"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 3"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg"> Jayamix Instant Concrete</h1>
            <p className="text-sm"> Instant Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/bi.webp"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 4"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">Jayamix Marine Concrete</h1>
            <p className="text-sm"> Special seawater Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/marine.jpg"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 5"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">Jayamix Normal Concrete</h1>
            <p className="text-sm"> Commonly Used Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/normal.jpg"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 6"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">Jayamix Low Heat Concrete</h1>
            <p className="text-sm"> Low Temperature Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/lowheat.jpg"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 7"
              />
            </div>
          </div>

          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">Jayamix Porous Concrete</h1>
            <p className="text-sm"> Porous Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/poros.png"
                fill={true}
                loading="lazy"
                className="rounded-full mx-6"
                alt="Gambar Product 8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
