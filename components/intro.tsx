"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from 'next/link';
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
import{HiEye} from "react-icons/hi2"
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

const{ref }=useSectionInView("Home",0.5);
const{setActiveSection, setTimeOfLastClick}=useActiveSectionContext();
    

  return (
    <section ref={ref} id="home" className='mb-18 max-w-[50rem] text-center scroll-mt-[100rem]' >
        
        <div className='flex items-center justify-center '
        >
            <div className='relative'>
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"tween",
                        duration:0.3

                    }}>
                        
                    <Image src="/Profile.jpg"
                    alt="Profile Photo"
                    width="192"
                    height= "192"
                    quality="100"
                    priority={true}
                    className='h-32 w-32 rounded-full object-cover border-[0.25rem] border-white shadow-xl dark:border-gray-950'
                    />
                </motion.div>
                    <motion.span 
                        className='absolute text-3xl bottom-0 right-0'
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{
                            type:"spring",
                            stiffness:100,
                            delay: 0.1,
                            duration: 0.8
    
                        }}
                        
                        >🤝
                        </motion.span>
                
                
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-1xl font-medium !leading-[1.5] sm:text-3xl'
            initial={{opacity:0, y:100}}
            animate={{opacity:1 , y:0}} 
            >
                           
                Hey, I'm <span className='font-bold'>  Vivek </span>. A{" "}<span className='font-bold'> software developer </span>based in{" "}<span className='italic'> Atlanta, GA </span>, passionate to tackle{" "}<span className='font-bold'>real-world challenges </span> through creative technological approaches. My current focus is{" "}<span className='underline'>Python (Django Rest and Flask)</span>.
             
        </motion.h1>
    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium ' 
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.1,}}>
        <Link href="#contact" className=" group bg-gray-900 dark:bg-gray-50 dark:text-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-95 hover:bg-gray-950 transition" onClick= {()=> {  setActiveSection("Contact"); setTimeOfLastClick(Date.now()); }}>Contact Me<BsArrowRight className='opacity-70 group-hover:translate-x-2' /></Link>
        <a className="group bg-white dark:bg-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none dark:text-gray-50 focus:scale-110 hover:scale-110  hover:text-gray-950 dark:hover:text-gray-50 active:scale-95 transition borderBlack" href='/Resume.pdf' target='_blank' >View Resume<HiEye className='opacity-70 group-hover:scale-125'/></a>
        <a className="bg-white dark:bg-gray-900 p-4 text-gray-700 dark:text-gray-50 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  dark:hover:text-gray-50 active:scale-95 transition borderBlack" href="https://www.linkedin.com/in/vivek-duggaraju/" target="_blank"> <BsLinkedin/></a>
       {/*<a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950  active:scale-95  transition borderBlack" href='https://github.com/vivekduggaraju' target="_blank"><BsGithub/></a> */}
    </motion.div>
    </section>
  )
}
