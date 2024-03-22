import Image from "next/image";

export default function ContactUs() {
  return (
    <div>
      <div className="w-full h-[50vh] flex relative mt-20">
        <Image src="/bgcu.jpg" fill={true} quality={100} objectFit="cover" />
      </div>
      <div className="grid grid-cols-2 relative">
        <div>
          {/* <Image
            src="/bgprod2.jpg"
            fill={true}
            quality={100}
            objectFit="cover"
          /> */}
        </div>
      </div>
    </div>
  );
}
