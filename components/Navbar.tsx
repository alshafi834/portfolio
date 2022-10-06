import React from "react";

const Navbar: React.FC = () => {
  const navList: string[] = ["About", "Experience", "Work", "Contact"];
  return (
    <div className="flex justify-center p-6 bg-darkblue text-textcolor mb:invisible">
      <div className="flex justify-between w-[90%]">
        <div className="">Al Shafi</div>
        <div className="hidden lg:block">
          {navList.map((nav) => (
            <span className="ml-8 font-mono cursor-pointer" key={nav}>
              {nav}
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
