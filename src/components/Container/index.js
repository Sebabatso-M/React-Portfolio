import React from 'react';
import { Header } from '../Header';
import { ContainerSub } from '../ContainerSub';
import { FootWrapper, HeadWrapper } from './Container.styles';
import { Main } from '../Main';
import { ContactForm } from '../ContactForm';

export const ContainerHead = () => {
    return (
        <HeadWrapper className='container-head' id='top'>
            <Header />
            <ContainerSub />
            <Main />
        </HeadWrapper>
    );
};

export const ContainerFoot = () => {
    return (
        <FootWrapper>
            <ContactForm />
        </FootWrapper>
    );
};
