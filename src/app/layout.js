"use client";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import {useRouter} from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Co_Learning",
  description: "Colleborative Exam Preparation",
};

export default function RootLayout({ children }) {
  const router = useRouter()
  const [login , setLogin] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

//   if(!login)
//   {
// router.push("/login")
//   }

  return (
    <html lang="en">
      <body>
        <div>
          <Navbar handleToggle={handleToggle} />
          <div className="lg:flex">
            <div className="lg:w-[16rem]">
              <Sidebar isOpen={isOpen} />
            </div>
            <div className="lg:flex-1">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
