import React from 'react';
import { Menu } from './Menu';
import { S_LogoSvg } from '../assests';

export const HeaderInner = () => {
    return (
        <div className='header__inner'>
            <a href='#top'>
                <img class='logo' src={S_LogoSvg} alt='logo' />
            </a>
            <div className='overlay hidden'>
                {/* Close Menu Btn Start */}
                <div className='close-btn'></div>
            </div>

            {/* Hamburger Menu Start */}
            <div className='open-btn'></div>

            <Menu />
        </div>
    );
};
