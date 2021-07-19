import React from 'react';

export const Link = ({ sendTo, linkName }) => {
    return (
        <a href={sendTo} className='navigation__link'>
            {linkName}
        </a>
    );
};
