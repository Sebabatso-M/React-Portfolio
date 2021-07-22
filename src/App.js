import React from 'react';
import { ContainerHead, ContainerFoot } from './components';
import { GlobalStyles } from './GlobalStyle';
import './css/normalize.css';

function App() {
    return (
        <>
            <ContainerHead />
            <ContainerFoot />
            <GlobalStyles />
        </>
    );
}

export default App;
