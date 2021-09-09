import React, { useContext, useState, useEffect } from 'react';
import { Link } from '../Link';
import { Links } from '../../../web_content';
import { Wrapper } from './Menu.styles';
import { HeaderContext } from '../HeaderInner';

export const Menu = () => {
    const { isOpen } = useContext(HeaderContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    function setWidth() {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', setWidth);

        document.querySelector('.navigation__link').classList.add('active');
    }, []);
    return (
        <Wrapper className={`menu fade-in ${!isOpen ? 'hidden' : ''}`}>
            {Links.map((link) => {
                return (
                    <Link key={link.id} {...link} screenSize={screenWidth} />
                );
            })}
        </Wrapper>
    );
};
