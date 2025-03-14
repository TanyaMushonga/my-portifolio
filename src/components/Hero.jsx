import { motion } from "framer-motion";

import { styles } from "../styles";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className={`relative w-full h-[40vh] md:h-[70vh] mx-auto`}>
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
            I am a software engineer, l build both web and mobile{" "}
            <br className="sm:block hidden" /> applications prioritising client
            satisfaction and <br className="sm:block hidden" />
            user experience.
            <div className="mt-5">
              <a
                href="https://drive.google.com/file/d/1CRaSZbugvV_QWG4taXwPh_nJs_gwnP4o/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#915EFF] hover:bg-[#7a4de0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#915EFF] relative"
              >
                <FaDownload className="text-white mr-3" />
                Download Resume
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
