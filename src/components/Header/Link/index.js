import React, { useContext, useState } from 'react';
import { Wrapper } from './Link.styles';
import PropTypes from 'prop-types';
import { HeaderContext } from '../HeaderInner';

export const Link = ({ destination, linkName, isActive, id }) => {
    const { isOpen, clickHandler } = useContext(HeaderContext);
    const [active, setActive] = useState(isActive);

    return (
        <Wrapper
            className={`navigation__link fade-in  ${isOpen ? 'opened' : ''}  ${
                active ? 'active' : ''
            }`}
            href={destination}
            onClick={() => {
                clickHandler();
                setActive(!active);
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
