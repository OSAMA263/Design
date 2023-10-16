import { useState } from "react";
import logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Headroom from "react-headroom";

export default function NavBar() {
  const [Toggle, setToggle] = useState(false);

  const handleToggleNavlinks=()=>{
    setToggle((prev) => !prev)
  }
  
  const styles = {
    navbar_wrapper:
      "mx-auto w-[90%] justify-between md:flex md:w-[80%] lg:w-[70%]",
    expand_navbar_btn: `[&>span]:bg-black [&>span]:ms-auto [&>span]:h-[4px] [&>span]:block ms-auto flex flex-col gap-2 md:hidden [&>span]:block [&>span]:bg-black [&>span]:transition-all ${
      !Toggle && "[&>span]:w-[50px]"
    }`,
    logo: "w-1/2 md:w-[15rem] ",
    nav_links_wrapper: `${
      Toggle && "!max-h-[100px]"
    } mt-4 flex max-h-0 justify-center overflow-hidden border-t border-black transition-all duration-500 md:mt-0 md:max-h-[100px] md:border-t-0`,
    ul: "mt-4 gap-5 sm:flex md:ms-auto md:mt-0 [&_a.active]:text-[#c23c22] [&_a]:transition-all after:[&_a]:block after:[&_a]:h-[1px] after:[&_a]:w-[0px] after:[&_a]:bg-[#1d1c1e] after:[&_a]:transition-all hover:[&_a]:text-[#e7816b] hover:after:[&_a]:w-[60%]",
  };

  return (
    <Headroom className="mb-40 !h-0 [&>.headroom]:bg-white [&>.headroom]:pb-8 [&>.headroom]:pt-14">
      <motion.nav
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6, type: "spring", mass: 0.4 }}
        className="font-serif "
      >
        <div className={styles.navbar_wrapper}>
          <div className="flex">
            <NavLink onClick={handleToggleNavlinks} className="w-auto" aria-label="home0" to="/">
              <img className={styles.logo} src={logo} alt="" />
            </NavLink>
            <button
              aria-label="menu"
              onClick={handleToggleNavlinks}
              className={styles.expand_navbar_btn}
            >
              <span className="w-[50px]"></span>
              <span className="w-[25px]"></span>
              <span className="w-[30px]"></span>
            </button>
          </div>
          <div className={styles.nav_links_wrapper}>
            <ul className={styles.ul}>
              <li>
                <NavLink onClick={handleToggleNavlinks} to="/about">OUR COMPANY</NavLink>
              </li>
              <li>
                <NavLink onClick={handleToggleNavlinks} to="/locations">LOCATIONS</NavLink>
              </li>
              <li>
                <NavLink onClick={handleToggleNavlinks} to="/contact">CONTACTS</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </Headroom>
  );
}
