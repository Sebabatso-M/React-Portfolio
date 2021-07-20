import React from 'react';
import { Wrapper, ScrollProgress } from './Header.styles';
import { HeaderInner } from '../HeaderInner';

export const Header = () => {
    return (
        <Wrapper className='header'>
            <HeaderInner />

            <ScrollProgress className='scroll-progress' />
        </Wrapper>
    );
};
