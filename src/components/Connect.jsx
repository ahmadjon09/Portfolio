import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { connect } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";

const Connect = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Let's be in the same Network
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Connect.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
      >
        <span className="text-white">Click the icon to visit my profiles.</span>
      </motion.p>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {connect.map((connect) => (
          <div className="w-32 h-32" key={connect.name}>
            <a href={connect.link} target="_blank" rel="noopener noreferrer">
              <BallCanvas icon={connect.icon} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Connect, "connect");
