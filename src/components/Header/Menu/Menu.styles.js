import styled from 'styled-components';
import { toRem } from '../../../Utils/functions';

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
`;
