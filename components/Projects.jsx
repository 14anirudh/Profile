import Image from "next/image";
import Link from "next/link";
import React from "react";

import netflixImg from "../public/assets/projects/netflix.png";
import blogImg from "../public/assets/projects/blog.png";
import amazonImg from "../public/assets/projects/amazon.png";
import scraper_img from "../public/assets/projects/scraper.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-4xl font-bold tracking-widest uppercase text-[#003140]">
          Projects
        </p>
        <h2 className="py-4 font-normal text-3xl">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
            title="OTT App"
            backgroundImg={netflixImg}
            projectUrl="/ott"
            tech="React JS / Firebase / Stripe / Tailwind"
          />
          <ProjectItem
            title="Web Scraper"
            backgroundImg={scraper_img}
            projectUrl="/Scraper"
            tech="NextJS / Web Scraping / Tailwind / MongoDb"
          />
          <ProjectItem
            title="E-commerce Store"
            backgroundImg={amazonImg}
            projectUrl="/amazon-clone"
            tech="NextJS / JWT / MongoDb /Stripe / Tailwind"
          />
          <ProjectItem
            title="Blog Website"
            backgroundImg={blogImg}
            projectUrl="/blog"
            tech="Next JS / Tailwind / REST APIs"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
