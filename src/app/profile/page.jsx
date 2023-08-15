"use client";
import ProfileUpdate from "@/components/ProfileUpdate/ProfileUpdate";
import Post from "@/components/posts/Posts";
import ProfilePost from "@/components/profilePosts/ProfilePosts";
import Image from "next/image";
import {FaUserEdit} from 'react-icons/fa'
const ProfilePage = () => {
  const user = {
    name: "Loyce Kuvalis ",
    bio: "Web Developer | Nature Lover",
    posts: [
      {
        id: 1,
        content: "Hello, this is my first post!",
      },
      {
        id: 2,
        content: "Excited to share my second post!",
      },
      // Add more posts here
    ],
  };

  return (
    <div className="mx-auto min-h-screen p-8 pt-20 flex gap-2 flex-col justify-start items-center w-full bg-base-300">
      <div className="bg-white rounded flex justify-center items-center p-4 w-full md:w-[32rem] lg:w-[32rem] flex-col gap-6">
        <div className="flex justify-center flex-col items-center">
          <Image
            src="/profile.jpg"
            width={120}
            height={120}
            className="rounded-full h-24 w-24"
            alt="profilePicture"
          />
          <span className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl">
            {user.name}
          </span>
          <span>
            <h2>
              <span className="text-gray-500 text-xs md:text-sm lg:text-base xl:text-lg">
                {user.bio}
              </span>
            </h2>
          </span>
        </div>
        <div>
          <button
            className="btn btn-sm bg-[#3ea2ff] text-white hover:bg-[#399bf7]"
            onClick={() => window.my_modal_4.showModal()}
          >
            Update Profile
            <span>
            <FaUserEdit/>

            </span>
          </button>
        </div>
      </div>
      <ProfileUpdate />
      {/* <ProfilePost /> */}
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
      <ProfilePost />
    </div>
  );
};

export default ProfilePage;
