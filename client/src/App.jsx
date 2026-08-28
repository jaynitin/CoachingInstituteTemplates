import { InstituteProvider } from './context/InstituteContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Faculty from './components/Faculty'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

export default function App() {
  return (
    <InstituteProvider>
      <Header />
      <Hero />
      <Courses />
      <Faculty />
      <Testimonials />
      <Contact />
      <footer className="text-center text-xs text-muted py-8 border-t border-ink/10">
        Built by <a className="font-bold text-decoration-line: underline text-red-500" href="https://flarent.online/">Flarent Labs</a>
      </footer>
    </InstituteProvider>
  )
}
