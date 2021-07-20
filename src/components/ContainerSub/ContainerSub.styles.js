import styled from 'styled-components';
import { LogoSvg } from '../../assests';
import { toRem } from '../../Utils/functions';

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
`;
