import React, { useState, useRef } from 'react';
import {
    Wrapper,
    Form,
    FormTitle,
    FormControl,
    MessageWrapper,
    RequiredInput,
    ErrorInput,
    ValidInput,
} from './ContactForm.styles';
import { SubmitButton } from '../Buttons';

export const ContactForm = () => {
    const { inputs, errors, handleInputChange, handleSubmit } = useForm(
        { name: '', email: '', message: '' },
        validate
    );

    const nameInput = useRef(false);
    const emailInput = useRef(false);
    const messageInput = useRef(false);

    return (
        <Wrapper id='contact-me'>
            <FormTitle>Contact Me</FormTitle>

            <Form className='contact-form' onSubmit={handleSubmit} noValidate>
                {/* Name Input */}
                <FormControl>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        value={inputs.name}
                        placeholder='Name'
                        autoComplete='off'
                        ref={nameInput}
                        onChange={handleInputChange}
                    />

                    {errors.name ? (
                        <ErrorInput>{errors.name}</ErrorInput>
                    ) : nameInput.current.value ? (
                        <ValidInput>Name is valid</ValidInput>
                    ) : (
                        <RequiredInput>Required Field</RequiredInput>
                    )}
                </FormControl>

                {/* Email Input */}
                <FormControl>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        value={inputs.email}
                        autoComplete='off'
                        ref={emailInput}
                        onChange={handleInputChange}
                    />

                    {errors.email && <ErrorInput>{errors.email}</ErrorInput>}
                    {emailInput.current.value === '' && (
                        <RequiredInput>Required Field</RequiredInput>
                    )}
                    {isEmail(emailInput.current.value) && (
                        <ValidInput>Email is valid</ValidInput>
                    )}
                    {!isEmail(emailInput.current.value) &&
                    emailInput.current.value
                        ? (() => {
                              errors.email = 'Please enter valid email';
                          })()
                        : (() => {
                              errors.email = '';
                          })()}
                </FormControl>

                {/* Message Input */}
                <MessageWrapper>
                    <label htmlFor='message'>Message</label>

                    <textarea
                        name='message'
                        id='message'
                        placeholder='Your message here...'
                        autoComplete='off'
                        value={inputs.message}
                        ref={messageInput}
                        onChange={handleInputChange}
                    ></textarea>

                    {errors.message ? (
                        <ErrorInput>{errors.message}</ErrorInput>
                    ) : messageInput.current.value ? (
                        <ValidInput>Message is valid</ValidInput>
                    ) : (
                        <RequiredInput>Required Field</RequiredInput>
                    )}
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
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return regex.test(email);
}

const useForm = (initialValues, validate) => {
    const [inputs, setInputs] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate(inputs);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            event.target.submit();
        }
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
