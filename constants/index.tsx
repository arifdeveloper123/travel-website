import { title } from "process";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];

  export const FEATURES = [
    {
      title:`Real maps can be offline`,
      icon: `/map1.svg`, 
      discription: `We provide a solution for you to be able
       to use our application when climbing, yes offline
       maps you can use at any time there is no signal at the location`
    },

    {
      title:`Set an adventure schedule`,
      icon:`/calendar.svg`,
      discription:`Schedule an adventure with friends.
       On holidays, there are many interesting offers from Hilink. 
       That way, there's no more discussion`
    },

    {
      title:`Technology using augment reality`,
      icon:`/tech.svg`,
      discription:`Technology uses augmented reality as
       a guide to your hiking trail in the forest
       to the top of the mountain. Already supported
        by the latest technology without an internet connectionn`
    },
    {
      title:`Many new locations every month`,
      icon:`/location.svg`,
      discription:`Lots of new locations every month, 
      because we have a worldwide community of climbers
       who share their best experiences with climbing`
    },
    
  ]

  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  