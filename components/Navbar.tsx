import React from "react";
import logo from "../contents/images/signature.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  const navList: string[] = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];
  return (
    <div className="flex justify-center p-4 bg-darkblue text-textcolor mb:invisible sticky top-0 drop-shadow-lg">
      <div className="flex justify-between w-[90%]">
        <div className="flex items-center">
          <a href="#Hero">
            <Image src={logo} alt="Al Shafi" width={150} height={40} />
          </a>
        </div>
        <div className="hidden lg:block">
          {navList.map((nav) => (
            <span className="ml-8 font-mono cursor-pointer" key={nav}>
              <a href={`#${nav}`}>{nav}</a>
            </span>
          ))}
          <button className="ml-12 border-solid border-2 border-themecolor px-4 py-2 rounded">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
