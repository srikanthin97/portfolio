"use client"
import React from 'react'
import {motion} from "framer-motion"
import { useTheme } from '@/context/theme-context';

export default function SectionDivider() {
  const { theme } = useTheme();

  return (
    <motion.div  style={{ 
      position: "relative",
      width:'70%', height:'30rem',


      transform:  'translate(0, 100 %)',
      backgroundImage: theme === "light" ? 'url(/atlanta-skyline.png)': 'url(/atlanta-skyline-dark.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop: '10rem'
      
        }}
        

        initial={{opacity:0}}
        animate={{opacity:1}}
        >
        
      
    </motion.div>
  )
}

