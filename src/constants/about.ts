import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiCss3, SiHtml5 } from 'react-icons/si'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'

export const CRONOLOGY_ITEMS = [
  {
    label: 'Técnico Integrado em Eletrônica, IFSUL',
    value: '2009-2014',
  },
  {
    label: 'Bacharelado em Engenharia de Computação, UFPel',
    value: '2014-2019',
  },
  {
    label: 'Estagiário - PET Computação',
    value: '05/2016-03/2020',
  },
  {
    label: 'Desenvolvedor - Moblize',
    value: '07/2018-03/2019',
  },
  {
    label: 'Mestrado em Computação, UFPel',
    value: '2020-2023',
  },
  {
    label: 'FrontendWeb Developer - Nav9',
    value: '02/2022-Atual',
  },
]

export const TECHNOLOGIES_ITEMS = [
  {
    label: 'react',
    value:
      `I have been using React for almost two years in my current job, and even longer for personal projects such as my master's dissertation, where I developed the web component using React.
      
      In addition, several short courses that I attended and small projects developed during courses were using this technology.
      
      I have also explored other technologies like Vue, Angular, and ReactNative through personal projects, such as my final college project. While I am still new to these technologies, I chose not to post topics related to them.
      
      Although I enjoy using React for development, I am continually learning and exploring other libraries and frameworks.`,
    icon: FaReact,
  },
  {
    label: 'javaScript',
    value: '',
    icon: IoLogoJavascript,
  },
  {
    label: 'typeScript',
    value: `While I started my career in web development using JavaScript, I have developed a strong preference for TypeScript due to the significant benefits it offers. 
    
    Despite the complexity associated with using this superset of JavaScript, it generates more solid code that can prevent many common errors, such as incorrect variable assignments.
    
    During my almost 2 years in my current job, I have exclusively used NextJS for projects and TypeScript as my primary language. Through this experience, I have come to believe that TypeScript significantly increases productivity compared to using pure JavaScript.
    
    Although typing errors can be frustrating when first working with TypeScript, I have discovered that using the any type is powerful ally when testing and prototyping quickly before defining types correctly.`,
    icon: SiTypescript,
  },
  {
    label: 'css',
    value: 'I know a little about CSS',
    icon: SiCss3,
  },
  {
    label: 'html',
    value: `Along with JavaScript and CSS, HTML is one of the fundamental components of frontend development that beginners learn first.
    
    I have been in contact with this technology for several years now, since I took my first course on JavaScript and web development, around 2018.
    
    Even though I use many component libraries for development, I enjoy deepening my understanding of the elements that make up the page structure. Having syntactically sound code makes development much easier.
    
    I believe that applying good syntax in code is a vital aspect of building well-structured code. Even when using components from libraries, I try always to use or create components that fit the syntactic context where they are inserted.`,
    icon: SiHtml5,
  },
  {
    label: 'c#',
    value: 'I know a little about C#',
    icon: TbBrandCSharp,
  },
  {
    label: 'sql',
    value: 'I know a little about SQL',
    icon: TbSql,
  },
]
