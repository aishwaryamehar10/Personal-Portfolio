import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import '../styles/Footer.css';

function Footer() {
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/aishwarya-mehar-58a102247/', '_blank');
    }
    const handleGitHubClick = () => {
        window.open('https://github.com/aishwaryamehar10', '_blank');
    }
    const handleMailClick = () => {
        window.location.href = 'mailto:aishwaryamehar10@gmail.com';
    }
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon onClick={handleLinkedInClick} />
                <GitHubIcon onClick={handleGitHubClick} />
                <EmailIcon onClick={handleMailClick} />

            </div>
            <p> &copy; 2023</p>
        </div>
    )
}

export default Footer;
