import { breakpoints } from '../variables';

export const toRem = (px) => {
    let rem_val = px / 16;
    return rem_val + 'rem';
};
export const toEm = (px) => {
    let em_val = px / 16;
    return em_val + 'em';
};

export const breakpoint = ({ size, content }) => {
    return `@media (min-width: ${toEm(breakpoints[size])}){
        ${content}
    }`;
};
