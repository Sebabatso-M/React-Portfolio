import React from 'react';
import { Wrapper } from './Skills.styles';
import { SkillIcon } from './Skill';
import { Skills, SkillLearning } from '../../../web_content';

export const MySkills = () => {
    return (
        <Wrapper className='skills-container'>
            {Skills.map((skill) => {
                const { id } = skill;

                return <SkillIcon key={id} {...skill} />;
            })}
        </Wrapper>
    );
};

export const SkillsLearning = () => {
    return (
        <Wrapper className='skills-container'>
            {SkillLearning.map((skill) => {
                const { id } = skill;

                return <SkillIcon key={id} {...skill} />;
            })}
        </Wrapper>
    );
};
