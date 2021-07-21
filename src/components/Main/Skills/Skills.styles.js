import styled from 'styled-components';
import { toRem } from '../../../Utils/functions';

export const Wrapper = styled.div`
    display: flex;

    justify-content: space-evenly;
    flex-wrap: wrap;

    max-width: ${toRem(612)};
    margin: 0 auto;
`;
