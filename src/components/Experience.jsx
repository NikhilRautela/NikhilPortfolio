import { useEffect, useRef } from 'react'
import { Briefcase } from 'lucide-react'
import { experience, certifications } from '../data/portfolioData'

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef}
      className="bg-gray-50/50 dark:bg-gray-900/30">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <span className="section-tag">03 — Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Experience cards — takes 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {experience.map((job, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} card`}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg
                                  bg-blue-50 dark:bg-blue-950/50
                                  border border-blue-100 dark:border-blue-900
                                  flex items-center justify-center">
                    <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                          {job.company}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {job.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
                          {job.duration}
                        </span>
                        <div className="mt-0.5">
                          <span className="inline-block text-xs px-2 py-0.5 rounded-full
                                           bg-gray-100 dark:bg-gray-800
                                           text-gray-500 dark:text-gray-400">
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="mt-3 space-y-2">
                      {job.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm
                                               text-gray-600 dark:text-gray-400 leading-relaxed">
                          <span className="text-blue-500 mt-1.5 flex-shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — Certifications + Leadership */}
          <div className="space-y-5">

            {/* Certifications */}
            <div className="reveal reveal-delay-2 card">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4
                             flex items-center gap-2">
                <span className="text-blue-500">🏅</span>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i}
                    className="pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                      {cert.title}
                    </p>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                        {cert.issuer}
                      </p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-500 hover:text-blue-600
                                   dark:hover:text-blue-400 transition-colors"
                      >
                        Verify ↗
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="reveal reveal-delay-3 card">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4
                             flex items-center gap-2">
                <span className="text-blue-500">🎯</span>
                Leadership
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                  Co-organised 3 university-level events for 200+ attendees each.
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                  Led a 4-member team at Esperanza festival managing INR 10,000+ in daily revenue.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}