import Image from "next/image";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-11/12 md:w-10/12 mx-auto">
      <div className="navbar text-white p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Product</a>
                <ul className="p-2">
                  <li>
                    <a>
                      <Image src="/cloud.png" height={22} width={22} alt="" />{" "}
                      Cloud Service
                    </a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Domain</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <a className="cursor-pointer mr-3">
            <Image
              src="/main-logo.png"
              alt="Hero"
              width={211}
              height={57}
              className="w-full h-auto"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 text-[#FFFFFFB3] text-[16px] font-light">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Product</summary>
                <ul className="p-2 text-black">
                  <a>
                    <Image src="/cloud.png" height={22} width={22} alt="" />{" "}
                    Cloud Service
                  </a>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Domain</summary>
                <ul className="p-2 text-black">
                  <a>
                    <Image src="/cloud.png" height={22} width={22} alt="" />{" "}
                    Cloud Service
                  </a>
                </ul>
              </details>
            </li>

            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="" className="mr-3 md:mr-6 text-xs md:text-base text-[#FFFFFFB3] font-light">
            Support
          </a>
          <a className="btn font-normal text-xs md:text-[16px] rounded-full px-4 md:px-6 border-0 hover:bg-white shadow-none">
            <span className="text-sm md:text-[20px]">
              <FiUser />
            </span>
            Client Area
          </a>
        </div>
      </div>
    </nav>
  );
}
