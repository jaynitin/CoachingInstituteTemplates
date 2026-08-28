import { useInstitute } from '../context/InstituteContext'

export default function Hero() {
  const { instituteName, city, hero } = useInstitute()

  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-mono text-xs tracking-widest text-highlight uppercase mb-4">
          {city} · Est. coaching
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
          {hero.headline}
        </h1>
        <p className="text-muted text-lg mb-8 max-w-md">{hero.subhead}</p>
        <div className="flex gap-4 mb-10">
          <a href="#contact" className="bg-primary text-paper px-6 py-3 rounded-sm font-medium hover:bg-primary-dark">
            Book a Demo Class
          </a>
          <a href="#courses" className="border border-ink/20 px-6 py-3 rounded-sm font-medium hover:border-primary">
            View Courses
          </a>
        </div>
        <div className="flex gap-8">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-2xl font-semibold text-primary">{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Signature element: an admit-card / rank-card ticket */}
      <div className="relative">
        <div className="bg-primary text-paper rounded-md shadow-xl overflow-hidden rotate-[-2deg] max-w-sm mx-auto">
          <div className="perforated h-4 bg-primary-dark" />
          <div className="p-6 font-mono">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] tracking-widest text-paper/60 uppercase">Rank Card</p>
                <p className="text-sm font-semibold">{instituteName}</p>
              </div>
              <span className="bg-accent text-primary-dark text-[10px] font-semibold px-2 py-1 rounded-sm uppercase">
                Verified
              </span>
            </div>
            <div className="mb-6">
              <p className="text-4xl font-semibold text-accent">{hero.rankBadge}</p>
              <p className="text-xs text-paper/70 mt-1">{hero.rankExam}</p>
            </div>
            <div className="border-t border-paper/20 pt-4 text-[11px] text-paper/60 flex justify-between">
              <span>Batch: Alpha 2026</span>
              <span>Roll No. 0142</span>
            </div>
          </div>
          <div className="perforated h-4 bg-primary-dark" />
        </div>
      </div>
    </section>
  )
}
