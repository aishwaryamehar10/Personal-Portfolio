import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {

    return (
        <div className="home">
            <div className="about">
                <h2>Hi, My Name is Aishwarya</h2>
                <div className="prompt">
                    <p>
                        A Full Stack Developer with expertise in creating user-friendly web applications.
                    </p>
                    <LinkedInIcon />

                    <GitHubIcon />
                    <EmailIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            HTML, CSS, JavaScript, ReactJS, Redux, React Native, Npm, BootStrap, TailwindCSS, MaterialUI,
                            StyledComponents
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, Java, ExpressJS, MySQL, SQL, MongoDB, AWS
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>
                            C, C++, Java, JavaScript, TypeScript
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
