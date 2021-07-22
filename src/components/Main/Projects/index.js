import React from 'react';
import {
    Wrapper,
    ProjectImage,
    ProjectDetails,
    ProjectDescription,
    ProjectTitle,
    TechStackPin,
    TechStack,
} from './Project.styles';

export const ProjectCard = ({
    img,
    title,
    desc,
    siteUrl,
    reposUrl,
    techStack,
}) => {
    return (
        <Wrapper className='project-card'>
            <ProjectImage imagePath={img} />
            <ProjectDetails>
                <ProjectTitle>{title}</ProjectTitle>

                <ProjectDescription>{desc}</ProjectDescription>

                <TechStack>
                    {techStack.map((techItem) => {
                        const { id, tech } = techItem;

                        return <TechPin key={id} name={tech} />;
                    })}
                </TechStack>
            </ProjectDetails>
        </Wrapper>
    );
};

const TechPin = ({ name }) => {
    return <TechStackPin>{name}</TechStackPin>;
};
