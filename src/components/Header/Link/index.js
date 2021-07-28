import React, { useContext } from 'react';
import { Wrapper } from './Link.styles';
import PropTypes from 'prop-types';
import { HeaderContext } from '../HeaderInner';

export const Link = ({ destination, linkName, screenSize }) => {
    const { isOpen, clickHandler } = useContext(HeaderContext);

    return (
        <Wrapper
            className={`navigation__link fade-in  ${
                // only add isOpen class when screen is less than 768px
                isOpen && screenSize < 768 ? 'opened' : ''
            }`}
            href={destination}
            onClick={() => {
                clickHandler();
            }}
        >
            {linkName}
        </Wrapper>
    );
};

Link.protoTypes = {
    destination: PropTypes.string,
    linkName: PropTypes.string,
    screenSize: PropTypes.number,
};
