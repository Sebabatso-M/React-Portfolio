import styled from 'styled-components';
import { toRem } from '../../Utils/functions';

export const Wrapper = styled.a`
    display: block;
    padding: ${toRem(16)} 0;

    font-size: ${toRem(32)};
    text-align: center;
    transform: translateX(100%);
    color: var(--white);

    &:hover {
        color: var(--l-grey);
    }

    &:visited {
        color: var(--white);
    }
    &.opened {
        animation-delay: 0.1s;
    }
`;
