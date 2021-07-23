import styled from 'styled-components';
import { toRem } from '../../Utils/functions';

export const Wrapper = styled.div`
    background-color: var(--d-grey);

    position: sticky;
    top: ${toRem(-0.5)};
`;

export const ScrollProgress = styled.div`
    background: var(--orange);
    height: ${toRem(3)};
    border-radius: ${toRem(25)};
    width: 0;
    max-width: 100%;
`;
