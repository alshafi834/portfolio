import React from "react";
import { BsFolder2Open } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";
import { TiArrowForwardOutline } from "react-icons/ti";

const Projects = () => {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-darkblue p-6">
      <header>
        <h2 className="text-textcolor text-center text-3xl font-bold pb-20">
          Projects
        </h2>
      </header>
      <section className="flex justify-center">
        <div className="lg:w-[70%] grid lg:grid-cols-3 gap-4">
          {loop.map((lp) => (
            <div
              className="lg:w-[370px] w-[300px] bg-[#112340] p-8 rounded mx-2"
              key={lp}
            >
              <div className="flex flex-row justify-between">
                <BsFolder2Open className="text-themecolor text-4xl" />
                <div className="flex text-2xl">
                  <a href="">
                    <TbBrandGithub className="text-textcolor" />
                  </a>
                  <a href="" className="ml-2">
                    <TiArrowForwardOutline className="text-textcolor" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <h2 className="text-textcolor font-bold text-xl">
                  This is the title
                </h2>
                <p className="text-sm text-textcolor2 mt-4">
                  This is the description of the project. some interesting
                  description will be added here. this is a supercool
                  description.
                </p>
                <div className="flex mt-8 text-textcolor2 font-mono text-xs">
                  <span className="pr-4">Next.js</span>
                  <span className="pr-4">Next.js</span>
                  <span>Next.js</span>
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
