const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'AY.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aditya Yadav',
  role: 'Business Analyst',
  description:
    'I am Aditya Yadav, a final-year Computer Science and Engineering student with a strong focus on business analysis and technical problem-solving. I have experience in programming (C, Python, SQL), AI, cloud technologies, and digital marketing, alongside leadership roles in cybersecurity initiatives. My certifications in business analysis and data analytics, combined with hands-on project management, have equipped me to effectively gather requirements, manage stakeholders, and optimize processes. I am eager to leverage my technical background and analytical skills in a Business Analyst role to drive impactful business solutions and contribute to organizational growth.',
    resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/aditya-yadav-7b7508215/',
    github: 'https://github.com/deku1904',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'PowerBI '    ,
  'Data Analysis ' ,
  'Requirements Gathering ' ,
  'Stakeholders Management ' ,
  'Agile Methodologies' ,
  'Problem-solving ', 
  'Process Analysis and optimization' ,
  'Business analysis' ,
  'Strategic Planning ' ,
  'ReactJS ' ,
  'MySQL'  ,
  'Git ' ,
  'AI & Cloud  ',
  'Workflow ' ,
  'Resources ' ,
  'Leadership  ',
  'Communication ' ,
  'Collaboration ' ,
  'Teamwork ' ,
  'Logic  ',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
