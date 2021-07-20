import React from 'react';
import { Link } from '../Link';
import { Links } from '../../web_content';
import { Wrapper } from './Menu.styles';

export const Menu = () => {
    return (
        <Wrapper className='menu hidden'>
            {Links.map((link) => {
                return <Link key={link.id} {...link} />;
            })}
        </Wrapper>
    );
};
