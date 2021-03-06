import React, { useState, useEffect } from 'react';
import {
    Wrapper,
    Logo,
    CloseBtn,
    MenuBtn,
    Overlay,
} from './HeaderInner.styles';
import { Menu } from '../Menu';
import { S_LogoSvg, CloseBtnSvg, MenuBtnSvg } from '../../../assests';
import { breakpoints } from '../../../Utils/variables';

export const HeaderContext = React.createContext();

export const HeaderInner = () => {
    const [isOpen, setIsOpen] = useState(false);

    function clickHandler() {
        setIsOpen(!isOpen);
    }
    function resizeHandler() {
        if (window.innerWidth >= breakpoints['tablet']) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.body.className = `${isOpen ? 'no-scroll' : ''}`;

        // to make menu visible from tablet view and up

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [isOpen]);

    return (
        <HeaderContext.Provider value={{ isOpen, clickHandler }}>
            <Wrapper className='header__inner'>
                <Logo href='#top'>
                    <img className='logo' src={S_LogoSvg} alt='logo' />
                </Logo>
                <Overlay
                    className={`overlay fade-in ${
                        !isOpen ? 'hidden' : 'opened'
                    }`}
                    onClick={() => clickHandler()}
                >
                    {/* Close Menu Btn Start */}
                    <CloseBtn
                        className='close-btn'
                        icon={CloseBtnSvg}
                    ></CloseBtn>
                </Overlay>

                {/* Hamburger Menu Start */}
                <MenuBtn
                    className='open-btn'
                    icon={MenuBtnSvg}
                    onClick={() => clickHandler()}
                ></MenuBtn>

                <Menu />
            </Wrapper>
        </HeaderContext.Provider>
    );
};
