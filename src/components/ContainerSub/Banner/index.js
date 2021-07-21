import React from 'react';
import {
    BannerTitle,
    BannerSubtitle,
    OrangeCircle,
    Arrow,
} from './Banner.styles';

export const Banner = () => {
    return (
        <div className='banner'>
            <BannerTitle className='banner__title'>
                Sebabatso Mashego
            </BannerTitle>
            <BannerSubtitle>
                Front-end Web Developer
                <OrangeCircle>.</OrangeCircle>
            </BannerSubtitle>

            <Arrow href='#about-me'></Arrow>
        </div>
    );
};
