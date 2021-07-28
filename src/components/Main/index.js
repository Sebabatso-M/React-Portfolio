import React from 'react';
import {
    Wrapper,
    MainSection,
    SectionTitle,
    SectionSubtitle,
} from './Main.styles';
import { AboutMeInfo } from './About';
import { MySkills, SkillsLearning } from './Skills';
import { ProjectCard } from './Projects';
import { ProjectsData } from '../../web_content';
import { Button } from '../Buttons';
import { LinkSvg } from '../../assests';

export const Main = () => {
    return (
        <Wrapper className='main'>
            <MainSection className='main__section about-me' id='about-me'>
                <SectionTitle className='section-title'>About Me</SectionTitle>

                <AboutMeInfo>
                    I, Sebabatso Mashego, am an aspiring{' '}
                    <span className='orange-highlight'>
                        Front-end Web Developer
                    </span>
                    , with the skills and experience of creating fully
                    functioning, responsive, modern websites. I recently
                    finished a 3 year National Certificate Vocational course in{' '}
                    <span className='orange-highlight'>
                        Information Technology and Computer Sciences
                    </span>
                    , at Ekurhuleni East TVET College, which has equipped me
                    with the necessary knowledge and skills.
                </AboutMeInfo>
                <AboutMeInfo>
                    My love for programming and computers was inspired by a TV
                    show called 'Scorpion', and ever since watching it, I knew
                    that the{' '}
                    <span className='orange-highlight'>
                        Information Technology and Computer Sciences
                    </span>{' '}
                    field is for me. What constantly drives me to better my
                    knowledge and skills within this field, is the ability that
                    comes with it, of being able to create cool and amazing
                    tangible things, all originating from one's intangible
                    thoughts. To that end, I make sure that i contribute daily,
                    in bettering my knowledge and skills.
                </AboutMeInfo>
                <AboutMeInfo>
                    I am currently looking for a job in{' '}
                    <span className='orange-highlight'>
                        Front-end Web development
                    </span>
                    , in which i can do what i love for a living, using my
                    accumulated knowledge and skills to help people, no matter
                    how small of a change I can make. I am eager to further
                    develop my knowledge and skills within this field, and gain
                    all the experience I can get, with the ultimate goal of
                    growing as an individual.
                </AboutMeInfo>

                <Button
                    to='#'
                    targetBlank='true'
                    marginSides='auto'
                    img={LinkSvg}
                >
                    View Resume
                </Button>
            </MainSection>

            <MainSection className='main__section skills' id='skills'>
                <SectionTitle>My Skills</SectionTitle>

                <MySkills />

                <SectionSubtitle>Skills currently learning</SectionSubtitle>

                <SkillsLearning />
            </MainSection>

            <MainSection className='main__section projects' id='projects'>
                <SectionTitle>My Projects</SectionTitle>

                {ProjectsData.map((projectdata) => {
                    return (
                        <ProjectCard
                            key={projectdata.id}
                            {...projectdata.project_info}
                            techStack={projectdata.tech_stack}
                        />
                    );
                })}
            </MainSection>
        </Wrapper>
    );
};
