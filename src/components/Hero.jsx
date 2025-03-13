import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { setup } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Tanya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop both web and mobile applications{" "}
            <br className="sm:block hidden" />
            prioritising client satisfaction and{" "}
            <br className="sm:block hidden" />
            user experience.
          </p>
        </div>
      </div>
      <div className="absolute bottom-20 md:bottom-0 left-0 right-0 flex justify-center md:items-center">
        <img src={setup} alt="setup" />
      </div>
    </section>
  );
};

export default Hero;
