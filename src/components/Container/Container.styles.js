import styled from 'styled-components';
import { toRem, breakpoint } from '../../Utils/functions';

export const HeadWrapper = styled.div`
    margin-bottom: calc(var(--mb-val-l) + 35px);
`;

export const FootWrapper = styled.div`
    background: var(--d-grey);
    border-top-right-radius: var(--curve-val);
    min-height: 100vh;

    padding: var(--mb-val-s) 0;

    ${breakpoint({
        size: 'mobile_s',
        content: `
        padding-top: ${toRem(70)};
    `,
    })}
    ${breakpoint({
        size: 'mobile_ls',
        content: `
        padding-top: var(--mb-val-m);
    `,
    })}

    ${breakpoint({
        size: 'laptop_s',
        content: `
        padding-top: var(--mb-val-l);
    `,
    })}
`;
