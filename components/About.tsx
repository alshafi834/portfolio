import React from "react";
import Image from "next/image";
import profilePic from "../contents/images/propic.jpeg";

const About = () => {
  return (
    <div className="flex justify-center bg-darkblue" id="About">
      <div className="w-[70%] flex flex-col py-12">
        <div className="flex flex-row">
          <h1 className="text-2xl text-[#CCD6F5] font-bold">About Me</h1>
          <span className="border-t border-[#243654] hidden lg:block w-[400px] mt-4 ml-4"></span>
        </div>
        <div className="lg:flex gap-20 justify-between">
          <div className="text-textcolor2 mt-12">
            <p>
              Hello! My name is Shafi and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p className="mt-6">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Image
              className="border rounded"
              src={profilePic}
              width={270}
              height={300}
              alt="profile pic"
            />
            <span className="w-[270px] h-[300px] block border-2 border-themecolor rounded -mt-72 ml-4"></span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
