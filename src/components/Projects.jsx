import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What Have I Done So Far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>My Projects.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
        >
          You can find all of my Projects in my{" "}
          <span className="text-white">Github Repository,</span>. Click on the
          icon to Visit my Repo.
        </motion.p>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <div className="w-64 h-64" key={project.name}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <BallCanvas icon={project.icon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
