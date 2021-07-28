import React, { useEffect } from 'react';
import { Header } from '../Header';
import { ContainerSub } from '../ContainerSub';
import { FootWrapper, HeadWrapper } from './Container.styles';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { ButtonUp } from '../Buttons';

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
    setActive(scrolled, height);
}

// shows in which section of the website you are currently in
// by setting the relevant link active
function setActive(scrolled_val, height) {
    const scrollPadding = window.getComputedStyle(
        document.documentElement
    ).scrollPaddingTop;

    const paddingTop = scrollPadding.slice(0, scrollPadding.indexOf('px'));

    const navigation__links = document.querySelectorAll('.navigation__link');

    const about = document.querySelector('.about-me');
    const skills = document.querySelector('.skills');
    const project = document.querySelector('.projects');
    const contact = document.querySelector('.container-foot');

    const home = navigation__links[0];
    const aboutSection = navigation__links[1];
    const skillsSection = navigation__links[2];
    const projectSection = navigation__links[3];
    const contactSection = navigation__links[4];

    const s = parseInt(scrolled_val);

    const aboutStart = calcPosPerc(about.offsetTop, paddingTop, height);
    const skillsStart = calcPosPerc(skills.offsetTop, paddingTop, height);
    const projectStart = calcPosPerc(project.offsetTop, paddingTop, height);
    const contactStart = calcPosPerc(contact.offsetTop, paddingTop, height);

    removeActive(navigation__links);

    if (s < aboutStart) {
        addClassActive(home);

        return;
    }
    if (s >= aboutStart && s < skillsStart) {
        addClassActive(aboutSection);

        return;
    }

    if (s >= skillsStart && s < projectStart) {
        addClassActive(skillsSection);

        return;
    }

    if (s >= projectStart && s < contactStart) {
        addClassActive(projectSection);

        return;
    }
    if (s >= contactStart) {
        addClassActive(contactSection);
        return;
    }
}

function addClassActive(element) {
    element.classList.add('active');
}

function calcPosPerc(offSet, padding, height) {
    return Number.parseInt(((offSet - padding) / height) * 100);
}
function removeActive(links) {
    links.forEach((link) => {
        link.classList.remove('active');
    });
}
