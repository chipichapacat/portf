"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
  {
    num: '1',
    category: 'Full-Stack',
    title: "iNoteBook",
    description: "Developed a full-stack note-taking web application allowing users to create and save notes securely in the cloud. Implemented user authentication and authorization with JWT,with 100+ lines of code, enabling account creation and secure login for personal note storage. Enhanced user experience by implementing CRUD operations and responsive design",
    stack: [{ name: "MongoDB" }, { name: "Express.js" }, { name: "React.js" }, { name: "Node.js" }],
    image: '/assets/work/iNotebook.png',
    link: "",
    github: "https://github.com/RaashiK16/iNotebook2",
  },
  {
    num: '2',
    category: 'Full-Stack',
    title: "CodeOnTheGo",
    description: "Designed and built a real-time online collaborative coding platform enabling users to create rooms, generate unique Room IDs and collaborate with other users by sharing the Room ID. Implemented room management, allowing users to create, join, and collaborate in coding sessions securely. Integrated CodeMirror for a rich code editing experience with syntax highlighting and support for 3+ languages.",
    stack: [{ name: "React.js" }, { name: "Node.js" }, { name: "Socket.IO" }],
    image: '/assets/work/codeonthego.png',
    link: "",
    github: "https://github.com/RaashiK16/CodeOnTheGo",
  },
  {
    num: '3',
    category: 'Frontend',
    title: "TextToSpeech",
    description: "Built a tool that converts text written into speech. Provided functionality for various languages and accents.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" },{name: "TextToSpeech API"}],
    image: '/assets/work/texttospeech.png',
    link: "https://raashik16.github.io/TexttoSpeech/",
    github: "https://github.com/RaashiK16/TexttoSpeech",
  },
  {
    num: '4',
    category: 'Frontend',
    title: "Weather-App",
    description: "Built a weather app using the weather API.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }, { name: "Weather API" }],
    image: '/assets/work/weatherapp.png',
    link: "https://raashik16.github.io/WeatherApp/",
    github: "https://github.com/RaashiK16/WeatherApp",
  },
  {
    num: '5',
    category: 'Frontend',
    title: "KnowledgeNest",
    description: "Built the frontend framework of an edu-tech website.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Bootstrap" }],
    image: '/assets/work/knowledgenest.png',
    link: "https://raashik16.github.io/KnowledgeNest/",
    github: "https://github.com/RaashiK16/KnowledgeNest",
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:1.5, duration:0.4, ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-white transition-all duration-500 capitalize">{project.title}</h2>

              {/* project category */}
              <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white-60 text-[20px]">{project.category} Project</p>
              </div>
              

              {/* project description */}
              <p className="text-white-60">{project.description}</p>

              {/* tech-stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* removing the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20 mt-5 mb-5"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github repository button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}>

              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] relative group flex justify-center items-center object-contain bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    <div className="relative w-full h-full border border-accent">
                      <Image src={project.image} fill className="object-fill " alt=""/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyes="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Work
