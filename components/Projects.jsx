import Image from "next/image";
import Link from "next/link";
import React from "react";

import netflixImg from "../public/assets/projects/netflix.png";
import blogImg from "../public/assets/projects/blog.png";
import amazonImg from "../public/assets/projects/amazon.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="OTT App"
            backgroundImg={netflixImg}
            projectUrl="/ott"
            tech="React JS"
          />
          <ProjectItem
            title="Amazon Clone"
            backgroundImg={amazonImg}
            projectUrl="/amazon-clone"
            tech="React JS"
          />
          <ProjectItem
            title="Blog Website"
            backgroundImg={blogImg}
            projectUrl="/blog"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
