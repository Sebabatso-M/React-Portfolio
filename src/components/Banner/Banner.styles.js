import styled from 'styled-components';
import { toRem } from '../../Utils/functions';
import { SlideArrowsSvg } from '../../assests';

export const BannerTitle = styled.h1`
    font-weight: 500;
    margin-bottom: ${toRem(5)};
    font-size: ${toRem(26)};
`;

export const BannerSubtitle = styled.h2`
    font-size: ${toRem(16)};
    font-weight: 300;

    margin-bottom: ${toRem(45)};
`;

export const OrangeCircle = styled.span`
    display: inline-block;

    font-size: ${toRem(22)};

    border-radius: 50%;
    color: var(--orange);
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

    @keyframes move {
        from {
            transform: translateY(0);
        }
        90% {
            transform: translateY(to-rem(30));
        }

        to {
            transform: translateY(0);
        }
    }
`;
