import { useEffect, useRef } from 'react'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/NikhilRautela',
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'nikhil-singh-rautela',
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
]

export default function Contact() {
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
    <section id="contact" ref={sectionRef}
      className="bg-gray-50/50 dark:bg-gray-900/30">
      <div className="section-container">

        {/* Header */}
        <div className="reveal mb-12 text-center">
          <span className="section-tag">05 — Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            I'm actively looking for full-time roles, internships, and freelance opportunities.
            Whether you have a project in mind or just want to connect — reach out.
          </p>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">

          {/* Left — CTA card */}
          <div className="reveal card text-center py-10">
            <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-950/50
                            border border-blue-100 dark:border-blue-900
                            flex items-center justify-center mx-auto mb-5">
              <Send size={22} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Open to Opportunities
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              My inbox is always open. Whether it's a job offer,
              collaboration, or just a hello — I'll get back to you.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary w-full justify-center"
            >
              <Mail size={15} />
              Send an Email
            </a>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 font-mono">
              {personalInfo.email}
            </p>
          </div>

          {/* Right — contact links */}
          <div className="space-y-4">
            {contactLinks.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="card flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg
                                      bg-blue-50 dark:bg-blue-950/50
                                      border border-blue-100 dark:border-blue-900
                                      flex items-center justify-center
                                      group-hover:bg-blue-600 group-hover:border-blue-600
                                      transition-all duration-200">
                        <Icon size={16}
                          className="text-blue-600 dark:text-blue-400
                                     group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-400 dark:text-gray-500
                                      uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300
                                      group-hover:text-blue-600 dark:group-hover:text-blue-400
                                      transition-colors truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="card flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg
                                      bg-blue-50 dark:bg-blue-950/50
                                      border border-blue-100 dark:border-blue-900
                                      flex items-center justify-center">
                        <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-400 dark:text-gray-500
                                      uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 truncate">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
