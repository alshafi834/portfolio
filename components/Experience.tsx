import React, { useState } from "react";
import { jobs } from "../contents/data/jobs";
import { BiRightArrow } from "react-icons/bi";

const Experience: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const normal =
    "w-[200px] text-sm font-mono py-2 pl-4 cursor-pointer border-l-textcolor border-l hover:bg-[#112340] hover:text-themecolor";
  const active =
    "w-[200px] text-sm font-mono py-2 pl-4 cursor-pointer bg-[#112340] text-themecolor border-l-themecolor border-l-2";
  return (
    <div className="flex justify-center bg-darkblue py-36">
      <div className="w-[60%] flex flex-col py-12">
        <div className="flex flex-row">
          <h1 className="text-2xl text-[#CCD6F5] font-bold">
            Where I've worked
          </h1>
          <span className="border-t border-[#243654] block w-[400px] mt-4 ml-4"></span>
        </div>

        <div className="flex flex-row gap-10 text-textcolor2 mt-10">
          <div className="flex flex-col">
            {jobs.map((job, idx) => (
              <p
                className={selected === idx ? active : normal}
                key={idx}
                onClick={() => setSelected(idx)}
              >
                {job.company}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-textcolor text-xl">
              {jobs[selected].position}{" "}
              <span className="text-themecolor">
                @{" "}
                <a href="www.trivago.com" className="hover:underline">
                  {jobs[selected].company}
                </a>
              </span>
            </h2>
            <p className="text-sm">{jobs[selected].duration}</p>
            <div className="mt-2">
              {jobs[selected].did.map((task, idx) => (
                <div key={idx} className="flex items-baseline pt-1">
                  <BiRightArrow className="text-themecolor text-xs mr-2" />
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
