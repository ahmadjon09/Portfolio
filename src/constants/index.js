import {
  backend,
  mobile,
  web,
  clglogo,
  profile,
  amazonaws,
  anaconda,
  android,
  androidstudio,
  arduino,
  atom,
  bitcoin,
  blender,
  bootstrap,
  c,
  canva,
  chartdotjs,
  coursera,
  css3,
  django,
  eclipseide,
  ethereum,
  flask,
  geeksforgeeks,
  git,
  github,
  githubpro,
  googlechrome,
  googledrive,
  hackerrank,
  html5,
  inkscape,
  java,
  javascript,
  jupyter,
  kalilinux,
  kotlin,
  leetcode,
  matplotlib,
  mega,
  microsoft,
  microsoftazure,
  microsoftedge,
  microsoftexcel,
  microsoftoffice,
  microsoftpowerpoint,
  microsoftword,
  mongodb,
  mysql,
  netflix,
  nodedotjs,
  notepadplusplus,
  notion,
  numpy,
  nvidia,
  openai,
  opera,
  oracle,
  pandas,
  python,
  react,
  replit,
  republicofgamers,
  scikitlearn,
  spotify,
  stackoverflow,
  tailwindcss,
  threedotjs,
  torbrowser,
  ubuntu,
  udemy,
  unity,
  visualstudiocode,
  wikipedia,
  windows11,
  ai,
  brw,
  claho,
  db,
  devl,
  ds,
  edu,
  frwk,
  ide,
  mcft,
  ml,
  os,
  oth,
  pla,
  plb,
  vc,
  githubconnect,
  telegramconnect
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'skills',
    title: 'Skills'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'connect',
    title: 'Connect'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const about = [
  {
    name: 'Profile',
    description: 'DOB: 29 June 2009\nPOB: Hunsur, Mysore\nNationality: Uzbek ',
    image: profile
  }
]

const education = [
  {
    name: '12 School',
    type: 'Primary Education',
    icon: web
  },
  {
    name: '66 School',
    type: 'Secondary Education',
    icon: mobile
  },
  {
    name: 'UNITED IT CLUBS',
    type: 'Where I studied IT',
    icon: backend
  }
]

const skill = [
  {
    title: 'Programming Languages (Advanced)',
    iconpic: pla,
    name: 'PLA',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'Javascript',
        icon: nodedotjs
      }
    ]
  },
  {
    title: 'Programming Languages (Basic)',
    iconpic: plb,
    name: 'PLB',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'HTML',
        icon: html5
      },
      {
        name: 'CSS',
        icon: css3
      },
      {
        name: 'Javascript',
        icon: javascript
      }
    ]
  },
  {
    title: 'Frameworks',
    iconpic: frwk,
    name: 'FRWK',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'React',
        icon: react
      },
      {
        name: 'nodedotjs',
        icon: nodedotjs
      },
      {
        name: 'Bootstrap',
        icon: bootstrap
      },
      {
        name: 'TailwindCSS',
        icon: tailwindcss
      }
    ]
  },
  {
    title: 'Version Control',
    iconpic: vc,
    name: 'VC',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'git',
        icon: git
      },
      {
        name: 'Github',
        icon: github
      }
    ]
  },
  {
    title: 'Database',
    iconpic: db,
    name: 'DB',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'Mongodb',
        icon: mongodb
      },
      {
        name: 'Mysql',
        icon: mysql
      }
    ]
  },
  {
    title: 'IDE',
    iconpic: ide,
    name: 'ide',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'Visual studio code',
        icon: visualstudiocode
      },
      {
        name: 'Android Studio',
        icon: androidstudio
      }
    ]
  },
  {
    title: 'Hosting and Cloud Storage',
    iconpic: claho,
    name: 'CLAHO',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'AWS',
        icon: amazonaws
      }
    ]
  },
  {
    title: 'Operation System',
    iconpic: os,
    name: 'OS',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'Windows',
        icon: windows11
      }
    ]
  },
  {
    title: 'Browsers',
    iconpic: brw,
    name: 'Brw',
    iconBg: '#E6DEDD',
    skillball: [
      {
        name: 'Google Chrome',
        icon: googlechrome
      },
      {
        name: 'Tor',
        icon: torbrowser
      },
      {
        name: 'Opera',
        icon: opera
      },
      {
        name: 'Edge',
        icon: microsoftedge
      }
    ]
  }
]

const projects = [
  {
    name: 'Github',
    icon: githubpro,
    link: 'https://github.com/ahmadjon09?tab=repositories'
  }
]

const connect = [
  {
    name: 'github',
    icon: githubconnect,
    link: 'https://github.com/ahmadjon09'
  },
  {
    name: 'telegram',
    icon: telegramconnect,
    link: 'https://t.me/ItsNoWonder'
  }
]

export { about, education, skill, projects, connect }
