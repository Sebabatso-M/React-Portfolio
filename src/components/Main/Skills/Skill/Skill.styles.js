import styled from 'styled-components';
import { toRem } from '../../../../Utils/functions';

export const Wrapper = styled.img`
    margin: 0 ${toRem(10)} ${toRem(50)} ${toRem(10)};
    width: ${toRem(110)};
    height: ${toRem(110)};
`;
