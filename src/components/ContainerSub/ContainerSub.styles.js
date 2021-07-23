import styled from 'styled-components';
import { LogoSvg } from '../../assests';
import { toRem, breakpoint } from '../../Utils/functions';

export const Wrapper = styled.div`
    background: var(--d-grey);
    border-bottom-left-radius: var(--curve-val);
    color: var(--l-grey);
    margin-bottom: var(--mb-val-l);
    text-align: center;
`;

export const Background = styled.div`
    background: url(${LogoSvg});
    background-repeat: no-repeat;
    background-size: 90%;
    background-position: center 40%;
    padding-top: ${toRem(260)};
    padding-bottom: ${toRem(80)};
    margin: 0 auto;

    ${breakpoint({
        size: 'mobile_m',
        content: `
        background-size: 80%;
    `,
    })}
    ${breakpoint({
        size: 'mobile_l',
        content: `
        background-size: 74%;
    `,
    })}
    ${breakpoint({
        size: 'mobile_ls',
        content: `
        background-size: 68%;
    `,
    })}
    ${breakpoint({
        size: 'tablet',
        content: `
        background-size: 50%;
    `,
    })}
    ${breakpoint({
        size: 'laptop_s',
        content: `
        background-size: 38%;
        background-position: center 38%;
    `,
    })}
    ${breakpoint({
        size: 'laptop_m',
        content: `
        background-size: 34%;
        max-width: ${toRem(1366)};
    `,
    })}
`;
