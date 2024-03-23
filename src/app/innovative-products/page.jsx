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
        <section className="my-8">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
            <h1 className="text-4xl font-semibold leading-none text-center">
              What our customers are saying about us
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 justify-center lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-base italic text-[#b21f29]">
                  Sinarmas memiliki banyak proyek di Indonesia seperti di BSD,
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
                  pembelian juga praktis dan mudah.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
              <p>
                — Bapak Purwanto – Quantity Surveyor Commercial Sinarmasland
              </p>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-base italic">
                  Kualitas SCG sudah terbukti bagus dengan harga yang
                  terjangkau. Tidak kalah dengan produk - produk lain yang mahal
                  harganya. Selain itu, SCG juga ramah lingkungan karena
                  memiliki sertifikat green label. SCG memiliki performa baik
                  dan berkualitas. Dengan produk SCG, pengerjaan project juga
                  bisa lebih efisien secara waktu dan tenaga kerja didukung
                  dengan pembelian yang mudah.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
              <p>
                — Direktur Utama PT. Wadaya Kreasi Sejatera, Kontraktor Sinarmas
                Land Grand Wisata Bekasi
              </p>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-base italic">
                  Kalau dari segi aplikasi Semen SCG mudah diaplikasikan, kedua
                  sangat kokoh, yang ketiga agak pengiritan dari segi untuk
                  pengaplikasiannya.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
              <p>— Kepala Proyek Kanaya City, Sukabumi</p>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-base italic text-[#b21f29]">
                  Untuk kualitas SCG tentunya lebih baik dipakainya, lebih cepat
                  keringnya, dan tidak ada retak rambut. Pokoknya SCG oke deh.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
              <p>
                — Bapak Didit – Mandor Bangunan Perumahan Annisa Cantik
                Cikembar, Sukabumi
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
