import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaXing } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { TbBrandSpotify } from "react-icons/tb";

const Contact = () => {
  return (
    <div className="bg-darkblue flex flex-col p-20" id="Contact">
      <h1 className="font-semibold text-6xl text-textcolor text-center">
        Get In Touch
      </h1>
      <div className="flex justify-center mt-6 text-textcolor text-xl cursor-pointer gap-4">
        <a href="https://github.com/alshafi834">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/al-shafi-747123103/">
          <FiLinkedin />
        </a>
        <a href="https://www.xing.com/profile/AbuHena_AlShafi/cv">
          <FaXing />
        </a>
        <a href="https://stackoverflow.com/users/12551899/alshafi">
          <FaStackOverflow />
        </a>
        <a href="https://www.codewars.com/users/alshafi">
          <SiCodewars />
        </a>
        <a href="https://twitter.com/alshafi834">
          <FiTwitter />
        </a>
        <a href="https://www.instagram.com/al_shafi__/">
          <FiInstagram />
        </a>
        <a href="https://open.spotify.com/user/gnmtr8mwqh2mqj9p9n8ujxk65">
          <TbBrandSpotify />
        </a>
      </div>
      <div className="flex justify-center mt-2">
        <p className="text-textcolor2 text-center lg:w-[40%]">
          My inbox is always open. Whether you have a question or just want to
          say hi, I’ll try my best to get back to you!
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <button className="px-8 py-4 border border-themecolor rounded text-themecolor hover:bg-[#112340]">
          <a href="mailto:alshafi834@gmail.com">Say Hello</a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
