import phone from "../../../imgs/home/image-hero-phone.d0056b2e.png";
import circle from "../../../imgs/home/bg-pattern-hero-home.7ee19920.svg";
import { NavLink } from "react-router-dom";

export default function HomeHero() {
  const styles = {
    section:
      "mb-14 md:grid h-[45rem] grid-cols-2 py-8 items-center justify-between overflow-hidden rounded-lg bg-[#e7816b]",
    text_wrapper: "px-12 text-center text-white md:text-start",
    btn: "rounded-md bg-white p-3 px-4 text-black transition-colors hover:bg-[#ffad9b] hover:text-white",
    phone_img: "xl:translate-x-36 md:translate-y-10 w-[40%] md:w-auto",
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${circle})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% ",
          backgroundSize: "contain",
        }}
        className={styles.section}
      >
        {/* text */}
        <div className={styles.text_wrapper}>
          <h1 className="text-4xl mb-9 md:text-5xl">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="mb-12 leading-8">
            With over 10 years in the industry, we are eexperiend inc reating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <NavLink to="/about">
            <button className={styles.btn}>LEARN MORE</button>
          </NavLink>
        </div>
        {/* img */}
        <div className="flex justify-center">
          <img src={phone} alt="" className={styles.phone_img} />
        </div>
      </section>
    </>
  );
}
