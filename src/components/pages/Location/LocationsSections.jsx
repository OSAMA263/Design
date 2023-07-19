import React from "react";
import img1 from "../../../imgs/about/AUSTRALIA.png";
import img2 from "../../../imgs/about/CANADA.png";
import img3 from "../../../imgs/about/uk.png";

export default function LocationsSections() {
  const divs = [
    { src: img1, h1: "AUSTRALIA" },
    { src: img2, h1: "CANADA" },
    { src: img3, h1: "UNITED KINGDOM" },
  ];

  const styles = {
    btn: "mt-auto rounded-md bg-[#e7816b] p-3 px-4 text-white transition-colors hover:bg-[#ffad9b] ",
  };
  return (
    <>
      <section>
        <div className="items-center justify-between font-serif xl:flex">
          {divs.map(({ src, h1 }, i) => (
            <div
              className="flex flex-col items-center justify-center gap-4 mb-12 xl:mb-0"
              key={i}
            >
              <img src={src} className="xl:h-[150px] xl:w-[202px] " alt="" />
              <h1 className="mb-4 text-xl">{h1}</h1>
              <button className={styles.btn}>SEE LOCATION</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
