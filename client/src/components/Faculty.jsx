import { useInstitute } from '../context/InstituteContext'

export default function Faculty() {
  const { faculty } = useInstitute()

  return (
    <section id="faculty" className="max-w-6xl mx-auto px-6 py-20">
      <p className="font-mono text-xs tracking-widest text-highlight uppercase mb-3">Faculty</p>
      <h2 className="font-display text-3xl font-semibold text-primary mb-12">Who's on the board</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {faculty.map((f) => (
          <div key={f.name} className="border-t-2 border-accent pt-4">
            <p className="font-display text-lg font-semibold text-primary">{f.name}</p>
            <p className="text-sm text-highlight font-medium">{f.subject}</p>
            <p className="text-sm text-muted mt-1">{f.qualification}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
