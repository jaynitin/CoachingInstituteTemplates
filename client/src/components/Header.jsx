import { useInstitute } from '../context/InstituteContext'

export default function Header() {
  const { instituteName, logoText, contact } = useInstitute()

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-primary text-paper font-mono font-semibold flex items-center justify-center text-sm">
            {logoText}
          </div>
          <span className="font-display text-lg font-semibold text-primary">{instituteName}</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          <a href="#courses" className="hover:text-primary">Courses</a>
          <a href="#faculty" className="hover:text-primary">Faculty</a>
          <a href="#results" className="hover:text-primary">Results</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <a
          href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
          className="text-sm font-medium bg-highlight text-paper px-4 py-2 rounded-sm hover:opacity-90"
        >
          WhatsApp Us
        </a>
      </div>
    </header>
  )
}
