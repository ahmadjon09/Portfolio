import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { skill } from '../constants'

import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const SkillsCard = ({ skill }) => {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: '#1d1836',
          color: '#fff'
        }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        iconStyle={{ background: skill.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={skill.iconpic}
              alt={skill.title}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[28px] font-bold'>{skill.title}</h3>
          <br />
        </div>

        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {skill.skillball.map(skillball => (
            <div className='w-20 h-20 p-2 m-4' key={skillball.name}>
              <img
                src={skillball.icon}
                alt={skillball.name}
                className='w-full h-full'
              />
            </div>
          ))}
        </div>
      </VerticalTimelineElement>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial='initial' animate='animate'>
        <p className={`${styles.sectionSubText} text-center`}>
          Tools and Usage
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className='mt-20'>
        <div className='flex flex-col'>
          <VerticalTimeline>
            {skill.map((skill, index) => (
              <SkillsCard key={index} skill={skill} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Skills, 'skills')
