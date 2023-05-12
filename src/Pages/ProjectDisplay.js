import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ProjectDisplay.css';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginLeft: theme.spacing(1),
    },
}));

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const classes = useStyles();

    return (
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt="" />
            <p><b>Skills:</b> {project.skills}</p>
            <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                <GitHubIcon />
            </a>
            {project.deployedLink && (
                <a
                    href={project.deployedLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.icon}
                >
                    <LinkIcon />
                </a>
            )}
        </div>
    );
}

export default ProjectDisplay;
