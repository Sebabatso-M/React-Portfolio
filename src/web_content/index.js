import {
    AdobeIllustratorSvg,
    CssSvg,
    FigmaSvg,
    HtmlSvg,
    JavascriptSvg,
    ScssSvg,
    GitSvg,
    ReactSvg,
    TailwindSvg,
    BootstrapSvg,
    HuddleImg,
    BaseImg,
    GithubBgImg,
    BlogrImg,
    ProfileImg,
    GithubOrangeSvg,
    InstagramSvg,
    LinkinSvg,
} from '../assests';

export const Links = [
    {
        id: 1,
        destination: '#top',
        linkName: 'Home',
        isActive: false,
    },
    {
        id: 2,
        destination: '#about-me',
        linkName: 'About Me',
        isActive: false,
    },
    {
        id: 3,
        destination: '#skills',
        linkName: 'My Skills',
        isActive: false,
    },
    {
        id: 4,
        destination: '#projects',
        linkName: 'Projects',
        isActive: false,
    },
    {
        id: 5,
        destination: '#contact-me',
        linkName: 'Contact Me',
        isActive: false,
    },
];

export const Skills = [
    {
        id: 1,
        name: 'Html',
        src: HtmlSvg,
    },
    {
        id: 2,
        name: 'CSS',
        src: CssSvg,
    },
    {
        id: 3,
        name: 'Javascript',
        src: JavascriptSvg,
    },
    {
        id: 4,
        name: 'SASS',
        src: ScssSvg,
    },
    {
        id: 5,
        name: 'Figma',
        src: FigmaSvg,
    },
    {
        id: 6,
        name: 'AdobeIllustrator',
        src: AdobeIllustratorSvg,
    },
    {
        id: 7,
        name: 'Git',
        src: GitSvg,
    },
];

export const SkillLearning = [
    {
        id: 1,
        name: 'React',
        src: ReactSvg,
    },
    {
        id: 2,
        name: 'Tailwind',
        src: TailwindSvg,
    },
    {
        id: 3,
        name: 'Bootstrap',
        src: BootstrapSvg,
    },
];

export const ProjectsData = [
    {
        id: 1,
        project_info: {
            img: ProfileImg,
            title: 'my personal portfolio',
            desc: 'My own website which serves the purpose of marketing myself',
            siteUrl: '',
            reposUrl: 'https://github.com/Sebabatso-M/My-Portfolio',
        },
        tech_stack: [
            { id: 1, tech: 'HTML' },
            { id: 2, tech: 'CSS' },
            { id: 3, tech: 'JavaScript' },
            { id: 4, tech: 'React' },
        ],
    },
    {
        id: 2,
        project_info: {
            img: BlogrImg,
            title: 'Blogr-landing-page',
            desc: 'A challenge from frontendmentor.io, with a little bit of sauce from yours truly.',
            siteUrl: 'http://blogr-inky.vercel.app/',
            reposUrl: 'https://github.com/Sebabatso-M/blogr-landing-page',
        },
        tech_stack: [
            { id: 1, tech: 'HTML' },
            { id: 2, tech: 'CSS' },
            { id: 3, tech: 'JavaScript' },
            { id: 4, tech: 'SCSS' },
        ],
    },

    {
        id: 3,
        project_info: {
            img: BaseImg,
            title: 'Base-apparel-coming',
            desc: 'A challenge from frontendmentor.io, with a little bit of sauce from yours truly.',
            siteUrl: 'http://base-apparel-umber.vercel.app/',
            reposUrl: 'https://github.com/Sebabatso-M/base-apparel',
        },
        tech_stack: [
            { id: 1, tech: 'HTML' },
            { id: 2, tech: 'CSS' },
            { id: 3, tech: 'JavaScript' },
        ],
    },
    {
        id: 4,
        project_info: {
            img: HuddleImg,
            title: 'Huddle-landing-page',
            desc: 'A challenge from frontendmentor.io, with a little bit of sauce from yours truly.',
            siteUrl: 'http://huddle-landing-page-sebabatso-m.vercel.app/',
            reposUrl: 'https://github.com/Sebabatso-M/huddle-landing-page',
        },
        tech_stack: [
            { id: 1, tech: 'HTML' },
            { id: 2, tech: 'CSS' },
        ],
    },
    {
        id: 5,
        project_info: {
            img: GithubBgImg,
            title: 'View More Projects',
            desc: 'Browse my Github repositories.',
            more: 'https://github.com/Sebabatso-M?tab=repositories',
            siteUrl: '',
            reposUrl: '',
        },
        tech_stack: [],
    },
];

export const Socials = [
    {
        id: 1,
        link: 'https://www.instagram.com/sl_mashego/',
        img: InstagramSvg,
        name: 'Instagram Icon',
    },
    {
        id: 2,
        link: 'https://www.linkedin.com/in/sebabatso-mashego/',
        img: LinkinSvg,
        name: 'LinkedIn Icon',
    },
    {
        id: 3,
        link: 'https://github.com/Sebabatso-M',
        img: GithubOrangeSvg,
        name: 'Github Icon',
    },
];
