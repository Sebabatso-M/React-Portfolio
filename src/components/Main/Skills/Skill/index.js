import React from 'react';
import { Wrapper } from './Skill.styles';

export const SkillIcon = ({ src, name }) => {
    return <Wrapper className='skill-icon' src={src} alt={name} />;
};
