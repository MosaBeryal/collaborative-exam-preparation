import Link from "next/link";
import React from "react";
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";

const Sidebar = ({ isOpen }) => {
  const sidebarItems = [
    { icon: <FaHome />, label: "Home", url: "/" },
    { icon: <FaUsers />, label: "Users", url: "/" },
    { icon: <IoIosPerson />, label: "Profile", url: "/" },
    { icon: <FaCog />, label: "Settings", url: "/posts" },
    { icon: <FaSignOutAlt />, label: "Logout", url: "/" },
  ];

  return (
    <aside
      className={`bg-base-300 text-black w-[16rem] min-h-[calc(100vh-70px)] fixed top-[70px] left-0 p-4 -translate-x-full -transform transition-transform ease-in-out duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : ""
      } flex flex-col justify-start pt-2 lg:pl-10 border-r-[1px] border-gray-300`}
    >
      {/* <div className="flex items-center justify-center h-16 mb-6">
     
        <h1 className="text-2xl font-bold">My App</h1>
      </div> */}

      <nav>
        <ul className="flex flex-col gap-4">
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center py-2 px-4 hover:bg-[#ffffff] hover:text-black rounded-lg cursor-pointer
            "
            >
              <Link href={item.url} className="flex items-center">
                <span className="text-[#399bf7]">{item.icon}</span>
                <span className="ml-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
