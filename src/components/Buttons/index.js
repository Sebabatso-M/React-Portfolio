import React from 'react';
import { Wrapper, ButtonImg, ButtonContainer } from './Buttons.styles';

export const Button = ({
    targetBlank,
    marginSides,
    to,
    children,
    img,
    by,
    bSize,
}) => {
    return (
        <Wrapper
            target={targetBlank === 'true' ? '_blank' : '_self'}
            href={to}
            ms={marginSides}
        >
            {children}
            <ButtonImg src={img} y={by ? by : 0} s={bSize ? bSize : 100} />
        </Wrapper>
    );
};

export const ButtonsContainer = ({ children }) => {
    return <ButtonContainer>{children}</ButtonContainer>;
};
