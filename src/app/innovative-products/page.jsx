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

      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <div className="w-full bg-[url('/car1.jpeg')] object-cover relative ">
              <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 px-32">
                <h1 className="text-white text-3xl">
                  What our customers are saying about us
                </h1>
                <p className=" text-center pt-8 text-lg text-white">
                  " Sinarmas memiliki banyak proyek di Indonesia seperti di BSD,
                  Jakarta,Tangerang, Kota Wisata maupun Grand Wisata. BSD
                  sendiri memiliki banyak pekerjaan proyek yang sudah selesai
                  maupun sedang berjalan seperti Ice BSD, The Breeze, Green
                  Office Park, dan Knowladge Hub. Kami sudah menggunakan produk
                  SCG karena sudah terbukti berkualitas, dari sekian lama kami
                  menggunakan produk SCG dapat dilihat dari hasil bangunan
                  proyek kami yang sebelum-sebelumnya. Selain itu SCG juga sudah
                  menjalankan tata kelola yang baik, sehingga kami percaya bahwa
                  SCG bertanggung jawab terhadap lingkungan dan masyarakat. Saat
                  ini kami sudah menggunakan Produk SCG seperti , SCG Pipe
                  precast, SCG Bata Ringan, SCG Semen, dan Jayamix by SCG.
                  Produk SCG memiliki kualitas yang baik. Pengerjaan project
                  juga bisa lebih hemat secara waktu dan tenaga kerja, secara
                  pembelian juga praktis dan mudah. "
                </p>
                <p className="mt-4 text-white">
                  — Bapak Purwanto – Quantity Surveyor Commercial Sinarmasland
                </p>
              </div>
            </div>
          </div>
          <div id="item2" className="carousel-item w-full">
            <div className="w-full bg-[url('/car1.jpeg')] object-cover relative ">
              <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 px-32">
                <h1 className="text-white text-3xl">
                  What our customers are saying about us
                </h1>
                <p className=" text-center pt-8 text-lg text-white">
                  " Kualitas SCG sudah terbukti bagus dengan harga yang
                  terjangkau. Tidak kalah dengan produk - produk lain yang mahal
                  harganya. Selain itu, SCG juga ramah lingkungan karena
                  memiliki sertifikat green label. SCG memiliki performa baik
                  dan berkualitas. Dengan produk SCG, pengerjaan project juga
                  bisa lebih efisien secara waktu dan tenaga kerja didukung
                  dengan pembelian yang mudah. "
                </p>
                <p className="mt-4 text-white">
                  — Direktur Utama PT. Wadaya Kreasi Sejatera, Kontraktor
                  Sinarmas Land Grand Wisata Bekasi
                </p>
              </div>
            </div>
          </div>
          <div id="item3" className="carousel-item w-full">
            <div className="w-full bg-[url('/car1.jpeg')] object-cover relative ">
              <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 px-32">
                <h1 className="text-white text-3xl">
                  What our customers are saying about us
                </h1>
                <p className=" text-center pt-8 text-lg text-white">
                  " Kalau dari segi aplikasi Semen SCG mudah diaplikasikan,
                  kedua sangat kokoh, yang ketiga agak pengiritan dari segi
                  untuk pengaplikasiannya. "
                </p>
                <p className="mt-4 text-white">
                — Kepala Proyek Kanaya City, Sukabumi
                </p>
              </div>
            </div>
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </div>
  );
}
