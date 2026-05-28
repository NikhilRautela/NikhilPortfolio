export const personalInfo = {
  name: 'Nikhil Singh Rautela',
  role: 'Full-Stack Software Developer',
  tagline: 'Building production-grade applications with React, Node.js & AI integrations.',
  about: [
    "I'm a final-year B.Tech Computer Science student at Graphic Era Hill University, Bhimtal (CGPA: 8.05/10), graduating in May 2026.",
    "I specialize in full-stack web development — designing REST APIs, building React frontends, and integrating third-party services like LLM APIs, Firebase, and payment gateways.",
    "I'm passionate about AI-assisted development, scalable system design, and writing clean, maintainable code that works in production.",
  ],
  email: 'nikhilrautela32@gmail.com',
  github: 'https://github.com/NikhilRautela',
  linkedin: 'https://linkedin.com/in/nikhil-singh-rautela',
  location: 'Haldwani, Uttarakhand, India',
}

export const stats = [
  { value: '3+',   label: 'Projects Shipped' },
  { value: '8.05', label: 'CGPA / 10' },
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
    date: 'March 2026',
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
    title: 'TaskFlow',
    subtitle: 'Full-Stack SaaS Task Manager',
    date: 'May 2026',
    description:
      'A production-grade task management SaaS with JWT authentication, bcrypt password hashing, and protected API routes. Built on a PostgreSQL + Prisma ORM schema with full CRUD operations. Frontend deployed on Vercel, backend on Render with automated database migrations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Vercel'],
    github: 'https://github.com/NikhilRautela/taskflow',
    live: 'https://taskflow-sigma-wine.vercel.app',
    badge: 'Live Demo',
    icon: '✅',
    color: 'from-emerald-500/10 to-teal-500/10',
  },
  {
    title: 'MovieMania',
    subtitle: 'Content-Based Movie Recommendation Engine',
    date: 'October 2025',
    description:
      'An ML-powered recommendation system using TF-IDF vectorisation and cosine similarity across 5,000+ movie plots. Integrated with the TMDB REST API for real-time metadata (posters, genres, ratings) with average response times under 300ms.',
    tech: ['Python', 'Flask', 'TF-IDF', 'Scikit-learn', 'TMDB API', 'Tailwind CSS'],
    github: 'https://github.com/NikhilRautela/Recommendation',
    live: null,
    badge: 'ML Project',
    icon: '🎬',
    color: 'from-violet-500/10 to-purple-500/10',
  },
]

export const certifications = [
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM via Coursera',
  },
  {
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
  },
]
