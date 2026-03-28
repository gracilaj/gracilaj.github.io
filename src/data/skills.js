/**
 * Technical skills — `icon` is a Simple Icons slug (cdn.simpleicons.org).
 * Use their exact slug (e.g. CSS is `css`, not `css3`).
 * For broad categories without one logo, pick a representative Simple Icons slug (e.g. `huggingface` for AI-assisted dev).
 * Omit `icon` only when no sensible brand exists.
 */
export const skillGroups = [
  {
    id: 'frontend',
    label: 'Front-End',
    items: [
      { name: 'HTML5', years: 5, icon: 'html5' },
      { name: 'CSS3', years: 5, icon: 'css' },
      { name: 'JavaScript', years: 5, icon: 'javascript' },
      { name: 'jQuery', years: 5, icon: 'jquery' },
      { name: 'Bootstrap 4 / Responsive Design', years: 5, icon: 'bootstrap' },
      { name: 'React.js', years: 2, icon: 'react' },
      { name: 'Vue.js', years: 1, icon: 'vuedotjs' },
    ],
  },
  {
    id: 'backend',
    label: 'Back-End',
    items: [
      { name: 'PHP', years: 4, icon: 'php' },
      { name: 'CodeIgniter 3', years: 4, icon: 'codeigniter' },
      { name: 'CodeIgniter 4', years: 2, icon: 'codeigniter' },
      { name: 'Laravel', years: 1, icon: 'laravel' },
      { name: 'Node.js', years: 1, icon: 'nodedotjs' },
      { name: 'Express.js', years: 1, icon: 'express' },
      { name: 'Python', years: 1, icon: 'python' },
      { name: 'RESTful API Development', years: 5, icon: 'swagger' },
      { name: 'Ratchet WebSocket', years: 4, icon: 'socketdotio' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      { name: 'MySQL', years: 4, icon: 'mysql' },
      { name: 'MongoDB', years: 1, icon: 'mongodb' },
    ],
  },
  {
    id: 'lamp',
    label: 'LAMP Stack',
    items: [
      { name: 'Linux', years: 5, icon: 'linux' },
      { name: 'Apache', years: 5, icon: 'apache' },
      { name: 'MySQL', years: 4, icon: 'mysql' },
      { name: 'PHP', years: 4, icon: 'php' },
      {
        name: 'Full-Stack LAMP Application Development',
        years: null,
        icon: 'php',
      },
    ],
  },
  {
    id: 'mern',
    label: 'MERN Stack',
    items: [
      { name: 'MongoDB', years: 1, icon: 'mongodb' },
      { name: 'Express.js', years: 1, icon: 'express' },
      { name: 'React.js', years: 2, icon: 'react' },
      { name: 'Node.js', years: 1, icon: 'nodedotjs' },
      {
        name: 'Full-Stack MERN Application Development',
        years: null,
        icon: 'react',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Deployment',
    items: [{ name: 'AWS (EC2, S3, RDS)', years: null, icon: 'aws' }],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    items: [
      { name: 'Eclipse IDE', years: 5, icon: 'eclipseide' },
      { name: 'VS Code', years: 5, icon: 'vscode' },
      { name: 'Cursor', years: 1, icon: 'cursor' },
      { name: 'AI web development', years: 1, icon: 'huggingface' },
      { name: 'MySQL Workbench', years: 5, icon: 'mysql' },
      { name: 'Git & GitHub', years: 5, icon: 'github' },
    ],
  },
]
