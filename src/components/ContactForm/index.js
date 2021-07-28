import React, { useState } from 'react';
import {
    Wrapper,
    Form,
    FormTitle,
    FormControl,
    MessageWrapper,
    RequiredInput,
} from './ContactForm.styles';
import { SubmitButton } from '../Buttons';

export const ContactForm = () => {
    const { inputs, errors, handleInputChange, handleSubmit } = useForm(
        { name: '', email: '', message: '' },
        validate
    );

    return (
        <Wrapper id='contact-me'>
            <FormTitle>Contact Me</FormTitle>

            <Form className='contact-form' onSubmit={handleSubmit} noValidate>
                <FormControl>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={inputs.name}
                        placeholder='Name'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />

                    <RequiredInput
                        className={`required  ${errors.name ? 'bad' : 'good'}`}
                    >
                        {errors.name ? errors.name : 'Required Field'}
                    </RequiredInput>
                </FormControl>

                <FormControl>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        value={inputs.email}
                        autoComplete='off'
                        onChange={handleInputChange}
                    />

                    <RequiredInput
                        className={`required  ${errors.name ? 'bad' : 'good'}`}
                    >
                        {errors.email ? errors.email : 'Required Field'}
                    </RequiredInput>
                </FormControl>

                <MessageWrapper>
                    <label htmlFor='message'>Message</label>

                    <textarea
                        name='message'
                        id='message'
                        placeholder='Your message here...'
                        autoComplete='off'
                        value={inputs.message}
                        onChange={handleInputChange}
                    ></textarea>

                    <RequiredInput className='required'>
                        Required Field
                    </RequiredInput>
                </MessageWrapper>

                <SubmitButton>Send Message</SubmitButton>
            </Form>
        </Wrapper>
    );
};

function validate(inputs) {
    const errors = {};
    if (!inputs.name) {
        errors.name = 'Please fill in name';
    }

    if (!inputs.email) {
        errors.email = 'Please enter email';
    } else if (!isEmail(inputs.email)) {
        errors.email = 'Please enter valid email';
    }

    if (!inputs.message) {
        errors.message = 'Please enter a message';
    }

    return errors;
}

function isEmail(email) {
    let regex =
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}

const useForm = (initialValues, validate) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(inputs);
        setErrors(validationErrors);
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
            ...inputs,
            [event.target.name]: event.target.value,
        }));
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs,
        errors,
    };
};
