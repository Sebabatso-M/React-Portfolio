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
    margin: 0 ${(props) => (props.ms ? props.ms : toRem(6))};

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
        justify-content: center;
    `,
    })}
`;

export const SubmitWrapper = styled(Wrapper)`
    box-shadow: 0 ${toRem(4)} ${toRem(4)} hsl(14, 100%, 28%);
`;

export const ButtonUpWrapper = styled.div`
    background: var(--white) url(${(props) => props.src});
    background-position: center;
    background-size: 120%;
    border: ${toRem(3)} solid var(--orange);
    border-radius: 50%;
    width: ${toRem(50)};
    height: ${toRem(50)};
    position: fixed;
    right: 4%;
    bottom: ${toRem(120)};
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
`;
