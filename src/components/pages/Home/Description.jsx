import React from "react";
import Img1 from "../../../imgs/home/desc1.png";
import Img2 from "../../../imgs/home/desc2.png";
import Img3 from "../../../imgs/home/desc3.png";

export default function Description() {
  return (
    <>
      <div className="align-center my-36 lg:grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <img width={210} className="h-full" src={Img1} alt="" />
          <h1 className="lg:text-xl text-3xl text-[#e7816b]">PASSIONATE</h1>
          <p className="text-base w-[70%] md:w-auto leading-7">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <img width={210} className="h-full" src={Img2} alt="" />
          <h1 className="lg:text-xl text-3xl text-[#e7816b]">RESOURCEFUL</h1>
          <p className="text-base w-[70%] md:w-auto leading-7">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-9 text-center">
          <img width={210} className="h-full" src={Img3} alt="" />
          <h1 className="lg:text-xl text-3xl text-[#e7816b]">FRIENDLY</h1>
          <p className="text-base w-[70%] md:w-auto leading-7">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </>
  );
}
