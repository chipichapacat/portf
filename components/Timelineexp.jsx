
import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'


const timelineElements = [
    {
        id: 1,
        position: "Competitive Programming Executive",
        date: "Nov 2023 - Present",
        company: "Codame, IIIT Bhopal",
        location: "Bhopal, Madhya Pradesh",
        icon: "/assets/work/workp.jpeg",
        direction: "right"
    },
    {
        id: 1,
        position: "Teaching Assistant",
        date: "Jan 2024 - May - 2024",
        company: "IIIT Bhopal",
        location: "Bhopal, Madhya Pradesh",
        icon: "/assets/work/workp.jpeg",
        direction: "left"
    },
]



const Timelineexp = () => {
    return (
        <div className='timeline-items max-w-[1200px] m-auto flex flex-wrap relative before:content-[""] before:absolute before:w-[5px] before:h-[100%] before:bg-white/50 before:left-[calc(50%-1px)]' >
            <div className="timeline-item mb-[40px] w-[100%] relative last:mb-0 odd:pr-[calc(50%+30px)] odd:text-right  even:pl-[calc(50%+30px)]">
                <div className="timeline-dot h-[21px] w-[21px] bg-accent absolute left-[calc(50%-8px)] rounded-3xl top-[10px]"></div>
                <div className='bg-[#27272c] p-5 rounded-xl'>
                    <div className="timeline-position  text-accent text-lg">
                        {timelineElements[0].position}
                    </div>
                    <div className="timeline-company mt-5 text-white/60">
                        {timelineElements[0].company}
                    </div>
                    <div className="timeline-date">
                        {timelineElements[0].date}
                    </div>
                </div>


            </div>

            <div className="timeline-item mb-[40px] w-[100%] relative last:mb-0 odd:pr-[calc(50%+30px)] odd:text-right  even:pl-[calc(50%+30px)] even:text-left">
                <div className="timeline-dot h-[21px] w-[21px] bg-accent absolute left-[calc(50%-8px)] rounded-3xl top-[10px]"></div>
                    <div className='bg-[#27272c] p-5 rounded-xl'>
                        <div className="timeline-position text-accent text-lg">
                            {timelineElements[1].position}
                        </div>
                        <div className="timeline-company mt-5 text-white/60">
                            {timelineElements[1].company}
                        </div>
                        <div className="timeline-date">
                            {timelineElements[1].date}
                        </div>
                    </div>

                
            </div>
        </div>
    )
}

export default Timelineexp
