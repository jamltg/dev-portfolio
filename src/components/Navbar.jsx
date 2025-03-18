import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const NavigationBar = () => {
  return (
    <div className="fixed top-10 w-full z-50">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full p-1 custom-navbar font-sfProLight text-sm md:font-sfProRegular"
    >
      <Link to='work' smooth={true} duration={300} className="cursor-pointer"><Tab setPosition={setPosition}>Work</Tab></Link>
      <Link to='about' smooth={true} duration={300} className="cursor-pointer"><Tab setPosition={setPosition}>About</Tab></Link>
      <Link to='projects' smooth={true} duration={300} className="cursor-pointer"><Tab setPosition={setPosition}>Projects</Tab></Link>
      <Link to='contact' smooth={true} duration={300} className="cursor-pointer"><Tab setPosition={setPosition}>Contact</Tab></Link>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white tracking-wider mix-blend-difference md:px-5 md:py-3"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 hover-navbar rounded-full md:h-10"
    />
  );
};