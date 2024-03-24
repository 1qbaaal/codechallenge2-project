import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div className="w-full h-[60vh] flex relative mt-20">
        <Image src="/bgpg1.jpg" fill={true} quality={100} loading="lazy" objectFit="cover" />
      </div>

      <div className="flex justify-center pt-6">
        <h1 className="font-bold text-4xl text-[#b21f29]">COMPANY PROFILE</h1>
      </div>

      <div className="flex flex-row-2 text-base pt-10 lg:mx-44">
        <div>
          <h1 className="text-[20px] ">
            <span className="bg-[#fff0f5] text-[#a9a9a9] ">
              Getting closer and more practical to support the construction of
            </span>{" "}
            <span className="bg-[#fff0f5] text-[#cc0000] font-bold">
              residential up to infrastructure
            </span>{" "}
            <span className="bg-[#fff0f5] text-[#a9a9a9] ">through</span>
            <span className="bg-[#fff0f5] text-[#cc0000] font-bold">
              {" "}
              BetonKu Application, 55+ batching plants, and 600+ mixer trucks
            </span>
            <span className="bg-[#fff0f5] text-[#a9a9a9]">
              {" "}
              that are spread in various cities in Indonesia.
            </span>
          </h1>
          <Image
            src="/bgprod2.jpg"
            width={300}
            height={200}
            loading="lazy"
            className="pt-10"
          />
          <p className="pt-10 font-bold"> ISO Certification:</p>
          <Image
            src="/iso.jpg"
            width={300}
            height={200}
            loading="lazy"
            className="pt-10 bg-transparent"
          />
        </div>
        <div className="pl-8 text-justify">
          <p className="font-bold">
            WELCOME TO PT.SCG READYMIX INDOENSIA -{" "}
            <span className="text-[#b21f29]">Jayamix by SCG</span>
          </p>
          <p className="pt-6">
            PT SCG Readymix Indonesia or Jayamix by SCG has been experienced for
            more than 40 years in the Indonesian construction industry. We
            Deliver Concrete Solutions, is our commitment to provide the right
            and real pouring solutions according to project needs. Jayamix by
            SCG accommodates the needs of readymix concrete and Beton Instan®
            (bagged concrete) for residential, office building, up to
            infrastructure construction with more than 50 batching plants and
            600 mixer trucks spread across cities in Indonesia.
          </p>
          <p className="pt-6">
            Starting in 1972, PT Jaya Readymix established Jayamix and became
            the first readymix concrete supplier in Indonesia. Right in 2012,
            SCG - the largest manufacturer of building materials in Thailand -
            took over the ownership of Jayamix and then changed PT Jaya Readymix
            to PT SCG Readymix Indonesia under the Jayamix by SCG brand until
            now.
          </p>
          <p className="pt-6">
            Jayamix by SCG serves Indonesia's construction needs with readymix
            concrete, bagged concrete - Beton Instan®, and also pouring services
            such as concrete pumps. Jayamix readymix concrete is processed
            through a production process with quality control system refer to
            ISO 9001: 2015 to produce high quality concrete. Another type of
            concrete, namely Beton Instan® Jayamix, a mixture of concrete raw
            materials packaged in a 50 kg bag, launched in the early 2000’s
            period to fulfill the needs of practical and quality concrete for
            projects in remote area or difficult to reached by mixer truck.
          </p>
          <p className="pt-6">
            To accommodates ready mix concrete in various project areas, Jayamix
            provides two choices of mixer trucks, they are big truck and
            Jayamixni or small truck. Large trucks with a capacity of 7 cu.m can
            deliver ready mix concrete to areas with wide access. Meanwhile,
            Jayamixni or small truck, are the right option to accommodate
            readymix concrete for projects that are located on narrowed access
            minimal road width of 3 meters. Both of types are equipped with
            Global Positioning System (GPS) system, which supports us to deliver
            Jayamix concrete from alleys to main roads.
          </p>
          <p className="pt-6">
            We are committed to continuing to maintain the quality and the
            volume of Jayamix by SCG concrete. Our experts actively curate and
            test various raw materials for concrete in the laboratory with the
            latest technology to ensure the quality of the raw materials to
            produce high quality readymix concrete. Jayamix concrete production
            process is well-systematized to ensure the quantity accordance with
            the ordered volume.
          </p>
          <p className="pt-6">
            BetonKu application for online order, Central Dispatching Center
            (CDC), and on-site batching plant are some of the pouring services
            that Jayamix has developed to ease you. BetonKu, that available in
            application and website version here, makes Jayamix closer, easier,
            and more practical to ordered. Besides of the app, Jayamix is also
            available online and officially on your favorite marketplace and
            e-commerce. After you make the purchase, CDC then systematically
            organize the order, scheduling, and delivery of the concrete to your
            place. For projects located in remote areas or have special needs,
            on-site batching plant service is available for you.
          </p>
          <p className="pt-6">
            As a readymix supplier company with more than 40 years of
            experience, Jayamix by SCG strives to maintain your trust and be
            your best partner by always innovating in products and services as
            well as committing to quality and quantity.
          </p>
        </div>
      </div>

      <div>
        <div className="w-full h-[60vh] flex relative mt-10">
          <Image
            src="/scgabus.jpeg"
            fill={true}
            quality={100}
            loading="lazy"
            objectFit="cover"
            className="opacity-60"
          />
          <h1 className="w-full h-[60vh] flex justify-center absolute text-[#b21f29] font-bold text-5xl pt-6">
            BUSINESS PHILOSPHY
          </h1>
          <div className="w-full h-[60vh] absolute flex justify-center items-center gap-4 text-white text-lg font-bold">
            <div className="flex flex-col items-center">
              <Image src="/scale.png" width={100} height={100} loading="lazy"/>
              <h1 className="text-[#b21f29]"> ADHERENCE TO FAIRNESS </h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/sip.png" width={100} height={100} loading="lazy"/>
              <h1> DEDICATION TO EXCELLENCE </h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/diamon.png" width={100} height={100} loading="lazy"/>
              <h1 className="text-[#b21f29]">
                {" "}
                BELIEF IN THE VALUE OF INDIVIDUALS{" "}
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/hand.png" width={100} height={100} loading="lazy"/>
              <h1> CONCERN FOR SOCIAL RESPONSIBILITY </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-100 h-[500px] flex flex-col justify-start items-center py-6">
        <h1 className="text-4xl font-bold text-[#b21f29] py-4"> MILESTONE</h1>
        <ul className="timeline timeline-vertical pt-10">
          <li>
            <div className="timeline-start">1972</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Establishes as a fisrt readymix supplier in Indonesia.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">1988</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Supply 240,000 m3 concrete for PLTU Paiton.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">1998</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              First Highstrength Concrete {"(Fc'60)"} for Amartapura Project.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2007</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Expantion to Sumatra Island.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start">2016</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              Launched Jayamix Super Concrete
            </div>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-2 mt-4">
        <div className="w-full flex relative pt-10">
          <Image
            src="/rnd1.jpg"
            objectFit="cover"
            quality={100}
            loading="lazy"
            width={10000}
            height={10000}
            className="w-[1000px] h-[500px]"
          />
        </div>
        <div className="flex flex-col pl-4 py-10">
          <h1 className="flex justify-center text-3xl text-[#b21f29] font-bold">
            {" "}
            RESEARCH AND DEVELOPMENT
          </h1>
          <h1 className="pt-6 text-black font-bold text-lg">
            Jayamix Concrete Innovations
          </h1>
          <p className="pt-4">
            Jayamix concrete is researched and developed by our experts to
            present a variety of concrete according to the needs and
            environmental conditions of Indonesia. Listening to your needs is
            the base of Jayamix innovation to provide the right concrete
            products and services.
          </p>
          <p className="pt-4">
            SCG has been in the building materials business since 1910s in
            Thailand. More than 400 researchers and product developers,
            including PhDs who work in several research centers are working
            together to produce concrete products and services that are not only
            effective and efficient, but also synergize with the environment
          </p>
          <p className="pt-4">
            In understanding and identifying the concrete that the construction
            world needs today, the research team internally collaborates with
            the business development, marketing, and production teams to produce
            high-value concrete variants as construction solutions. Externally,
            we also collaborate with academic institutions and government
            organizations to support our innovations.
          </p>
          <p className="pt-4">
            The results of R&D team such as low heat concrete for mass pouring
            and synthetic fiber concrete that makes pouring without
            reinforcement possible. You can explore other Jayamix by SCG
            innovative concrete in detail here.
          </p>
        </div>
      </div>
    </div>
  );
}
