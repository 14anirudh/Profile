import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.gif";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-4xl font-bold tracking-widest text-[#003140]">
            About
          </p>
         

          <p className="py-2 text-gray-900">
            I have spent the last year learning how to code and build websites.
            I possess ownership, responsibility, and learning Capability with a
            positive attitude. I have the Desire to learn new technologies and
            resolve problems and issues. I can multitask and manage multiple
            priorities and commitments concurrently with my exceptional
            time-management skills and the ability to work under pressure.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning and was even more enthused with
            making websites interactive. I am now spending my time building
            projects with NextJs, and React JS and learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
