import React from "react";
import Image from "next/image";
import profilePic from "../contents/images/propic.jpeg";

const About = () => {
  return (
    <div className="flex justify-center bg-darkblue" id="About">
      <div className="w-[70%] flex flex-col py-12">
        <div className="flex flex-row">
          <h1 className="text-3xl text-[#CCD6F5] font-bold font-calibre">
            About Me
          </h1>
          <span className="border-t border-[#243654] hidden lg:block w-[400px] mt-4 ml-4"></span>
        </div>
        <div className="lg:flex gap-20 justify-between">
          <div className="text-textcolor2 mt-12 font-calibre text-lg">
            <p>
              Hello! I am Shafi, a tech and music enthusiast. Love to play with
              web technologies and passionate about software development. My
              interest in web development grew while doing advanced programming
              language course in my University back in 2017. I can write in
              HTML, CSS, Javascript(ecosystem), SQL, NoSQL, and do stuff to get
              things online.
            </p>
            <p className="mt-6">
              Fast-forward to today, and I’ve had the privilege of working at a
              start-up(7th String), a B2B wholesale e-commerce
              marketplace(Seebiz.com), a large online travel company(trivago).
              My main focus is on the front-end development with a expertise on
              Javascript and the technologies that surround it.
            </p>
          </div>
          <div className="mt-8 lg:mt-4">
            <Image
              className="border rounded"
              src={profilePic}
              width={250}
              height={270}
              alt="profile pic"
            />
            <span className="w-[250px] h-[270px] block border-2 border-themecolor rounded -mt-64 ml-4"></span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
