import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Announcement from "./Announcement";
import Switcher from "./Switcher";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="h-[65px] bg-[#769FCD] dark:bg-[#070719] border-b border-[#B9D7EA] dark:border-[#1e1e31d1] flex items-center justify-between px-4">
      <div>
        <h1 className="text-white font-bold text-2xl">Aaryan</h1>
      </div>

      <nav
        className={`fixed top-0 left-0 bg-[#769FCD] dark:bg-[#070719] w-full h-screen z-50 transition-all duration-300 ${
          showMenu ? "visible translate-y-0" : "invisible -translate-y-full"
        } lg:static lg:w-auto lg:h-auto lg:z-auto lg:bg-transparent lg:visible lg:opacity-100 lg:translate-y-0 lg:flex`}
      >
        <div className="lg:hidden">
          <Announcement message="This is an important announcement!" />
        </div>

        <div className="flex  p-4 items-center justify-between gap-4 mb-4 lg:hidden">
          <div>
            <h1 className="text-white font-bold text-2xl">Aaryan</h1>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            <IoClose className="text-white text-3xl" />
          </button>
        </div>

        <ul className="flex flex-col lg:items-center justify-center gap-2 font-semibold lg:flex-row">
          <li className="relative group px-4 lg:px-2 py-2">
            <button className="relative text-white cursor-pointer transition-all duration-300 hover:opacity-80 z-0 lg:z-[60]">
              Products
            </button>

            <div className="absolute top-0 left-4 lg:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[300px] lg:min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[1rem] lg:group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        The Suite
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Course Editor
                            <p className="text-gray-500 font-normal">
                              All-in-one editor
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Accept payments
                            <p className="text-gray-500 font-normal">
                              Pre-build payments page
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Closed Captioning
                            <p className="text-gray-500 font-normal">
                              Use AI to generate captions
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Extensions
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Plugins
                            <p className="text-gray-500 font-normal">
                              Tweak existing functionality
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Batch uploads
                            <p className="text-gray-500 font-normal">
                              Get your time back
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                          >
                            Social sharing
                            <p className="text-gray-500 font-normal">
                              Generate content for socials
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group px-4 lg:px-2 py-2">
            <button className="relative text-white cursor-pointer transition-all duration-300 hover:opacity-80 z-0 lg:z-[60]">
              Solutions
            </button>
            <div className="absolute top-0 left-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-20 min-w-[260px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                    Use cases
                  </p>
                  <ul className="mt-3 text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Streamers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Influence
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Programming
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-pink-700 via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                      >
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group px-4 lg:px-2 py-2">
            <button className="relative text-white cursor-pointer transition-all duration-300 hover:opacity-80 z-0 lg:z-[60]">
              Developers
            </button>
            <div className="absolute top-0 left-4 lg:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-20 min-w-[300px] lg:min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[1rem] lg:group-hover:translate-x-[12.65rem] duration-500 ease-in-out rounded-sm"></div>

                <div className="relative z-10">
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                  >
                    Documentation
                    <p className="text-gray-500 font-normal">
                      Start integrating in no time
                    </p>
                  </a>

                  <div className="mt-4 lg:mt-6 grid gap-4 lg:grid-cols-2 lg:gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Get started
                      </p>
                      <ul className="mt-2 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Libraries and SDKs
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Plugins
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Code samples
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Tutorials
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Guides
                      </p>
                      <ul className="mt-2 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Accept online payments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Editing video like a pro
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Automation techniques
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Create stunning effects
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="relative group px-4 lg:px-2 py-2">
            <button className="relative text-white cursor-pointer transition-all duration-300 hover:opacity-80 z-0 lg:z-[60]">
              Resources
            </button>
            <div className="absolute top-0 left-4 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-20 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Get Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                      >
                        News &amp; Events
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group px-4 lg:px-2 py-2">
            <a
              href="#"
              className="relative text-white cursor-pointer transition-all duration-300 hover:opacity-80 z-0 lg:z-[60]"
            >
              Pricing
            </a>
          </li>

          <li className="relative group px-4 lg:px-2 py-2">
            <button className="rounded-full px-4 py-2 font-semibold bg-white hover:bg-opacity-95 items-center group flex items-center lg:hidden">
              <span className="mr-2">Sign in</span>
              <svg
                className="stroke-current"
                width="10"
                height="10"
                stroke-width="2"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <g fill-rule="evenodd">
                  <path
                    className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                    d="M0 5h7"
                  ></path>
                  <path
                    className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                    d="M1 1l4 4-4 4"
                  ></path>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative top-3.5">
          <Switcher />
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          <HiMenuAlt3 className="text-white text-3xl" />
        </button>

        <button className="rounded-full px-4 py-2 font-semibold bg-white hover:bg-opacity-95 items-center group hidden lg:flex">
          <span className="mr-2">Sign in</span>
          <svg
            className="stroke-current"
            width="10"
            height="10"
            stroke-width="2"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <g fill-rule="evenodd">
              <path
                className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200"
                d="M0 5h7"
              ></path>
              <path
                className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                d="M1 1l4 4-4 4"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
