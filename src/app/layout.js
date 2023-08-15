"use client";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Co_Learning",
  description: "Colleborative Exam Preparation",
};

export default function RootLayout({ children }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar handleToggle={handleToggle} />
          <div className="">
            <div className="">
              <Sidebar isOpen={isOpen} />
            </div>
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
