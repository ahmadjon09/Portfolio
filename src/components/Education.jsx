import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { education } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const EducationCard = ({ index, name, type, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={name} className='w-16 h-16 object-contain' />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {name}
          </h3>
          <h2 className='text-secondary text-[10px] font-bold text-center'>
            {type}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Foundation of Life</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <div className='mt-20 flex justify-around'>
        {education.map((education, index) => (
          <EducationCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Education, '')
