import Header from "@/components/header";
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider, { useTheme } from "@/context/theme-context";
import url from "@/components/section_divider"




const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Vivek | Personal Portfolio',
  description: 'Vivek is a Backend Developer Intern and a Georgia State University student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 

{


  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.className}
      bg-gray-50 text-gray-950 -z-10 relative pt-28 sm:36 dark:bg-gray-900 dark:text-gray-300 dark:text-opacity-90 dark:-z-20` }>
<div className="bg-[#c8ffda] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] dark:bg-[#323342] dark:-z-10"></div>
        <div className="bg-[#f9c0c0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#453d3b] dark:-z-10"></div>
        <div 
  className=" absolute -z-50 dark:w-[15rem]  dark:-z-20 dark:rounded-full dark:blur-[0rem] blur-[20rem]  " 
  style={{
      
      backgroundImage: 'url(/stars.png)', 
      width: '100%', 
      height: '11%',
      top: '8%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
  
  }}

></div>
        <ThemeContextProvider>{
          <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right"/>
          <ThemeSwitch/>
          </ActiveSectionContextProvider>}

        </ThemeContextProvider>
      </body>
    </html>
  )
}
