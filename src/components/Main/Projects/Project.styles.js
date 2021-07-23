import styled from 'styled-components';
import { toRem, breakpoint } from '../../../Utils/functions';

export const Wrapper = styled.div`
    background: var(--white);
    box-shadow: 0 ${toRem(6)} ${toRem(8)} ${toRem(2)} rgba(116, 116, 116, 0.514);
    border-radius: ${toRem(8)};
    color: var(--m-grey);
    margin: 0 auto;
    margin-bottom: var(--mb-val-m);
    width: 100%;
    overflow: hidden;

    padding-bottom: ${toRem(22)};

    ${breakpoint({
        size: 'tablet',
        content: `
        padding-bottom: 0;
        max-width: ${toRem(656)};
    `,
    })}
`;

export const ProjectImage = styled.div`
    margin-bottom: ${toRem(45)};

    height: ${toRem(250)};
    background-image: url(${(props) => props.imagePath});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    ${breakpoint({
        size: 'mobile_l',
        content: `
        height: ${toRem(300)};
    `,
    })}

    ${breakpoint({
        size: 'tablet',
        content: `
        height: ${toRem(355)};
        margin-bottom: 0;
    `,
    })}
`;

export const ProjectDetails = styled.div`
    padding: 0 ${toRem(20)};

    ${breakpoint({
        size: 'tablet',
        content: `
        display: flex;

        flex-direction: column;
        padding: ${toRem(35)} ${toRem(20)};
    `,
    })}
`;

export const ProjectTitle = styled.h3`
    margin-bottom: ${toRem(25)};
    font-weight: 500;

    ${breakpoint({
        size: 'mobile_s',
        content: `
        font-size: ${toRem(20)};
    `,
    })}

    ${breakpoint({
        size: 'mobile_l',
        content: `
        font-size: ${toRem(22)};
    `,
    })}
`;

export const ProjectDescription = styled.p`
    max-width: 50ch;
    margin: 0 auto;
    margin-bottom: ${toRem(25)};

    ${breakpoint({
        size: 'tablet',
        content: `
        margin-bottom: ${toRem(20)};
    `,
    })}
`;

export const TechStack = styled.div`
    margin-bottom: ${toRem(30)};
    text-align: center;
`;

export const TechStackPin = styled.span`
    margin: 0 ${toRem(3)};
    margin-bottom: ${toRem(10)};

    display: inline-block;
    background-color: var(--m-grey);
    border-radius: ${toRem(6)};
    color: var(--white);
    padding: ${toRem(5)} ${toRem(8)};
`;
