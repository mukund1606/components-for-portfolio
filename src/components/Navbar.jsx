import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [variant, setVariant] = useState("hidden");
  const variants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
      onanimationend: {
        display: "none",
      },
    },
    shown: {
      display: "flex",
      opacity: 1,
      scaleX: 1,
    },
  };
  return (
    <div className="fixed top-5 mx-auto right-0 left-0">
      <nav
        className="relative flex flex-col md:flex-row select-none items-center group-hover:gap-6 justify-center hover:justify-around h-14 p-2 w-14 hover:w-[90%] md:hover:w-[65%] transition-all ease-linear duration-500 mx-auto rounded-full bg-black group bg-opacity-70 backdrop-blur-sm	"
        onMouseEnter={() => setVariant("shown")}
        onMouseLeave={() => setVariant("hidden")}
      >
        <div className="text-white">
          <img src="/vite.svg" alt="logo" />
        </div>
        <motion.ul
          className="absolute md:static top-16 bg-black md:bg-transparent bg-opacity-70 text-white flex-col justify-center items-center gap-4 md:flex-row hidden group-hover:rounded-xl backdrop-blur-sm md:backdrop-blur-none p-2 md:w-auto w-[90%]"
          variants={variants}
          animate={variant}
          initial="hidden"
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </motion.ul>
      </nav>
    </div>
  );
}
