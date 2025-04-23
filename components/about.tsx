"use client"
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
const{ref }=useSectionInView("About",0.75);
  
  
  return (
    <motion.section 
         

        ref={ref}
        className='max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28 relative translate-y-96'
        initial={{opacity:0, y:-150}}
        animate={{opacity:1, y:-250}}
        transition={{delay:0.175}}
        id="about">
        <SectionHeading >About Me</SectionHeading>
        <p className='mb-4'> 
          &emsp; I am a dedicated and passionate computer science student currently pursuing a BS in Computer Science at Georgia State University, where I have maintained a good academic standing and earned recognition on the President's List for multiple semesters. My academic journey is deeply rooted in my love for technology and problem-solving. Beyond the classroom, I actively engage in professional development opportunities through internships and collaborative projects.
        </p>
        <p>
          &emsp; In addition to my technical expertise, I am highly adaptable, driven by a desire for continuous learning and growth. Whether working on a team or independently, I bring a strong work ethic, effective communication, and problem-solving abilities to every challenge I take on​.
        </p>
      
    </motion.section>
  )
}
