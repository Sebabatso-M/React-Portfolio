import React from 'react';
import { Wrapper, Background } from './ContainerSub.styles';
import { Banner } from '../Banner';

export const ContainerSub = () => {
    return (
        <Wrapper className='container__sub'>
            <Background>
                <Banner />
            </Background>
        </Wrapper>
    );
};
