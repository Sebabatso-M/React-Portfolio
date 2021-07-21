import React from 'react';
import {
    Wrapper,
    MainSection,
    SectionTitle,
    SectionSubtitle,
} from './Main.styles';
import { AboutMeInfo } from './About';
import { MySkills, SkillsLearning } from './Skills';

export const Main = () => {
    return (
        <Wrapper className='main'>
            <MainSection className='main__section about-me' id='about-me'>
                <SectionTitle className='section-title'>About Me</SectionTitle>

                <AboutMeInfo>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus corrupti cupiditate numquam iusto ut
                    voluptatem doloremque assumenda dolor pariatur et earum,
                    beatae velit qui, tempore libero quas? Modi sapiente iusto
                    incidunt sint impedit expedita quibusdam quod. Assumenda ad
                    eos corrupti sapiente error debitis earum, at dolorum id
                    delectus a doloremque!
                </AboutMeInfo>
                <AboutMeInfo>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus corrupti cupiditate numquam iusto ut
                    voluptatem doloremque assumenda dolor pariatur et earum,
                    beatae velit qui, tempore libero quas? Modi sapiente iusto
                    incidunt sint impedit expedita quibusdam quod. Assumenda ad
                    eos corrupti sapiente error debitis earum, at dolorum id
                    delectus a doloremque!
                </AboutMeInfo>
            </MainSection>

            <MainSection className='main__section skills' id='skills'>
                <SectionTitle>My Skills</SectionTitle>

                <MySkills />

                <SectionSubtitle>Skills currently learning</SectionSubtitle>

                <SkillsLearning />
            </MainSection>
        </Wrapper>
    );
};
