"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaBootstrap, FaGitAlt, } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiSpringboot } from "react-icons/si"


//about data
const about = {
  title: 'About me',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, nihil?',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rashi Kulshreshtha"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 6393037184"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "rashikulshreshtha23@gmail.com"
    },
    {
      fieldName: "Languages Known",
      fieldValue: "English, Hindi"
    }
  ]
}

// experience
const experience = {
  icon: '',
  title: 'Experience',
  description: "Following are the roles of responsibility that I have been in.",
  items: [
    {
      company: "D.E. Shaw India",
      position: "DESIS Ascend Educare Mentee",
      duration: "October 2023 - March 2024"
    },
    {
      company: "Codame, IIIT Bhopal",
      position: "Competitive Programming Executive",
      duration: "2023 - present"
    },
    {
      company: "IIIT Bhopal",
      position: "Teaching Assistant",
      duration: "Jan 2024 - May 2024"
    }
  ]
}

//education
const education = {
  icon: '',
  title: 'Education',
  description: "",
  items: [
    {
      institution: "Indian Institute of Information Technology (IIIT) Bhopal",
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Electronics and Communication (ECE)",
      duration: "2022 - 2026",
      grade: "9.32",
    },
    {
      institution: "St. Mary's Convent Inter College Allahabad",
      degree: "Class XII",
      specialization: "Physics, Chemistry and Mathematics",
      duration: "2020 - 2021",
      grade: "92.5%",
    },
    {
      institution: "St. Mary's Convent Inter College Allahabad",
      degree: "Class X",
      specialization: "Computer Applications",
      duration: "2018 - 2019",
      grade: "95.8%",
    },
  ]
}

//skills data
const skills = {
  title: "My Skills",
  description: "Following are the technologies I have worked with.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB"
    },
    {
      icon: <SiExpress />,
      name: "Express.js"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js "
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <FaGitAlt />,
      name: "Git"
    },

  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Timelineexp from "@/components/Timelineexp";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] items-center justify-center">
          <TabsList className="flex flex-col w-full max-w-[380px mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-6xl text-accent font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
                <Timelineexp />
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-6xl text-accent font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-white/60">{item.specialization}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-accent">Grade - {item.grade}</p>
                        </div>

                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-6xl text-accent font-bold">{skills.title}</h3>
                  <p className="text-white/60">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      {/* <TooltipProvider delayDuration={100}>
                        <Tooltip> */}
                      {/* <TooltipTrigger className="w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group"> */}
                      <div className="w-full h-[140px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>

                        <div>
                          <div className="text-sm mt-5 group-hover:text-accent transition-all duration-300">{skill.name}</div>
                        </div>
                      </div>


                      {/* </TooltipTrigger> */}
                      {/* <TooltipContent> */}
                      {/* <p className="capitalize">{skill.name}</p> */}
                      {/* </TooltipContent> */}
                      {/* </Tooltip>
                      </TooltipProvider> */}
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            {/* <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-8">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
              
            </TabsContent> */}
          </div>
        </Tabs>

      </div>
    </motion.div>
  )
}

export default Resume
