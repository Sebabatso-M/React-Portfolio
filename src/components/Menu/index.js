import React, { useContext } from 'react';
import { Link } from '../Link';
import { Links } from '../../web_content';
import { Wrapper } from './Menu.styles';
import { HeaderContext } from '../HeaderInner';

export const Menu = () => {
    const { isOpen } = useContext(HeaderContext);

    return (
        <Wrapper className={`menu fade-in ${!isOpen ? 'hidden' : ''}`}>
            {Links.map((link) => {
                return <Link key={link.id} {...link} />;
            })}
        </Wrapper>
    );
};
