"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Socials from "@/components/Socials"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IoIosSend } from "react-icons/io";
import { Button } from "@/components/ui/button";
// import { Link } from "lucide-react";
import Link from "next/link";

const Random = () => {
    return (
        <div className='relative h-full w-[90%] mx-auto rounded-2xl p-2 bg-primary flex items-center justify-center'>
            <div className="h-[100%] xl:max-w-[70%] max-w-[90%] z-10 rounded-2xl bg-white/60 overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
                <div className="h-[100%] contact-info bg-[#27272c] overflow-hidden p-7 pt-[100px]">
                    {/* <h3 className="title text-4xl mb-5 font-extrabold text-accent">Let's get in touch</h3> */}
                    {/* <p className="leading-5 text-lg text-white/50 mb-20">It would be great to hear from you.</p> */}

                    <div className="info items-center justify-between">
                        <div className="information sm:mt-5 mt-10 gap-8 justify-left bg-[#27272c] text-white rounded-full flex items-center">
                            <div className="bg-primary rounded-full p-4">
                                <FaPhoneAlt className="text-[28px] text-accent" />
                            </div>

                            <div>
                                <p className="text-white/60">Phone</p>
                                <h3 className="xl:text-lg">(+91) 6393037184</h3>
                            </div>
                        </div>
                        <div className="information mt-10 gap-10 justify-left bg-[#27272c] text-white rounded-full flex items-center">
                            <div className="bg-primary rounded-full p-4">
                                <FaEnvelope className="text-[28px] text-accent" />
                            </div>
                            <div>
                                <p className="text-white/60">E-mail</p>
                                <h3 className="xl:text-lg">rashikulshreshtha23@gmail.com</h3>
                            </div>
                        </div>
                        <div className="information mt-10  gap-10 justify-left bg-[#27272c] text-white rounded-full flex items-center">
                            <div className="bg-primary rounded-full p-4">
                                <FaMapMarkerAlt className="text-[28px] text-accent" />
                            </div>
                            <div>
                                <p className="text-white/60">Currently in</p>
                                <h3 className="xl:text-lg">Bhopal, Madhya Pradesh</h3>
                            </div>
                        </div>
                        <div className="mt-[60px] mb-[50px]">
                            <Socials containerStyles="flex  justify-center gap-6" iconStyles="w-12 h-12 border  border-accent rounded-full flex  justify-center items-center text-accent bg-primary text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500" />
                        </div>
                    </div>

                </div>


                {/* contact form */}
                <div className="w-[100%] h-[100%] contact-form sm:pt-10 bg-gradient-to-l from-accent to-primary relative before:content-[''] before:absolute before:w-[26px] before:h-[26px] before:bg-primary before:rotate-45 before:top-[50px] before:-left-[13px]">
                    
                    <div className=" order-2 xl:order-none ">
                        <form className="flex flex-col gap-6 px-10 py-2 bg-transparent rounded-xl">
                            <h3 className="text-4xl mb-3 font-extrabold text-black ">Let's work <span className="text-white">together</span></h3>
                            <p className="text-white">It would be great to hear from you.</p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Input type="firstname" placeholder="First Name" />
                                <Input type="lastname" placeholder="Last Name" />
                                <Input type="email" placeholder="E-Mail Address" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div>

                            {/* select */}
                            {/* <Select>
                                <SelectTrigger classNamew-full>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">Programming and Problem Solving</SelectItem>
                                        <SelectItem value="mst">Soft Skills</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}

                            {/* textarea */}
                            <Textarea
                                className="h-[150px]"
                                placeholder="Type your message here"
                            />

                            {/* button */}
                            <Button  size="md" className="max-w-[200px] bg-primary text-accent gap-4 hover:bg-[#27272c] hover:text-accent-hover -mt-2">
                                <Link href="mailto:rashikulshreshtha23@gmail.com">Send Message</Link>
                                <IoIosSend className="text-white text-2xl"/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Random
