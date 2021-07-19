import React from 'react';
import { Link } from './Link';

export const Menu = () => {
    return (
        <div className='menu hidden'>
            <Link sendTo='#' linkName='Home' />
            <Link sendTo='#about-me' linkName='About Me' />
            <Link sendTo='#skills' linkName='My Skills' />
            <Link sendTo='#projects' linkName='Projects' />
            <Link sendTo='#contact-me' linkName='Contact Me' />
        </div>
    );
};
