import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
import NavLogo from "../public/assets/navLogo.png";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#003140");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavBg("#003140");
        setShadow(true);
        setLinkColor("#FFFFFF");
      } else {
        setShadow(false);
        setNavBg("#ecf0f3");
        setLinkColor("#003140");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 "
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <div className="pt-2">
          <Link href="/">
            <a>
              <Image
                src={NavLogo}
                alt="/"
                width="125"
                height="65"
                className={
                  shadow
                    ? "cursor-pointer object-contain invert"
                    : "cursor-pointer object-contain"
                }
              />
            </a>
          </Link>
        </div>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex pr-2">
            <li className={styles.ul_element}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.ul_element}>
              <Link href="/#about">About</Link>
            </li>
            <li className={styles.ul_element}>
              <Link href="/#skills">Skills</Link>
            </li>
            <li className={styles.ul_element}>
              <Link href="/#projects">Projects</Link>
            </li>
            <li className={styles.ul_element}>
              <Link href="/resume">Resume</Link>
            </li>
            <li className={styles.ul_element}>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm-bold:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-[#003140] text-[#FFFFFF] absolute right-5 top-5"
              >
                <AiOutlineClose />
              </div> 
          <div>
            <div className="flex w-full items-center justify-center">
              <Link href="/">
                <a>
                  <Image
                    src={NavLogo}
                    width="150"
                    height="50"
                    alt="/"
                    className="object-contain"
                  />
                  <p className="px-1 font-semibold text-[#003140]">
                    Code | Build | Learn
                  </p>
                </a>
              </Link>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[100%] md:w-[90%] py-4 text-center font-semibold text-[#003140]">
                Let&#39;s build something together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-semibold text-[#003140] text-center"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-semibold text-[#003140] text-center"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-semibold text-[#003140] text-center"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-semibold text-[#003140] text-center"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-semibold text-[#003140] text-center"
                >
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 font-semibold text-[#003140] text-center"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#003140]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm-bold:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
/*
<div onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>*/
