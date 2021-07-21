import styled from 'styled-components';
import { toRem } from '../../Utils/functions';

export const Button = styled.a`
    display: block;

    background: var(--orange);
    border-radius: ${toRem(5)};
    box-shadow: 0 ${toRem(4)} ${toRem(4)} rgba(75, 74, 74, 0.514);

    cursor: pointer;
    border: none;
    color: var(--white);
    font-family: inherit;
    font-size: ${toRem(14)};
    text-align: center;

    padding: ${toRem(12)} 0;
    width: ${toRem(150)};
    margin-bottom: ${toRem(25)};

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const ButtonImg = styled.span`
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    width: ${toRem(18)};
    height: ${toRem(18)};
    margin-left: ${toRem(4)};
    vertical-align: ${toRem(-3)};
`;
