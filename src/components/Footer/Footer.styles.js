import styled from 'styled-components';
import { toRem } from '../../Utils/functions';

export const SocialsWrapper = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
`;

export const SocialIcon = styled.img`
    height: ${toRem(30)};
    margin: 0 ${toRem(10)};

    &:hover {
        transform: scale(1.3);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const CopyrightText = styled.p`
    color: var(--white);
    font-size: ${toRem(13)};
    margin: 0 auto;
    margin-top: ${toRem(30)};
    text-align: center;
`;
