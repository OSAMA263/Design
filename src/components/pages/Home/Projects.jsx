import React from "react";
import { NavLink } from "react-router-dom";

export default function Projects({ sections }) {
  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {sections.map(({ parent, src, child, URL }, i) => (
        <div
          key={i}
          className={`${parent} [&>img]:hover:scale-110 [&>img]:hover:blur-[4px]`}
        >
          <img
            className="h-[200%] w-full bg-center transition-all duration-300 md:h-full"
            src={src}
            alt=""
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 text-white">
            <h1 className="lg:text-4xl text-2xl text-center">{child}</h1>
            <NavLink onClick={scrollToTop}
              to={`/${URL}`}
              className="transition-all hover:text-orange-700"
            >
              VIEW PROJECTS
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}
