"use client";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({ handleToggle }) => {
  return (
    <div className="navbar bg-base-300 fixed h-[70px] z-10 lg:px-10 border-b-[1px] border-gray-300">
      <div className="lg:hidden ">
        <RxHamburgerMenu onClick={handleToggle} />
      </div>
      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost normal-case md:text-xl  text-sm"
        >
          <Image src="/logo.png" width={50} height={50} />
          <span className="text-sm lg:text-lg ">Co-Learning</span>
        </Link>
      </div>
      <div className="flex-none gap-3">
        <div class="dropdown dropdown-end relative">
          <div class="relative inline-block ">
            <select class="select select-sm select-[#1c6fbd] w-[110px] max-w-sm appearance-none">
              <option disabled selected>
                Prep
              </option>
              <option value="css">CSS</option>
              <option value="pms">PMS</option>
              <option value="etea">ETEA</option>
              <option value="etea">FPSC</option>
              <option value="etea">KPSC</option>
            </select>
            {/* <span class="absolute left-0 top-0 bottom-0 flex items-center  pointer-events-none">
              jjlll
            </span> */}
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="profile.jpg" />
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
      </div>
    </div>
  );
};

export default Navbar;
