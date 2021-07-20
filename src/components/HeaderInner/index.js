import React from 'react';
import {
    Wrapper,
    Logo,
    CloseBtn,
    MenuBtn,
    Overlay,
} from './HeaderInner.styles';
import { Menu } from '../Menu';
import { S_LogoSvg, CloseBtnSvg, MenuBtnSvg } from '../../assests';

export const HeaderInner = () => {
    return (
        <Wrapper className='header__inner'>
            <Logo href='#top'>
                <img className='logo' src={S_LogoSvg} alt='logo' />
            </Logo>
            <Overlay className='overlay hidden'>
                {/* Close Menu Btn Start */}
                <CloseBtn className='close-btn' icon={CloseBtnSvg}></CloseBtn>
            </Overlay>

            {/* Hamburger Menu Start */}
            <MenuBtn className='open-btn' icon={MenuBtnSvg}></MenuBtn>

            <Menu />
        </Wrapper>
    );
};
