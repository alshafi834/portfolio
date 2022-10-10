import React, { useEffect } from "react";
import logo from "../contents/images/signature.png";
import Image from "next/image";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateActiveNav } from "../features/navbar/navbarSlice";

const Navbar: React.FC = () => {
  const { asPath } = useRouter();
  const hash = asPath.split("#")[1];

  const regNav = "ml-8 cursor-pointer hover:text-themecolor";
  const activeNav = "ml-8 cursor-pointer hover:text-themecolor text-themecolor";

  const actvNav = useAppSelector((state) => state.navbar.activeNav);
  const dispatch = useAppDispatch();

  const handleClick = (nav: string) => {
    dispatch(updateActiveNav(nav));
  };

  const navList: string[] = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  useEffect(() => {
    dispatch(updateActiveNav(hash));
  }, [dispatch, hash]);

  return (
    <div className="flex justify-center pt-4 pb-2 bg-darkblue text-textcolor mb:invisible sticky top-0 drop-shadow-lg">
      <div className="flex justify-between w-[90%]">
        <div className="flex items-center">
          <a href="#Hero">
            <Image src={logo} alt="Al Shafi" width={150} height={40} />
          </a>
        </div>
        <div className="hidden lg:block font-sfmono text-sm">
          {navList.map((nav) => (
            <span
              className={nav === actvNav ? activeNav : regNav}
              key={nav}
              onClick={() => handleClick(nav)}
            >
              <a href={`#${nav}`}>{nav}</a>
            </span>
          ))}
          <button className="ml-12 border-solid border-2 border-themecolor px-4 py-2 rounded">
            <a
              href="https://drive.google.com/file/d/19ILsva54e3-gcOeqcH8sYjPLH0w7-Y8J/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
