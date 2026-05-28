import { useEffect, useRef } from 'react'
import { skills } from '../data/portfolioData'

const categoryIcons = {
  'Languages':       '{ }',
  'Frontend':        '◈',
  'Backend':         '⬡',
  'Databases':       '⊡',
  'AI / ML':         '◉',
  'DevOps & Tools':  '⚙',
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
    <section id="skills" ref={sectionRef}
      className="bg-white dark:bg-gray-950">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12">
          <span className="section-tag">02 — Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`reveal reveal-delay-${(i % 4) + 1} card group`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-blue-500 text-base">
                  {categoryIcons[group.category]}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest
                                 text-gray-500 dark:text-gray-500">
                  {group.category}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core CS concepts strip */}
        <div className="reveal mt-6 card">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="font-mono text-blue-500 text-base">⊞</span>
            <span className="text-xs font-semibold uppercase tracking-widest
                             text-gray-500 dark:text-gray-500">
              Core CS Concepts
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Data Structures & Algorithms', 'Object-Oriented Programming',
              'Operating Systems', 'DBMS', 'System Design', 'Computer Networks'].map(item => (
              <span key={item} className="skill-pill">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
