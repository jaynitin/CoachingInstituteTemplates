import { useInstitute } from '../context/InstituteContext'

export default function Courses() {
  const { courses } = useInstitute()

  return (
    <section id="courses" className="bg-primary text-paper py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">Courses on Offer</p>
        <h2 className="font-display text-3xl font-semibold mb-12">Pick your batch</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.id} className="bg-primary-dark rounded-md p-6 border border-paper/10">
              <h3 className="font-display text-xl font-semibold mb-4">{c.name}</h3>
              <dl className="space-y-2 font-mono text-sm text-paper/80 mb-6">
                <div className="flex justify-between">
                  <dt className="text-paper/50">Duration</dt>
                  <dd>{c.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-paper/50">Batch Size</dt>
                  <dd>{c.batchSize}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-paper/50">Fee</dt>
                  <dd className="text-accent">{c.fee}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-2">
                {c.subjects.map((s) => (
                  <span key={s} className="text-xs bg-paper/10 px-2 py-1 rounded-sm">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
