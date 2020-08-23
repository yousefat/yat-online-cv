import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yousef Alturkey, CCP, GRP', // e.g: 'Name | Developer'
  lang: 'ar', // e.g: en, es, fr, jp
  description: 'Welcome to Yousef Alturkey online CV', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Yousef Alturkey',
  subtitle: 'Certified Compensation Professional',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Certified Compensation Professional with endless passion and dedication to the practice. I advocate for the total rewards approach and its true alignment with business and HR strategies.',
  paragraphTwo:
    'Data-driven and results-oriented, I enjoy carrying out deep analyses and offer meaningful insights to drive high-impact decision-making.',
  paragraphThree:
    'Proficient in HRM, Business Acumen, and in other competencies such as, Financial Acumen, Project Management, Communication, Analytics, and Statistics. I seek meaning and value from my work.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: `Let's Talk`,
  email: 'hi@yousefalturkey.sa',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yousef-alturkey/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
