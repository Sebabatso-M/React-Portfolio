import React from 'react';
import { Wrapper } from './Link.styles';

export const Link = ({ destination, linkName }) => {
    return (
        <Wrapper href={destination} className='navigation__link'>
            {linkName}
        </Wrapper>
    );
};
