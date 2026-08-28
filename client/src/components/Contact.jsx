import { useState } from 'react'
import { useInstitute } from '../context/InstituteContext'

export default function Contact() {
  const { contact, instituteName } = useInstitute()
  const [form, setForm] = useState({ name: '', phone: '', course: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', phone: '', course: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
      <div>
        <p className="font-mono text-xs tracking-widest text-highlight uppercase mb-3">Admissions</p>
        <h2 className="font-display text-3xl font-semibold text-primary mb-6">
          Enquire at {instituteName}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-ink/20 rounded-sm px-4 py-3 bg-paper"
          />
          <input
            required
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-ink/20 rounded-sm px-4 py-3 bg-paper"
          />
          <input
            placeholder="Course interested in"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="w-full border border-ink/20 rounded-sm px-4 py-3 bg-paper"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-highlight text-paper px-6 py-3 rounded-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Request a Callback'}
          </button>
          {status === 'sent' && <p className="text-sm text-primary">Thanks — we'll call you shortly.</p>}
          {status === 'error' && <p className="text-sm text-highlight">Something went wrong. Try WhatsApp instead.</p>}
        </form>

        <dl className="mt-10 space-y-2 text-sm text-muted font-mono">
          <div>{contact.address}</div>
          <div>{contact.phone}</div>
          <div>{contact.email}</div>
        </dl>
      </div>
      <div className="rounded-md overflow-hidden border border-ink/10 min-h-[300px]">
        <iframe
          title="map"
          src={contact.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ minHeight: '300px', border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  )
}
