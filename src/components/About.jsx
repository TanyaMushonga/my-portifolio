import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a software engineer specializing in building scalable and
        high-performance applications. For mobile development, I use React
        Native to create seamless and responsive cross-platform experiences. For
        web development, I leverage Next.js to build fast, dynamic, and
        SEO-friendly applications. On the backend, I work with Django REST and
        Express.js to develop efficient and robust APIs. In DevOps, I have
        experience deploying applications on AWS and automating CI/CD pipelines
        using GitHub Actions. Passionate about solving real-world problems, I
        collaborate closely with clients to bring innovative ideas to life.
        Let&apos;s build something exceptional together!
      </motion.p>

      <p class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        As a passionate software developer, I run a tech newsletter and a{" "}
        <a
          href="https://www.thecypherhub.tech/"
          class="text-blue-500 hover:text-blue-700"
        >
          blog
        </a>{" "}
        where I share insights, tips, and best practices on software
        development, system design, and emerging technologies. Through my
        writing, I stay up-to-date with the latest trends in the tech field and
        continuously expand my knowledge. My newsletter and blog serve as
        platforms for me to document my learning journey, share real-world
        coding experiences, and engage with a community of developers. This
        practice not only deepens my understanding but also allows me to
        contribute to the broader tech ecosystem.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
