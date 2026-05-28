import { useEffect, useRef } from 'react'
import { MapPin, GraduationCap, Code2 } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolioData'

export default function About() {
  const sectionRef = useRef(null)

  // Scroll reveal
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
    <section id="about" ref={sectionRef}
      className="bg-gray-50/50 dark:bg-gray-900/30">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <span className="section-tag">01 — About</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — bio */}
          <div className="space-y-5">
            {personalInfo.about.map((para, i) => (
              <p
                key={i}
                className={`reveal reveal-delay-${i + 1} text-gray-600 dark:text-gray-400
                            leading-relaxed text-base`}
              >
                {para}
              </p>
            ))}

            {/* Quick info chips */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-xs font-medium
                               text-gray-600 dark:text-gray-400
                               bg-white dark:bg-gray-800
                               border border-gray-200 dark:border-gray-700
                               px-3 py-1.5 rounded-full">
                <GraduationCap size={13} className="text-blue-500" />
                B.Tech CSE · 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium
                               text-gray-600 dark:text-gray-400
                               bg-white dark:bg-gray-800
                               border border-gray-200 dark:border-gray-700
                               px-3 py-1.5 rounded-full">
                <MapPin size={13} className="text-blue-500" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium
                               text-gray-600 dark:text-gray-400
                               bg-white dark:bg-gray-800
                               border border-gray-200 dark:border-gray-700
                               px-3 py-1.5 rounded-full">
                <Code2 size={13} className="text-blue-500" />
                Full-Stack + AI
              </span>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} card group`}
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400
                                group-hover:scale-105 transition-transform duration-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-500
                                uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}

            {/* Education card */}
            <div className="reveal col-span-2 card">
              <div className="text-xs font-mono text-blue-500 mb-1 uppercase tracking-wider">
                Education
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">
                Graphic Era Hill University
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                B.Tech Computer Science & Engineering · CGPA 8.05/10
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-xs mt-0.5 font-mono">
                Aug 2022 – May 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
