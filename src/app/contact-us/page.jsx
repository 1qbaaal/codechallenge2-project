import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="pt-36">
      <div>
        <Image
          src="/bgcu.jpg"
          quality={100}
          objectFit="cover"
          width={10000}
          height={10000}
          className="w-[100vw] h-[60vh]"
        />
      </div>
      <div className="grid grid-cols-2 relative">
        {/* <div>
          <Image
            src="/bgprod2.jpg"
            height={500}
            width={1000}
            quality={100}
            objectFit="cover"
          />
        </div> */}
      </div>
    </div>
  );
}
