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
            <div className="flex flex-col pl-[750px] pb-[150px] pr-[100px] text-white ">
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
          <p className="text-lg text-black pt-4 text-justify pt-10">
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
      <Link href="/innovative-products">
        <div className="flex items-center justify-center relative">
          <Image
            src="/prod1.jpg"
            quality={100}
            width={10000}
            height={10000}
            objectFit="cover"
            className="w-auto h-[100vh]"
          />
          <div className="absolute w-full h-full flex top-0 h-screen text-white flex-col justify-center items-start px-36 pt-10">
            <h1 className="text-5xl font-bold text-[#cc0000]"> Introducing</h1>
            <h1 className="text-5xl font-bold text-[#cc0000] pt-6">
              Our Products
            </h1>
          </div>
        </div>
      </Link>
      <div>
        <div className="carousel w-full h-[55vh]">
          <div id="item1" className="carousel-item w-full">
            <div className="w-full bg-[url('/city.jpeg')] object-cover relative ">
              <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 px-32">
                <h1 className="text-red-500 text-3xl">
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
            <div className="w-full bg-[url('/city.jpeg')] object-cover relative ">
              <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 px-32">
                <h1 className="text-red-500 text-3xl">
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
            <div className="w-full bg-[url('/city.jpeg')] object-cover relative ">
              <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 px-32">
                <h1 className="text-red-500 text-3xl">
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
      <div className="">
        <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-16 h-16 dark:text-violet-600"
            >
              <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
              <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
            </svg>
            <p className="px-6 py-2 text-lg text-black bg-white/70 font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">
              "As President Director, I'm thrilled to share with you the
              incredible stories and achievements of our company. From
              innovative projects to community initiatives, each page is filled
              with inspiration and impact. Join us as we explore the journey of
              our company and the remarkable people behind it. Together, we're
              making"
            </p>
            <div className="flex justify-center space-x-3">
              <div>
                <p className="leading-tight text-center">Pathama Sirikul</p>
                <p className="text-sm leading-tight dark:text-gray-700 text-center">
                  President Director Indinesia
                </p>
                <a
                  className="flex items-center py-2 space-x-1 text-sm dark:text-violet-600"
                  href="/"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
