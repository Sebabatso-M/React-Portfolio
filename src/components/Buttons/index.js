import React from 'react';
import {
    Wrapper,
    ButtonImg,
    ButtonContainer,
    SubmitWrapper,
    ButtonUpWrapper,
} from './Buttons.styles';
import { TopSvg } from '../../assests';

export const Button = ({
    targetBlank,
    marginSides,
    to,
    children,
    img,
    by,
    bSize,
    type,
}) => {
    return (
        <Wrapper
            target={targetBlank === 'true' ? '_blank' : '_self'}
            href={to}
            ms={marginSides}
            type={type ? type : 'button'}
        >
            {children}
            <ButtonImg src={img} y={by ? by : 0} s={bSize ? bSize : 100} />
        </Wrapper>
    );
};

export const ButtonsContainer = ({ children }) => {
    return <ButtonContainer>{children}</ButtonContainer>;
};

export const SubmitButton = ({ children }) => {
    return (
        <SubmitWrapper as='button' type='submit'>
            {children}
        </SubmitWrapper>
    );
};

export const ButtonUp = () => {
    return (
        <>
            <a href='#top'>
                <ButtonUpWrapper
                    className='btn-up'
                    src={TopSvg}
                ></ButtonUpWrapper>
            </a>
        </>
    );
};
