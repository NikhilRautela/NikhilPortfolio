import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const roles = [
  'Full-Stack Developer',
  'React & Node.js Engineer',
  'AI Application Builder',
  'Problem Solver',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex,   setRoleIndex]   = useState(0)
  const [charIndex,   setCharIndex]   = useState(0)
  const [deleting,    setDeleting]    = useState(false)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), 45)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    setDisplayText(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center
                 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Soft glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-blue-500/5 dark:bg-blue-500/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8
                        bg-green-50 dark:bg-green-950/40
                        border border-green-200 dark:border-green-800/50
                        text-green-700 dark:text-green-400
                        text-xs font-medium px-4 py-1.5 rounded-full
                        animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Open to opportunities · May 2026
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold
                       text-gray-900 dark:text-white
                       tracking-tight leading-none mb-5
                       animate-fade-up">
          {personalInfo.name.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="text-blue-600 dark:text-blue-400">
            {personalInfo.name.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-8 mb-6 flex items-center justify-center">
          <p className="font-mono text-lg text-gray-500 dark:text-gray-400">
            {displayText}
            <span className="animate-pulse text-blue-500">|</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto
                      leading-relaxed mb-10 animate-fade-up">
          {personalInfo.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up">
          <a href="#projects" className="btn-primary">
            View My Work
            <ArrowDown size={15} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            <Mail size={15} />
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400
                       hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400
                       hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
          <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">
            📍 {personalInfo.location}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600
                   hover:text-blue-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
