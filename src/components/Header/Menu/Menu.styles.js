import styled from 'styled-components';
import { toRem, breakpoint } from '../../../Utils/functions';

export const Wrapper = styled.div`
    position: absolute;
    top: ${toRem(100)};
    left: 50%;
    transform: translateX(-50%);

    transition: opacity 0.3s 0.2s, visibility 0.3s 0.2s;

    overflow-x: hidden;
    width: 90%;

    .active {
        color: var(--orange);
        font-weight: 500;

        &:hover {
            color: var(--orange);
            font-weight: 500;
        }

        &:visited {
            color: var(--orange);
        }
    }

    ${breakpoint({
        size: 'tablet',
        content: `
        position: unset;
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
        overflow: visible;
        width: max-content;
    `,
    })}
`;
