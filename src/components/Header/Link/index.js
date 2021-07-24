import React, { useContext } from 'react';
import { Wrapper } from './Link.styles';
import PropTypes from 'prop-types';
import { HeaderContext } from '../HeaderInner';

export const Link = ({ destination, linkName, isActive, id }) => {
    const { isOpen, clickHandler } = useContext(HeaderContext);

    return (
        <Wrapper
            className={`navigation__link fade-in  ${isOpen ? 'opened' : ''}`}
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
};
