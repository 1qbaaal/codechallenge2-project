import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <div>
      <div className="px-32 flex justify-between items-center">
        <img
          src="https://jayamix.co.id/assets/img/jayamixlogo.png"
          alt="logo"
          height={105}
          width={105}
        ></img>
        <details className="dropdown">
          <summary className="m-1 btn bg-red-500 text-white ">
            Languange
            <IoMdArrowDropdown />
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

      <div className="flex justify-center items-center bg-gray-300 text-black font-bold gap-4 px-15 h-10 w-full">
        <span>Home</span>
        <span>About Us</span>
        <span>Product</span>
        <span>Teams Service</span>
      </div>
    </div>
  );
}
