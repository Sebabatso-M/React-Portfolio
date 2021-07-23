import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils/functions';

export const Wrapper = styled.a`
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
    margin: 0 ${(props) => (props.ms ? props.ms : 0)};
    margin-bottom: ${toRem(25)};

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.9);
    }

    ${breakpoint({
        size: 'tablet',
        content: `
        margin-bottom: ${toRem(15)};
    `,
    })}
`;

export const ButtonImg = styled.span`
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${(props) => props.s + '%'};
    background-image: url(${(props) => props.src});
    background-position-y: ${(props) => props.y + '%'};
    width: ${toRem(18)};
    height: ${toRem(18)};
    margin-left: ${toRem(6)};
    vertical-align: ${toRem(-3)};
`;

export const ButtonContainer = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;

    ${breakpoint({
        size: 'tablet',
        content: `
        flex-direction: row;
        justify-content: space-evenly;
    `,
    })}
`;
