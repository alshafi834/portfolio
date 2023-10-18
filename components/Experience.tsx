import React, { useState } from "react";
import { jobs } from "../contents/data/jobs";
import { BiRightArrow } from "react-icons/bi";

const Experience: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const normal =
    "w-[200px] text-sm font-sfmono py-2 pl-4 cursor-pointer lg:border-l-textcolor lg:border-l hover:bg-[#112340] hover:text-themecolor";
  const active =
    "w-[200px] text-sm font-sfmono py-2 pl-4 cursor-pointer bg-[#112340] text-themecolor lg:border-l-themecolor lg:border-l-2";
  return (
    <div className="flex justify-center bg-darkblue py-20" id="Experience">
      <div className="lg:w-[60%] w-[80%] flex flex-col py-12">
        <div className="flex flex-row">
          <h1 className="text-3xl text-[#CCD6F5] font-bold font-calibre">
            Where I've worked
          </h1>
          <span className="border-t border-[#243654] w-[400px] mt-5 ml-4 hidden xl:block"></span>
        </div>

        <div className="lg:flex lg:flex-row gap-10 text-textcolor2 mt-10 font-calibre">
          <div className="flex lg:flex-col">
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
            <h2 className="text-textcolor text-2xl mt-6 lg:mt-0">
              {jobs[selected].position}{" "}
              <span className="text-themecolor">
                @{" "}
                <a
                  href={jobs[selected].companyUrl}
                  target="_blank"
                  className="hover:underline"
                >
                  {jobs[selected].company}
                </a>
              </span>
            </h2>
            <p className="text-sm font-sfmono">{jobs[selected].duration}</p>
            <div className="mt-2">
              {jobs[selected].did.map((task, idx) => (
                <div key={idx} className="flex items-baseline pt-1 text-lg">
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
