import { useEffect, useRef } from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef}
      className="bg-white dark:bg-gray-950">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <span className="section-tag">04 — Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle max-w-xl">
            A selection of projects I've designed, built, and shipped — ranging from
full-stack SaaS platforms to AI-integrated and React-based applications.
          </p>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full mt-4" />
        </div>

        {/* Project cards grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`reveal reveal-delay-${i + 1}
                         flex flex-col rounded-xl overflow-hidden
                         border border-gray-100 dark:border-gray-800
                         bg-white dark:bg-gray-900
                         hover:border-blue-500/40 dark:hover:border-blue-500/40
                         hover:shadow-xl hover:shadow-blue-500/5
                         transition-all duration-300 group`}
            >
              {/* Card image / banner area */}
              <div className={`relative h-44 bg-gradient-to-br ${project.color}
                               dark:opacity-80 flex items-center justify-center
                               border-b border-gray-100 dark:border-gray-800
                               overflow-hidden`}>
                {/* Large emoji icon */}
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>

                {/* Subtle dot grid overlay */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(#6b7280 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Badge */}
                <span className="absolute top-3 right-3
                                 text-xs font-mono font-medium px-2.5 py-1 rounded-md
                                 bg-white/80 dark:bg-gray-900/80
                                 text-blue-700 dark:text-blue-300
                                 border border-blue-100 dark:border-blue-900
                                 backdrop-blur-sm">
                  {project.badge}
                </span>

                {/* Date */}
                <span className="absolute bottom-3 left-3
                                 text-xs font-mono text-gray-500 dark:text-gray-500">
                  {project.date}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Title & subtitle */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1
                               group-hover:text-blue-600 dark:group-hover:text-blue-400
                               transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed
                               flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4
                                border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium
                               text-gray-500 dark:text-gray-400
                               hover:text-blue-600 dark:hover:text-blue-400
                               transition-colors"
                  >
                    <Github size={14} />
                    Source Code
                  </a>

                  {project.live && (
                    <>
                      <span className="text-gray-200 dark:text-gray-700">|</span>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium
                                   text-gray-500 dark:text-gray-400
                                   hover:text-blue-600 dark:hover:text-blue-400
                                   transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </>
                  )}

                  {/* Arrow — decorative right align */}
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-gray-300 dark:text-gray-700
                               group-hover:text-blue-500 transition-colors duration-200"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://github.com/NikhilRautela"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={15} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
