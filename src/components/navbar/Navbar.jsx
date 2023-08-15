"use client";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
const Navbar = ({ handleToggle }) => {
  return (
    <div className="navbar bg-base-300 fixed h-[70px] z-10 lg:px-10 border-b-[1px] border-gray-300 justify-between">
      <div className="lg:hidden ">
        <RxHamburgerMenu onClick={handleToggle} />
      </div>
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost normal-case md:text-xl  text-sm"
        >
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <span class="text-sm lg:text-lg hidden m:block lg:block">Co-Learning</span>
        </Link>
      </div>
      <div className="relative hidden md:block">
          <input type="search" placeholder="Search" className="input input-bordered  w-24 md:w-96 rounded-full h-8 " />
          <span className="absolute right-1 top-2 opacity-25">
            <FaSearch/>
          </span>
        </div>
        <div className="navbar-end">
        {/* <div classNameName="flex-none gap-3"> */}
          <div className="dropdown dropdown-end relative">
            <div className="relative inline-block ">
              <select className="select select-sm select-[#1c6fbd] w-[110px] max-w-sm appearance-none">
                <option disabled selected>
                  Prep
                </option>
                <option value="css">CSS</option>
                <option value="pms">PMS</option>
                <option value="etea">ETEA</option>
                <option value="etea">FPSC</option>
                <option value="etea">KPSC</option>
              </select>
              {/* <span className="absolute left-0 top-0 bottom-0 flex items-center  pointer-events-none">
              jjlll
            </span> */}
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src="/profile.jpg" alt="profilePicture" width={50} height={50} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        {/* </div> */}
        </div>

      </div>
      );
};

      export default Navbar;
