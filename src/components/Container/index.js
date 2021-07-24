import React, { useEffect } from 'react';
import { Header } from '../Header';
import { ContainerSub } from '../ContainerSub';
import { FootWrapper, HeadWrapper } from './Container.styles';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { ButtonUp } from '../Buttons';

function scrolled(container, progressBar, btnUp) {
    let scroll = document.documentElement.scrollTop;
    let height = container.clientHeight;

    let scrolled = (scroll / height) * 100;

    progressBar.style.width = scrolled + '%';

    if (scrolled >= 100) {
        btnUp.style.opacity = 1;
        btnUp.style.visibility = 'visible';
    } else {
        btnUp.style.opacity = 0;
        btnUp.style.visibility = 'hidden';
    }
}

export const ContainerHead = () => {
    useEffect(() => {
        const containerHead = document.querySelector('.container-head');
        const scrollProgressBar = document.querySelector('.scroll-progress');
        const btnUp = document.querySelector('.btn-up');

        window.addEventListener('scroll', () => {
            scrolled(containerHead, scrollProgressBar, btnUp);
        });
    }, []);

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
        <>
            <FootWrapper className='container-foot'>
                <Footer />
            </FootWrapper>
            <ButtonUp />
        </>
    );
};
