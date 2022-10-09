import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="flex flex-col xl:p-44 p-12 bg-darkblue text-textcolor"
      id="Hero"
    >
      <p className="text-themecolor font-sfmono mb-4">
        Hello World! My name is
      </p>
      <h1 className="text-7xl font-bold font-calibre mb-4">Al Shafi.</h1>
      <h2 className="text-7xl font-calibre font-bold mb-4 text-textcolor2">
        I build things for the web.
      </h2>
      <p className="lg:w-[50%] mb-6 text-textcolor2">
        I am a passionate software engineer with a focus on JavaScript and the
        technologies that surround it. Currently I am writting my Master's
        thesis and working as a Software Development Working Student @ trivago
      </p>
      <p className="w-[240px] font-sfmono text-sm text-center py-4 px-8 mt-2 border cursor-pointer border-themecolor rounded text-themecolor hover:bg-[#37cc9d69]">
        <a
          href="https://drive.google.com/file/d/19ILsva54e3-gcOeqcH8sYjPLH0w7-Y8J/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Check my Resume
        </a>
      </p>
    </div>
  );
};

export default Hero;
