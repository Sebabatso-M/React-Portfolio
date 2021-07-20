import React from 'react';
import { HeaderInner } from '../HeaderInner';

export const Header = () => {
    return (
        <div className='header'>
            <HeaderInner />

            <div className='scroll-progress'></div>
        </div>
    );
};
