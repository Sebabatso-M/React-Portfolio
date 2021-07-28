import styled from 'styled-components';
import { toRem, breakpoint } from '../../../../Utils/functions';

export const Wrapper = styled.img`
    margin: 0 ${toRem(10)};
    margin-bottom: ${toRem(50)};
    width: ${toRem(110)};
    height: ${toRem(110)};

    ${breakpoint({
        size: 'tablet',
        content: `
        margin: 0 ${toRem(25)};
        margin-bottom: ${toRem(50)};
    `,
    })}
`;
