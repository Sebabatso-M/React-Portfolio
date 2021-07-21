import React from 'react';
import { Header } from '../Header';
import { ContainerSub } from '../ContainerSub';
import { Wrapper } from './Container.styles';
import { Main } from '../Main';

export const ContainerHead = () => {
    return (
        <Wrapper className='container-head' id='top'>
            <Header />
            <ContainerSub />
            <Main />
        </Wrapper>
    );
};
