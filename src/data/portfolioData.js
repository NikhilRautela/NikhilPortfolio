export const personalInfo = {
  name: 'Nikhil Singh Rautela',
  role: 'Full-Stack Software Developer',
  tagline: 'Building production-grade applications with React, Node.js & AI integrations.',
  about: [
    "I'm a B.Tech Computer Science graduate from Graphic Era Hill University, Bhimtal",
    "I specialize in full-stack web development — designing REST APIs, building React frontends, and integrating third-party services like LLM APIs, Firebase, and payment gateways.",
    "I'm passionate about AI-assisted development, scalable system design, and writing clean, maintainable code that works in production.",
  ],
  email: 'nikhilrautela32@gmail.com',
  github: 'https://github.com/NikhilRautela',
  linkedin: 'https://linkedin.com/in/nikhil-singh-rautela',
  location: 'Haldwani, Uttarakhand, India',
}

export const stats = [
  { value: '7+',   label: 'Projects Shipped' },
  { value: '5+',   label: 'Languages & Stacks' },
  { value: '2026', label: 'Graduating' },
]

export const skills = [
  {
    category: 'Languages',
    items: ['C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Axios'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'REST API Design', 'JWT Auth', 'bcrypt'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Prisma ORM'],
  },
  {
    category: 'AI / ML',
    items: ['LLM API Integration', 'OpenRouter', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Firebase', 'Razorpay', 'VS Code'],
  },
]

export const experience = [
  {
    company: 'Oasis Infobyte',
    role: 'Frontend Developer Intern',
    type: 'Remote',
    duration: 'January 2025 – February 2025',
    points: [
      'Designed and shipped 3 production-ready web applications — a pizza delivery platform, a calculator, and a portfolio site — within 4 weeks with zero revision requests.',
      'Improved page-load performance through lazy loading and asset minification across 3 repositories with zero post-deployment defects.',
    ],
  },
]

export const projects = [
  {
    title: 'JobPrep AI',
    subtitle: 'AI-Powered Interview Preparation Platform',
    date: 'May 2026',
    description:
      'A full-stack SaaS platform where users upload their resume and receive AI-generated, personalised interview questions via the OpenRouter LLM API. Features a modular REST API with 5 domains, Firebase Google Auth, and a Razorpay credit-based payment system.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Razorpay', 'OpenRouter LLM'],
    github: 'https://github.com/NikhilRautela',
    live: null,
    badge: 'SaaS · Live',
    icon: '🤖',
    color: 'from-blue-500/10 to-indigo-500/10',
  },
 {
    title: 'MovieMania',
    subtitle: 'Full-Stack Movie Discovery App',
    date: 'March 2026',
    description:
      'A responsive movie discovery web app with real-time search, user authentication (register, login, forgot password), and a personal favourites system. Built with React, Context API for global state, and the TMDB REST API for live movie data.',
    tech: ['React.js', 'React Router', 'Context API', 'TMDB API', 'CSS', 'Vercel'],
    github: 'https://github.com/NikhilRautela/MovieMania',
    live: 'https://movie-mania-nikgil.vercel.app/',
    badge: 'Live Demo',
    icon: '🎬',
    color: 'from-violet-500/10 to-purple-500/10',
  },
    {
    title: 'TaskFlow',
    subtitle: 'Full-Stack SaaS Task Manager',
    date: 'Dec 2025',
    description:
      'A production-grade task management SaaS with JWT authentication, bcrypt password hashing, and protected API routes. Built on a PostgreSQL + Prisma ORM schema with full CRUD operations. Frontend deployed on Vercel, backend on Render with automated database migrations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Vercel'],
    github: 'https://github.com/NikhilRautela/taskflow',
    live: 'https://taskflow-sigma-wine.vercel.app',
    badge: 'Live Demo',
    icon: '✅',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
]

export const certifications = [
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM via Coursera',
    link: 'https://coursera.org/share/2cc9753df9a99866467e93ab87dde896',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/iframe/92dd2074b719',
  },
]