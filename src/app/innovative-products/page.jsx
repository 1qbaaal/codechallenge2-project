import Image from "next/image";
import Link from "next/link";

export default function InnovativeProduct() {
  return (
    <div>
      <div className="w-full h-[70vh] relative">
        <Image
          src="/bgprod3.webp"
          fill={true}
          quality={100}
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col justify-start items-center w-full h-[40vh] text-justify">
        <h1 className="pt-10 text-[#b21f29] text-3xl font-bold">
          {" "}
          JAYAMIX INNOVATIVE PRODUCT{" "}
        </h1>
        <div className="px-52 py-10 text-lg">
          <p>
            Introducing our concrete innovations, our cutting-edge products
            revolutionize the construction industry by offering unparalleled
            strength, durability and versatility. Engineered with advanced
            technology and sustainable materials, our products are designed to
            exceed industry standards and meet the evolving needs of modern
            construction projects.
          </p>
          <p className="py-10 font-bold"> Our Product: </p>
        </div>
      </div>

      <div className="grid grid-cols-4 w-full h-auto px-44 bg-gray-200 py-10 gap-20">
        <Link href="/innovative-products/product-1">
          <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
            <h1 className=" font-bold text-lg">MiniMix</h1>
            <p className="text-sm"> Mini Readymix Concrete</p>
            <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
              <Image
                src="/minimix.jpg"
                fill={true}
                className="rounded-full mx-6"
              />
            </div>
          </div>
        </Link>

        <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
          <h1 className=" font-bold text-lg">Jayamix Super Concrete</h1>
          <p className="text-sm"> Easy Flow Concrete</p>
          <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative ">
            <Image src="/jsc.jpg" fill={true} className="rounded-full mx-6" />
          </div>
        </div>

        <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
          <h1 className=" font-bold text-lg">Jayamix SFSC </h1>
          <p className="text-sm"> Super Fast Setting Concrete</p>
          <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
            <Image src="/sfsc.jpg" fill={true} className="rounded-full mx-6" />
          </div>
        </div>

        <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
          <h1 className=" font-bold text-lg"> Jayamix Instant Concrete</h1>
          <p className="text-sm"> Instant Concrete</p>
          <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
            <Image src="/bi.webp" fill={true} className="rounded-full mx-6" />
          </div>
        </div>

        <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
          <h1 className=" font-bold text-lg">Jayamix Marine Concrete</h1>
          <p className="text-sm"> Special seawater Concrete</p>
          <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
            <Image
              src="/marine.jpg"
              fill={true}
              className="rounded-full mx-6"
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
              className="rounded-full mx-6"
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
              className="rounded-full mx-6"
            />
          </div>
        </div>

        <div className="bg-white h-64 w-72 border px-6 pt-2 shadow-lg rounded-md">
          <h1 className=" font-bold text-lg">Jayamix Porous Concrete</h1>
          <p className="text-sm"> Porous Concrete</p>
          <div className="rounded-full flex items-center mt-8 w-[200px] h-[100px] relative">
            <Image src="/poros.png" fill={true} className="rounded-full mx-6" />
          </div>
        </div>
      </div>

      
    </div>
  );
}
