"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import OwnerSiderBar from "../components/OwnerSiderBar";
import sidebarlogo from "@/assets/siderbarlogo.png";
import personImg from "@/assets/person.jpg";
import Image from "next/image";
import MessageIcon from "@/components/icons/MessageIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference for dark mode
    if (
      localStorage.getItem("darkMode") === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localStorage.getItem("darkMode"))
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  interface ToggleDarkModeParams {
    mode: "dark" | "light";
  }

  const toggleDarkMode = (mode: ToggleDarkModeParams["mode"]): void => {
    if (mode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation */}
      <header className="fixed w-full z-30 flex bg-green-100 p-2 items-center justify-between h-16 px-10">
        <div
          className={`logo ${
            !sidebarOpen ? "ml-12" : ""
          } dark:text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center`}
        >
          <Image src={sidebarlogo} width={100} height={40} alt="Logo" />
        </div>
        {/* Spacer */}
        <div className="grow h-full flex items-center justify-center max-w-[200px]"></div>

        {/* input field */}
        <div className="flex w-full sm:w-[438px] h-[40px] px-[14px] py-[8px] items-center gap-[16px] sm:gap-[255px] flex-shrink-0 rounded-[8px] bg-[#F6F8FB] relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-none outline-none text-gray-700"
          />
          <svg
            className="absolute right-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M23 21l-6-6m-5 2a7 7 0 1 0-7-7 7 7 0 0 0 7 7z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* icon for message and notification */}
        <div className="flex justify-center items-center gap-4">
          <div className="bg-green-200 size-8 flex justify-center items-center rounded-xl">
            <MessageIcon size={20} color="#202020" />
          </div>
          <div className="bg-green-200 size-8 flex justify-center items-center rounded-xl">
            <NotificationIcon size={20} color="#202020" />
          </div>
        </div>

        {/* User Profile */}
        <div className="flex-none h-full text-center flex items-center justify-center">
          <div className="flex space-x-3 items-center px-3">
            <div className="flex-none flex justify-center gap-4">
              <div className="text-white hover:text-blue-500 dark:hover:text-[#38BDF8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 flex">
                <Image
                  src={personImg}
                  alt="profile"
                  width={32}
                  height={32}
                  className="shadow rounded-full object-cover"
                />
              </div>
            </div>
            <div className="hidden md:block text-sm md:text-md text-black dark:text-white">
              John Doe
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <OwnerSiderBar
        sidebarOpen={sidebarOpen}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main
        className={`content ${
          sidebarOpen ? "ml-12 md:ml-60" : "ml-12"
        } transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4`}
      >
        {/* Breadcrumb Navigation */}
        <nav
          className="flex px-5 py-3 text-gray-700 rounded-lg bg-gray-50 dark:bg-[#1E293B]"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <Link
                  href="#"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </div>
            </li>
          </ol>
        </nav>

        {/* Page Content Placeholder */}
        <div className="mt-4">{children}</div>
      </main>
    </div>
  );
}
