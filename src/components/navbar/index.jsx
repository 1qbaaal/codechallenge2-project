import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  return (
    <nav>
      {/* Responsive Mobile */}
      <div className="fixed top-0 w-full">
        <div className="px-32 flex justify-between items-center bg-white mobile:flex mobile:justify-center">
          <Link href="/">
            <Image src="/jayamixlogo.png" alt="logo" height={105} width={105} />
          </Link>
          <details className="dropdown mobile:hidden">
            <summary className="btn bg-[#b21f29] text-white text-xs rounded-none py-2">
              Languange
              <IoMdArrowDropdown size={20} />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 w-52">
              <li>
                <span>English</span>
              </li>
              <li>
                <span>Indonesia</span>
              </li>
            </ul>
          </details>
        </div>
        <div className="lg:hidden">
          <div className="relative flex items-center justify-center rounded-b-full px-24 text-black">
            <div className="absolute left-10 z-50 flex">
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content pb-20">
                  <label htmlFor="my-drawer" className="drawer-button">
                    <RxHamburgerMenu size={25} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="text-shuttlegray menu relative min-h-full w-80 bg-base-200 p-4 font-bold">
                    <li className="hover:text-burnorange pt-10">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link className="hover:text-burnorange" href={"/aboutus"}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:text-burnorange"
                        href="/innovative-products"
                      >
                        Innovative Product
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-burnorange" href="/teamspage">
                        Teams Page
                      </Link>
                    </li>

                    {/* Close button */}
                    <input id="my-drawer" type="checkbox" className="hidden" />
                    <div className="absolute right-5">
                      <label htmlFor="my-drawer">
                        <MdClose size={25} className="text-black" />
                      </label>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Responsive Desktop */}
        <div className="hidden lg:block">
          <div className=" navbar flex justify-center items-center bg-gray-100/70 text-base text-black font-bold gap-8 px-15 h-10 w-full">
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="/aboutus">
              <span>About Us</span>
            </Link>
            <Link href="/innovative-products">
              <span>Innovative Product</span>
            </Link>
            <Link href="/teamspage">
              <span>Teams Page</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
