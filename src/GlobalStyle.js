import { createGlobalStyle } from 'styled-components';
import { toRem, breakpoint } from './Utils/functions';

export const GlobalStyles = createGlobalStyle`

:root{
    --orange : hsl(14, 100%, 47%);
    --d-grey: hsl(206, 9%, 15%);
    --l-grey: #f0f2f4;

    /* mobile colors*/
    --m-grey: hsl(201, 8%, 34%);
    --white: hsl(0, 0%, 100%);

    /* font */
    --font-prompt: "Prompt", sans-serif;

    /* Margins */
    --mb-val-l: ${toRem(110)};
    --mb-val-m: ${toRem(80)};
    --mb-val-s: ${toRem(50)};

    /* Border Radius */
    --curve-val: ${toRem(100)};

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    &::selection {
        background: var(--d-grey);
        color: white;
    }
}

html{
    scroll-padding-top: ${toRem(80)};
    scroll-behavior: smooth;
}

body {
    animation: blur 1s ease-in forwards;

    background-color: var(--l-grey);

    font-family: var(--font-prompt);
    font-size: 16px;
    font-weight: 300;

    position: relative;

    line-height: 1.5;
}

a {
    text-decoration: none;

    &:visited {
        color: var(--white);
    }
}

img {
    display: inline-block;
}

.hidden {
    opacity: 0;
    visibility: hidden;

    ${breakpoint({
        size: 'tablet',
        content: `
        opacity: 1;
        visibility: visible;
    `,
    })}
}

// applied to body when menu is open
.no-scroll {
    overflow: hidden;

    ${breakpoint({
        size: 'tablet',
        content: `
        overflow: visible;
    `,
    })}
}

.opened {
    animation: slide 0.5s forwards;
    
    ${breakpoint({
        size: 'tablet',
        content: `
        animation: none;
    `,
    })}
}

@keyframes slide {
    from {
        transform: translateX(30%);
    }
    to {
        transform: translateX(0);
    }
}

.fade-in{
    transition: opacity 0.3s, visibility 0.3s;
}

h1,h2,h3{
    text-transform: capitalize;
}

`;
