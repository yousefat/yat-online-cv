import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yousef Alturkey, CCP, GRP', // e.g: 'Name | Developer'
  lang: 'ar', // e.g: en, es, fr, jp
  description: 'Welcome to my online resume and personal website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Professional Accountant turned to HR. I started my career in the prestigious financial advisory firm EY, but changed jobs very early on and converted to the function of Human Resources in the specialty of Compensation Management.',
  paragraphTwo:
    'I have been a dedicated and passionate compensation professional ever since. I became certified with the global leader of the compensation practice, WorldatWork (formerly, the American Compensation Association) in 2019, in two of their flagship certifications.',
  paragraphThree:
    'The Certified Compensation Professional (CCP) and the Global Remuneration Professional (GRP). I am always on the hunt for new thoughts and ideas and I regularly update my portfolio of skills. I am also a committed life-long learner and student.',
  resume: 'https://drive.google.com/uc?export=download&id=1Gw3vi4MUj9s_KTJf1gjFIXx0v98HZt3o', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Education and Qualifications',
    info:
      'I hold a 1st hons. BS. Degree in Accounting, Business Administration from the University of Business & Technology (UBT) and I am currently completing my MS. Degree in Organizational Psychology from the University of London. In addition to my CCP and GRP designations I hold various top-level professional certifications and qualifications. For more information on those please refer to my resume.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Portfolio of Skills',
    info:
      'I specialize in the planning, design, and implementation of rewards systems. My portfolio of skills includes, data analytics and processing, statistics, business and financial acumen, project management, labor law, and corporate-level communications.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Work Experience',
    info: `I worked for very large and prestigious firms such as, EY Middle East and Almarai Company both of which are world-class leaders in  their respective sectors. Currently, I am part of the team managing the rewards system of the Saudi Industrial Development Fund, a major financial enabler for various programs of Saudi Arabia's 2030 vision.`,
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
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
