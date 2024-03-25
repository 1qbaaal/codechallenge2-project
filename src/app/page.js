import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <div className="w-full h-auto relative pt-20">
          <Image
            src="/bg_ir2.jpg"
            quality={100}
            loading="lazy"
            // objectFit="cover"
            width={500}
            height={500}
            className="w-[100vw] h-auto"
            alt="Gambar Hero"
          />
        </div>
        <div className="absolute w-full lg:h-[100vh] flex justify-center items-center top-0 sm:pt-32 md:pt-40 lg:pt-0 px-20 mobile:pt-32">
          <div className="flex flex-col text-black lg:pr-[500px] text-left ">
            <h1 className="text-5xl font-bold mobile:text-xs">
              {" "}
              WE DELIVER CONCRETE SOLUTIONS{" "}
            </h1>
            <p className="text-lg pt-4 text-justify mobile:text-xs ">
              With experince more than 40 years from jayamix as the readymix
              concrete supplier in Indoneisa as well acquired by SCG which
              experienced more than 100 years in Thailand, lead us to keep
              innovating our concrete products to support various development in
              Indonesia.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[60vh] bg-gradient-to-r from-white via-gray-200 to-red-200 relative">
        <div className="absolute w-full lg:h-[100vh] flex flex-col items-center top-0 h-screen text-white items-center lg:px-32 pt-6 sm:pt-10 lg:pt-0 sm:px-20 lg:px-10 xl:px-32 mobile:px-8">
          <h1 className="text-5xl font-bold text-[#cc0000] mobile:text-base lg:pt-10">
            {" "}
            Jayamix by SCG{" "}
          </h1>
          <p className="text-lg text-black pt-8 text-justify pt-14 mobile:text-base">
            PT SCG Readymix Indonesia or Jayamix by SCG has been experienced for
            more than 40 years in the Indonesian construction industry. We
            Deliver Concrete Solutions, is our commitment to provide the right
            and real pouring solutions according to project needs. Jayamix by
            SCG accommodates the needs of readymix concrete and Beton Instan®
            (bagged concrete) for residential, office building, up to
            infrastructure construction with more than 50 batching plants and
            600 mixer trucks spread across cities in Indonesia.{" "}
            <Link href="/aboutus" className="text-blue-500">
              <span>
                <u>Read More</u>
              </span>
            </Link>
          </p>
        </div>
      </div>
      <Link href="/innovative-products">
        <div className="flex items-center justify-center relative ">
          <Image
            src="/produksi.jpg"
            quality={100}
            loading="lazy"
            width={500}
            height={500}
            // objectFit="cover"
            className="w-auto h-[100vh] mobile:h-[20%]"
            alt="Gambar"
          />
          <div className="absolute w-full h-full flex xl:flex-col top-0 h-screen text-white sm:justify-center xl:justify-start xl:items-center xl:px-36 pt-10 mobile:justify-center">
            <h1 className="text-5xl font-bold text-[#cc0000] mobile:text-2xl">
              Introducing Our Products
            </h1>
          </div>
        </div>
      </Link>
      <div className="carousel w-full h-[55vh]">
        <div id="item1" className="carousel-item w-full">
          <div className="w-full bg-gradient-to-r from-[#b21f29] via-gray-400 to-white object-cover relative ">
            <div className="absolute w-full h-[55vh] flex flex-col items-center pt-6 mobile:px-6 sm:px-32">
              <h1 className="text-white text-3xl mobile:text-xs sm:text-xl xl:text-3xl">
                What our customers are saying about us
              </h1>
              <p className=" text-center pt-8 text-lg text-black mobile:text-xs mobile:text-justify sm:text-xs sm:text-justify md:text-sm lg:text-base xl:text-lg">
                " Sinarmas memiliki banyak proyek di Indonesia seperti di BSD,
                Jakarta,Tangerang, Kota Wisata maupun Grand Wisata. BSD sendiri
                memiliki banyak pekerjaan proyek yang sudah selesai maupun
                sedang berjalan seperti Ice BSD, The Breeze, Green Office Park,
                dan Knowladge Hub. Kami sudah menggunakan produk SCG karena
                sudah terbukti berkualitas, dari sekian lama kami menggunakan
                produk SCG dapat dilihat dari hasil bangunan proyek kami yang
                sebelum-sebelumnya. Selain itu SCG juga sudah menjalankan tata
                kelola yang baik, sehingga kami percaya bahwa SCG bertanggung
                jawab terhadap lingkungan dan masyarakat. Saat ini kami sudah
                menggunakan Produk SCG seperti , SCG Pipe precast, SCG Bata
                Ringan, SCG Semen, dan Jayamix by SCG. Produk SCG memiliki
                kualitas yang baik. Pengerjaan project juga bisa lebih hemat
                secara waktu dan tenaga kerja, secara pembelian juga praktis dan
                mudah. "
              </p>
              <p className="mt-4 text-white mobile:text-xs mobile:text-black">
                — Bapak Purwanto – Quantity Surveyor Commercial Sinarmasland
              </p>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="w-full bg-gradient-to-r from-[#b21f29] via-gray-400 to-white object-cover relative ">
            <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 mobile:px-6 sm:px-32">
              <h1 className="text-white mobile:text-xs">
                What our customers are saying about us
              </h1>
              <p className=" text-center pt-8 text-lg text-black mobile:text-xs mobile:text-justify sm:text-xs sm:text-justify md:text-sm lg:text-base xl:text-lg">
                " Kualitas SCG sudah terbukti bagus dengan harga yang
                terjangkau. Tidak kalah dengan produk - produk lain yang mahal
                harganya. Selain itu, SCG juga ramah lingkungan karena memiliki
                sertifikat green label. SCG memiliki performa baik dan
                berkualitas. Dengan produk SCG, pengerjaan project juga bisa
                lebih efisien secara waktu dan tenaga kerja didukung dengan
                pembelian yang mudah. "
              </p>
              <p className="mt-4 text-white mobile:text-xs mobile:text-black">
                — Direktur Utama PT. Wadaya Kreasi Sejatera, Kontraktor Sinarmas
                Land Grand Wisata Bekasi
              </p>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="w-full bg-gradient-to-r from-[#b21f29] via-gray-400 to-white object-cover relative ">
            <div className="absolute  w-full h-[55vh] flex flex-col items-center pt-6 mobile:px-6 sm:px-32">
              <h1 className="text-white mobile:text-xs sm:text-xl xl:text-3xl">
                What our customers are saying about us
              </h1>
              <p className=" text-center pt-8 text-lg text-black mobile:text-xs mobile:text-justify sm:text-xs sm:text-justify md:text-sm lg:text-base xl:text-lg">
                " Kalau dari segi aplikasi Semen SCG mudah diaplikasikan, kedua
                sangat kokoh, yang ketiga agak pengiritan dari segi untuk
                pengaplikasiannya. "
              </p>
              <p className="mt-4 text-white mobile:text-xs mobile:text-black">
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
            <p className="px-6 py-2 text-base text-black bg-white/70 font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
