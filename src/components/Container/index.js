import React from 'react';
import { Header } from '../Header';
import { ContainerSub } from '../ContainerSub';
import { Wrapper } from './Container.styles';

export const Container = () => {
    return (
        <Wrapper className='container-head'>
            <Header />
            <ContainerSub />
        </Wrapper>
    );
};
