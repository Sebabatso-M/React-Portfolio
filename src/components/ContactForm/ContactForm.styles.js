import styled from 'styled-components';
import { toRem } from '../../Utils/functions';

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: ${toRem(600)};

    .good {
        color: rgb(11, 139, 33);
    }

    .bad {
        color: rgb(255, 0, 0);
    }
`;

export const Form = styled.form`
    margin-bottom: var(--mb-val-m);

    input,
    textarea {
        display: block;
        border-radius: ${toRem(4)};
        width: 100%;
        border: ${toRem(2)} solid var(--m-grey);
        padding: ${toRem(10)} ${toRem(15)};

        color: var(--d-grey);

        &:focus {
            outline: ${toRem(2)} solid var(--orange);
            outline-offset: ${toRem(-2)};
        }
    }

    .error {
        border-color: rgb(255, 0, 0);
        color: rgb(255, 0, 0);
    }
    .success {
        border-color: rgb(11, 139, 33);
        color: rgb(11, 139, 33);
    }
`;

export const FormTitle = styled.h2`
    margin-bottom: var(--mb-val-s);

    color: var(--white);
    text-align: center;
    font-weight: 500;
`;

export const FormControl = styled.div`
    margin-bottom: ${toRem(10)};

    &:not(:first-child) {
        margin-bottom: ${toRem(20)};
    }
`;

export const MessageWrapper = styled.div`
    margin-bottom: ${toRem(28)};

    label {
        margin-bottom: ${toRem(14)};

        display: block;

        color: var(--white);

        font-size: ${toRem(18)};
        font-weight: 500;
    }

    textarea {
        resize: none;
        height: ${toRem(150)};
    }
`;

export const RequiredInput = styled.span`
    font-weight: 500;
    font-size: ${toRem(12)};
    color: var(--l-grey);
`;
