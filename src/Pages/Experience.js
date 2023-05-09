import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement className='vertical-tmeline-element--education'
                    date='JUne 2012 - May 2014'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        O.P Jindal School, Raigarh, C.G
                    </h3>
                    <p>High School</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-tmeline-element--education'
                    date=' July 2014 - May 2018'
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Shri Shankracharya Technical Campus, Bhilai, C.G
                    </h3>
                    <p>Bachelor of Engineering In Information Technology</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-tmeline-element--education'
                    date='June 2017 - August 2017'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Vocational Training In Java - Seed IT Solutions
                    </h3>
                    <p>Maintained the programming part and learnt various skills.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-tmeline-element--education'
                    date=' June 2022 - Dec 2022'
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Front-End Developer Intern - Reality Shift Private Limited
                    </h3>
                    <p>Maintained the front-end UI and built the required pages for the application using REACTJS.
                        Resolved the broken webpage bug caused due to improper usage of react hooks and data fetching.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
