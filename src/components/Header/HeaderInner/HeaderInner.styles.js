import styled from 'styled-components';
import { toRem, breakpoint } from '../../../Utils/functions';

export const Wrapper = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    width: 90%;

    ${breakpoint({
        size: 'mobile_m',
        content: `
        width:85%;
    `,
    })}
`;

export const Logo = styled.a`
    img {
        user-select: none;
        width: ${toRem(60)};
    }
`;

export const CloseBtn = styled.div`
    /* @include fade-in; */

    background: url(${(props) => props.icon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: absolute;
    top: ${toRem(14)};
    right: 6%;
    z-index: 10;

    height: ${toRem(32)};
    width: ${toRem(32)};

    &:hover {
        cursor: pointer;
    }

    ${breakpoint({
        size: 'mobile_m',
        content: `
        right: 8.5%;
    `,
    })}
`;

export const MenuBtn = styled.div`
    background: url(${(props) => props.icon});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    height: ${toRem(28)};
    width: ${toRem(40)};

    &:hover {
        cursor: pointer;
    }

    ${breakpoint({
        size: 'tablet',
        content: `
        display: none;
    `,
    })}
`;

export const Overlay = styled.div`
    /*@include fade-in;*/

    background: hsla(206, 9%, 15%, 0.95);

    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    ${breakpoint({
        size: 'tablet',
        content: `
        display: none;
    `,
    })}
`;
