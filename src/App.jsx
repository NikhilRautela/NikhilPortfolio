import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950
                         border-t border-gray-100 dark:border-gray-800
                         py-6 px-6 text-center">
        <p className="text-xs font-mono text-gray-400 dark:text-gray-600">
          Designed & built by{' '}
          <span className="text-blue-500">Nikhil Singh Rautela</span>
          {' '}· React + Vite + Tailwind CSS · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
