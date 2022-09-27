import githubLogo from '@/assets/icons/github.png';
import gmailLogo from '@/assets/icons/gmailLogo.png';
import linkedinLogo from '@/assets/icons/linkedin.png';

export const socials = [
  {
    label: 'Github',
    link: 'https://github.com/',
    icon: githubLogo,
  },
  {
    label: 'Linked In',
    link: 'https://www.linkedin.com/in/bancud-emarson-959ba2201/',
    icon: linkedinLogo,
  },
  {
    label: 'gmail',
    link: 'https://www.linkedin.com/in/bancud-emarson-959ba2201/',
    icon: gmailLogo,
  },
  // {
  //   label: 'gmail',
  //   link: 'https://www.linkedin.com/in/bancud-emarson-959ba2201/',
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/PeoplePerHour.com_2018_logo.png/1200px-PeoplePerHour.com_2018_logo.png',
  // },
];

export const projects = [
  {
    name: 'VJM Consultancy Property',
    usecase: [{}],
    logo: './src',
  },
  {
    name: 'HESOYAM: Operation Management System',
    link: '#',
    icon: '',
  },
];

export const navItems = [
  {
    label: 'Contact',
    link: '',
    key: 'contact',
  },
  {
    label: 'About me',
    key: 'about me',
    link: '',
  },
  {
    label: 'Projects',
    key: 'Projects',
    link: '',
  },
];
export const headerImagesLinks = [
  {
    alt: 'passion image',
    url: 'https://www.slashfilm.com/img/gallery/michael-scotts-12-most-redeeming-moments-in-the-office/intro-1634858598.jpg',
  },
  {
    alt: 'interest image',
    url: 'https://images.unsplash.com/photo-1598414351527-8052258ba4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
];
export const clientTestimonies = [
  {
    client: 'Julien Delattre',
    avatar:
      'https://dw3i9sxi97owk.cloudfront.net/uploads/thumbs/e01254e3c33371d163d3c32bd25108e2_70x70.jpg',
    comment:
      'Emarson provided some great designs for the project. He made some interesting suggestions as well He used Figma and kept me updated regularly It was a pleasure to work again together',
    starCount: 5,
    website: 'Plants for Cats',
  },
  {
    client: 'Sanak Pandya',
    avatar:
      'https://dw3i9sxi97owk.cloudfront.net/uploads/thumbs/bcecbf407ddaebf4ec659b413444a70c_70x70.jpg',
    comment:
      'Emarson did a fantastic job with my website. Totally overhauled it, made it look and operate so much better! He was very quick, nice to communicate with & great value. Would highly recommend.',
    starCount: 5,
    website: 'Fileo',
  },
  {
    client: 'Albert Kovacs',
    avatar:
      'https://www.peopleperhour.com/imgs/default_avatar_light_150x150.jpg',
    comment: 'Very nice guy pleasure to work with',
    starCount: 5,
    website: 'Million Loves',
  },
  {
    client: 'Jimmy Texon',
    avatar:
      'https://scontent.xx.fbcdn.net/v/t1.15752-9/301641069_2669866883543282_554261295764626237_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGjkI5S06hcUlUko2Lm_pAFbdj7U0mdfT9t2PtTSZ19P6sR4Okj89Q0lNsVo875dxTH6DEBAjBGSheNFftOAr6x&_nc_ohc=XTsXPn2G5JwAX_eFlf1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKkKBwUmlruXikza5HHlnQSZjW2qUTHaVx0Zuhb5WdBrw&oe=634293A6',
    comment:
      'As a client, I am very happy with the outcome of our website that Emarson Bancud provided to us. Encoding our listings is effortless. He provides us with excellent layout results. If there are changes he does it quickly and does it professionally. Also, viewing our listing on clients end is very easy.',
    starCount: 5,
    website: 'VJM Consultancy Property',
  },
];
// Use the generics if an object has multiple nests
// use extends with generic data type to make sure that the argument passed will be
