import styled from 'styled-components';
import { toRem, breakpoint, toEm } from '../../../Utils/functions';
import { SlideArrowsSvg } from '../../../assests';

export const BannerTitle = styled.h1`
    font-weight: 500;
    margin-bottom: ${toRem(5)};
    font-size: ${toRem(26)};

    @media (min-width: ${toEm(318)}) {
        font-size: ${toRem(28)};
    }

    ${breakpoint({
        size: 'mobile_m',
        content: `
        font-size: ${toRem(32)};
    `,
    })}

    ${breakpoint({
        size: 'mobile_l',
        content: `
        margin-top: ${toRem(60)};
        font-size: ${toRem(36)};
    `,
    })}

    ${breakpoint({
        size: 'mobile_ls',
        content: `
        margin-top: ${toRem(80)};
        font-size: ${toRem(44)};
    `,
    })}

    ${breakpoint({
        size: 'tablet',
        content: `
        margin-top: ${toRem(86)};
        font-size: ${toRem(48)};
    `,
    })}

    ${breakpoint({
        size: 'laptop_s',
        content: `
        margin-top: ${toRem(90)};
        font-size: ${toRem(54)};
    `,
    })}

    ${breakpoint({
        size: 'laptop_m',
        content: `
        margin-top: ${toRem(80)};
        font-size: ${toRem(58)};
    `,
    })}
`;

export const BannerSubtitle = styled.h2`
    font-size: ${toRem(16)};
    font-weight: 300;

    margin-bottom: ${toRem(45)};

    @media (min-width: ${toEm(318)}) {
        font-size: ${toRem(19)};
    }

    ${breakpoint({
        size: 'mobile_l',
        content: `
        font-size: ${toRem(21)};
    `,
    })}

    ${breakpoint({
        size: 'mobile_ls',
        content: `
        font-size: ${toRem(23)};
    `,
    })}
`;

export const OrangeCircle = styled.span`
    display: inline-block;

    font-size: ${toRem(22)};

    border-radius: 50%;
    color: var(--orange);

    ${breakpoint({
        size: 'mobile_l',
        content: `
        font-size: ${toRem(24)};
    `,
    })}
    ${breakpoint({
        size: 'mobile_ls',
        content: `
        font-size: ${toRem(26)};
    `,
    })}
    ${breakpoint({
        size: 'tablet',
        content: `
        font-size: ${toRem(30)};
    `,
    })}
`;

export const Arrow = styled.a`
    animation: move 0.9s ease-in-out 0.5s 5;

    width: ${toRem(46)};
    height: ${toRem(46)};

    display: block;
    background: url(${SlideArrowsSvg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

    margin: 0 auto;
    z-index: -1;
    ${breakpoint({
        size: 'mobile_m',
        content: `
        width: ${toRem(48)};
    `,
    })}

    ${breakpoint({
        size: 'mobile_ls',
        content: `
        width: ${toRem(51)};
    `,
    })}

    @keyframes move {
        from {
            transform: translateY(0);
        }
        90% {
            transform: translateY(${toRem(30)});
        }

        to {
            transform: translateY(0);
        }
    }
`;
