import styled from 'styled-components';
import { breakpoint } from '../../Utils/functions';

export const Wrapper = styled.main`
    text-align: center;

    margin: 0 auto;
    width: 88%;

    ${breakpoint({
        size: 'mobile_m',
        content: `
        width:85%;
    `,
    })}
`;

export const MainSection = styled.section`
    margin-bottom: var(--mb-val-m);
`;

export const SectionTitle = styled.h2`
    margin-bottom: var(--mb-val-s);

    color: var(--m-grey);
    font-weight: 500;
`;

export const SectionSubtitle = styled.h3`
    margin-top: var(--mb-val-s);
    margin-bottom: var(--mb-val-s);

    color: var(--m-grey);
    font-weight: 500;
`;
