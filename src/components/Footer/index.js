import React from 'react';
import { SocialsWrapper, SocialIcon, CopyrightText } from './Footer.styles';
import { ContactForm } from '../ContactForm';
import { Socials } from '../../web_content';

export const Footer = () => {
    return (
        <footer className='footer'>
            <ContactForm />

            <SocialsWrapper>
                {Socials.map((social) => {
                    const { id, link, img, name } = social;

                    return (
                        <a
                            key={id}
                            href={link}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <SocialIcon
                                key={id}
                                className='socials__icon'
                                src={img}
                                alt={name}
                            />
                        </a>
                    );
                })}
            </SocialsWrapper>

            <CopyrightText>
                &copy; 2021 Sebabatso Mashego. All Rights Reserved.
            </CopyrightText>
        </footer>
    );
};
