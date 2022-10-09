import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";
import { TiArrowForwardOutline } from "react-icons/ti";

import { projects } from "../contents/data/projects";

const Projects = () => {
  //const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-darkblue p-5" id="Projects">
      <header>
        <h2 className="text-textcolor text-center text-4xl font-bold pb-4 font-calibre">
          Projects
        </h2>
        <p className="text-themecolor text-center hover:underline pb-16 text-sm font-mono">
          <a href="https://github.com/alshafi834">Check all projects</a>
        </p>
      </header>
      <section className="flex justify-center">
        <div className="lg:w-[70%] grid lg:grid-cols-3 gap-4">
          {projects.map((lp) => (
            <div
              className="lg:w-[370px] w-[300px] bg-[#112340] p-8 rounded mx-2"
              key={lp.sys.id}
            >
              <div className="flex flex-row justify-between">
                <BsFolder2Open className="text-themecolor text-4xl" />
                <div className="flex text-2xl">
                  <a href={lp.fields.github}>
                    <TbBrandGithub className="text-textcolor" />
                  </a>
                  <a href={lp.fields.url} className="ml-2">
                    <TiArrowForwardOutline className="text-textcolor" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <h2 className="text-textcolor font-bold text-xl">
                  {lp.fields.name}
                </h2>
                <p className="text-sm text-textcolor2 mt-4 h-[100px]">
                  {lp.fields.description}
                </p>
                <div className="flex mt-8 text-textcolor2 font-mono text-xs">
                  {lp.fields.tech.map((tc) => (
                    <span key={tc} className="pr-4 font-sfmono">
                      {tc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
