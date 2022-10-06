import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col p-44 bg-darkblue text-textcolor">
      <p className="text-themecolor font-mono py-2">Hello World! My name is</p>
      <h1 className="text-7xl font-sans py-2">Al Shafi.</h1>
      <h2 className="text-7xl font-sans py-2 text-textcolor2">
        I build things for the web.
      </h2>
      <p className="w-[50%] py-2">
        I am a passionate software engineer with a focus on JavaScript and the
        technologies that surround it. Currently I am writting my Master's
        thesis and working as a Software Development Working Student @ trivago
      </p>
      <p className="w-[240px] text-center py-4 px-8 mt-2 border cursor-pointer border-themecolor rounded text-themecolor hover:bg-[#37cc9d69]">
        Check my Resume
      </p>
    </div>
  );
};

export default Hero;
