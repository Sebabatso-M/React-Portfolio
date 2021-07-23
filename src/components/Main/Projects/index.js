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

import { LinkSvg, CodeSvg, MoreSvg } from '../../../assests';

import { Button, ButtonsContainer } from '../../Buttons';

export const ProjectCard = ({
    img,
    title,
    desc,
    more,
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

                <ButtonsContainer>
                    {more && (
                        <Button
                            targetBlank='true'
                            to={more}
                            img={MoreSvg}
                            by='65'
                            bSize='95'
                        >
                            More
                        </Button>
                    )}

                    {siteUrl && (
                        <Button targetBlank='true' to={siteUrl} img={LinkSvg}>
                            View Site
                        </Button>
                    )}
                    {reposUrl && (
                        <Button
                            targetBlank='true'
                            to={reposUrl}
                            img={CodeSvg}
                            by='85'
                        >
                            Source Code
                        </Button>
                    )}
                </ButtonsContainer>
            </ProjectDetails>
        </Wrapper>
    );
};

const TechPin = ({ name }) => {
    return <TechStackPin>{name}</TechStackPin>;
};
