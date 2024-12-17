import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-2xl green-pink-gradient"
        >
          <p className='sm:text-[15px] text-[12px] text-primary uppercase tracking-wider'>INFO</p>
          <h3 className='text-primary font-black md:text-[40px] sm:text-[32px] text-[22px]'>Profile Card.</h3>
          <div className='text-profile font-bold text-[20px] mt-5 '>
            <ul className="justify-center">
              <li><span className=" text-primary font-black">Name:</span> &nbsp;Ahmadjon M</li>
              <li><span className=" text-primary font-black">Date of Birth:</span> &nbsp;29 June 2009 </li>
              <li><span className=" text-primary font-black">Place of Birth:</span> &nbsp;Uzbekistant</li>
              <li><span className=" text-primary font-black">Ph:</span> &nbsp;+998995186261</li>
              <li><span className=" text-primary font-black">Email:</span> &nbsp;------------</li>
              <br />
              <li><span className=" text-primary font-black">Nationality:</span> &nbsp;Uzbek</li>
              <li><span className=" text-primary font-black">Languages:</span> &nbsp;English, Uzbek, Rus</li>
              <li><span className=" text-primary font-black">Hobbies:</span> &nbsp;Listening to Music, Webseries and create new games</li>
              <li><span className=" text-primary font-black">Areas of Interest:</span> &nbsp;Bootstrap and Tailwind</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
        >
          <img src={profile} alt="Mahmudov A" className="object-fill" />
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="m-auto"
      >
        <h3 className='text-white font-black md:text-[40px] sm:text-[32px] text-[22px] mt-20'>Thoughts.</h3>
        <p className='mt-4 text-secondary sm:text-[20px] leading-[30px] text-[16px] lg:[22px]'>
          As a computer science student, I am committed to exploring new skills and specializations within the field of computer science. My passion for technology has driven me to become a polyglot programmer with expertise in multiple programming languages, including Python, C lan, Java, SQL and Web development.<br />
          In addition to my programming skills, I am also an aspiring Pentesting Engineer. I am intrigued by the challenge of identifying and addressing potential security vulnerabilities in computer systems, and I am continuously honing my skills in this area.<br />
          One of my primary goals is to build projects that contribute to the advancement of technology and can make a meaningful impact on society. I believe that technology should be used to solve real-world problems, and I am passionate about creating innovative solutions that benefit people's lives.<br />
          As a computer science student, I also recognize the importance of accruing knowledge about computer hardware and interfaces. Understanding the inner workings of computers allows me to create more efficient and effective programs and systems.<br />
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
