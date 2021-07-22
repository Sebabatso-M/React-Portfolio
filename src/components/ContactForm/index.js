import React from 'react';
import {
    Wrapper,
    Form,
    FormTitle,
    FormControl,
    MessageWrapper,
    RequiredInput,
} from './ContactForm.styles';

export const ContactForm = () => {
    return (
        <Wrapper id='contact-me'>
            <FormTitle>Contact Me</FormTitle>

            <Form className='contact-form'>
                <FormControl>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        autoComplete='off'
                    />

                    <RequiredInput className='required'>
                        Required Field
                    </RequiredInput>
                </FormControl>

                <FormControl>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        autoComplete='off'
                    />

                    <RequiredInput className='required'>
                        Required Field
                    </RequiredInput>
                </FormControl>

                <MessageWrapper>
                    <label htmlFor='message'>Message</label>

                    <textarea
                        name='message'
                        id='message'
                        placeholder='Your message here...'
                        autoComplete='off'
                    ></textarea>

                    <RequiredInput className='required'>
                        Required Field
                    </RequiredInput>
                </MessageWrapper>
            </Form>
        </Wrapper>
    );
};
