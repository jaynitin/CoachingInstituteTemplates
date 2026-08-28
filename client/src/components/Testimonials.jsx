import { useInstitute } from '../context/InstituteContext'

export default function Testimonials() {
  const { testimonials } = useInstitute()

  return (
    <section id="results" className="bg-ink/[0.03] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-highlight uppercase mb-3">Results</p>
        <h2 className="font-display text-3xl font-semibold text-primary mb-12">In their own words</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="bg-paper border border-ink/10 rounded-md p-6">
              <p className="text-ink/90 mb-4">"{t.quote}"</p>
              <footer className="font-mono text-sm">
                <span className="font-semibold text-primary">{t.name}</span>
                <span className="text-muted"> · {t.result}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
