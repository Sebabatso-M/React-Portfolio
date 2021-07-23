import styled from 'styled-components';
import { toRem, breakpoint } from '../../../Utils/functions';

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

    ${breakpoint({
        size: 'tablet',
        content: `
        transform: translateX(0);
        display: inline-block;
        font-size: ${toRem(18)};
        position: relative;

        &:not(:last-child){
            margin: 0 ${toRem(8)};
        }
    `,
    })}
`;
