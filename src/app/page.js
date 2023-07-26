"use client";
import Image from "next/image";
import { useState } from "react";
import { MdPostAdd } from "react-icons/md";
import CreatePost from "../components/CreatePost/CreatePost";
import Posts from "@/components/posts/Posts";
import SearchCategory from "@/components/searchCategory/searchCategory";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return (
    <main className="flex p-8 min-h-screen flex-col items-center justify-center pt-20 gap-3 w-full bg-base-300">
      {/* <SearchCategory /> */}
      <div
        className="bg-white rounded-lg flex flex-col  shadow-lg p-4  hover:scale-100 gap-4 w-full md:w-[53%] lg:w-[53%]"
        onClick={() => window.my_modal_3.showModal()}
      >
        <div className="flex items-center">
          <Image
            src="/profile.jpg"
            width={50}
            height={50}
            className="rounded-full w-12 h-12"
          />
          <span className="ml-2 block font-medium text-base leading-snug text-black dark:text-gray-100">
            Loyce Kuvalis
          </span>
        </div>
        <hr/>
        {/* <div className=" text-3xl lg:text-4xl md:text-4xl  text-[#399bf7]">
            <MdPostAdd />
          </div> */}
        <div className="text-[1rem] md:text-lg font-semibold text-gray-500 flex justify-center bg-gray-100 rounded-full h-12 items-center">
          <h3>What's on your mind , Loyce Kuvalis?</h3>
        </div>
      </div>
      <div className="flex gap-3 justify-between">
        <div>
          <select className="select select-xs max-w-sm w-[150px]">
            <option disabled selected>
              filter subject
            </option>
            <option>Genral</option>
            <option>Political science</option>
            <option>International law</option>
            <option>Geography</option>
            <option>Islamiat</option>
            <option>English</option>
          </select>
        </div>
      </div>
      <CreatePost />

      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </main>
  );
}
