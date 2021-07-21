import { AboutMeInfoWrapper } from './About.styles';

export const AboutMeInfo = ({ children }) => {
    return (
        <AboutMeInfoWrapper className='about-me__info'>
            {children}
        </AboutMeInfoWrapper>
    );
};
