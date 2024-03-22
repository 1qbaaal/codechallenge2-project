import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="px-32 flex justify-between items-center bg-white">
        <Link href="/">
        <Image src="/jayamixlogo.png" alt="logo" height={105} width={105}/> 
        </Link>
        <details className="dropdown">
          <summary className="btn bg-[#b21f29] text-white text-xs rounded-none py-2">
            Languange
            <IoMdArrowDropdown size={20} />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 w-52">
            <li>
              <a>English</a>
            </li>
            <li>
              <a>Indonesia</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="h-[50px] flex justify-center items-center bg-gray-100/50 text-base text-black font-bold gap-8 px-15 h-10 w-full">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/about-us">
          <span>About Us</span>
        </Link>
        <Link href="/innovative-products">
        <span>Innovative Product</span>  
        </Link>
        <span>Teams Page</span>
        <Link href="/contact-us">
        <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
