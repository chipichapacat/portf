"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reiciendis labore distinctio suscipit incidunt repellendus nihil ipsam sapiente eius?',
        href: ""
    },
    {
        num: '02',
        title: 'Programming and Problem Soving',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reiciendis labore distinctio suscipit incidunt repellendus nihil ipsam sapiente eius?',
        href: ""
    },
    {
        num: '03',
        title: 'Soft Skills',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reiciendis labore distinctio suscipit incidunt repellendus nihil ipsam sapiente eius?',
        href: ""
    },

]

const Services = () => {
    return (
        // <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        //     <div className="container mx-auto">
        //         <motion.div
        //             initial={{ opacity: 0 }}
        //             animate={{
        //                 opacity: 1,
        //                 transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        //             }}
        //             className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        //         >
        //             {services.map((service, index) => {
        //                 return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">

        //                     {/* top */}
        //                     <div className="w-full flex justify-between  items-center">
        //                         <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
        //                         <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
        //                             <BsArrowDownRight  className="text-primary text-3xl"/>
        //                         </Link>
        //                     </div>

        //                     {/* title */}
        //                     <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>

        //                     {/* description */}
        //                     <p className="text-white/60">{service.description}</p>

        //                     {/* border */}
        //                     <div className="border-b border-white/20 w-full"></div>
        //                 </div>
        //             })}
        //         </motion.div>
        //     </div>
        // </section>

        // <div className="grid grid-cols-2 xl:grid-cols-4">
        //     <div className="container mx-auto">
        //         <div className="bg-[#27272c] mx-auto  w-[200px] h-[200px] gap-8 my-10">Hello</div>
        //     </div>
        //     <div className="container mx-auto">
        //         <div className="bg-[#27272c] mx-auto  w-[200px] h-[200px] gap-8 my-10">Hello</div>
        //     </div>
        //     <div className="container mx-auto">
        //         <div className="bg-[#27272c] mx-auto  w-[200px] h-[200px] gap-8 my-10">Hello</div>
        //     </div>
        //     <div className="container mx-auto">
        //         <div className="bg-[#27272c] mx-auto  w-[200px] h-[200px] gap-8 my-10">Hello</div>
        //     </div>
        // </div>

        <div className="container mx-auto flex flex-col items-start justify-start xl:w-[70%]">
            <div className="text-5xl font-bold text-accent ml-20 mt-10">
                About Me
            </div>
            <div>
                <p className="text-md  text-white/70 ml-28 mt-10">Hello! I'm Rashi, a web developer with a focus on creating dynamic and responsive web applications. I enjoy turning ideas into functional and user-friendly designs. Apart from web development, I am proficient in programming in C++ and have experience of working with Java Outside of coding, I like to paint, cook scrumptious meals or relax with a good book. Let's connect and see what we can create together!</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2">
                <div className="bg-[#27272c] border-l-4 border-accent rounded-xl mx-28 gap-8 my-10 p-10 xl:w-[90%]">
                    <h1 className="text-xl font-bold text-accent">Web Development</h1>
                    <p className="text-white/80">I am deeply passionate about web development because it allows me to combine creativity with technical skills to build interactive and user-friendly applications. Crafting seamless user experiences and designing efficient, scalable back-end systems are particularly rewarding aspects. </p>
                </div>
                <div className="bg-[#27272c] border-l-4 border-accent rounded-xl mx-28 gap-8 my-10 p-10 xl:w-[90%]">
                    <h1 className="text-xl font-bold text-accent">Programming and Problem Solving</h1>
                    <p className="text-white/80">I find programming fascinating because it challenges me to think critically and solve problems efficiently. Working through complex problems and optimizing solutions sharpens my analytical skills. Participating in contests and tackling various problems keeps me engaged and improves my coding abilities.</p>
                </div>
            </div>
        </div>

    )
}

export default Services
