'use client'

import { useState } from 'react'
import styles from './Contact.module.css'
import { ICONS, type IconName } from './Icons'

const contactInfo: { icon: IconName; value: string }[] = [
  { icon: 'phone', value: '+92 312 7846016' },
  { icon: 'mail', value: 'rcmalpha@gmail.com' },
  { icon: 'location', value: 'Rawalpindi, Pakistan' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json()
      if (!response.ok) {
        setError(result.error || 'Something went wrong. Please try again.')
      } else {
        setSubmitted(true)
      }
    } catch (err) {
      setError('Unable to send message. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.info}>
            <p className={styles.label}>Get in Touch</p>
            <h2>Start Your Journey Today</h2>
            <p>
              Do you have any questions about the program? We are here to help.
              Reach out and begin your RCM career.
            </p>
            <div className={styles.contactItems}>
              {contactInfo.map((c) => (
                <div key={c.value} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{ICONS[c.icon]}</div>
                  <span>{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you! We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName" name="firstName" type="text"
                      placeholder="Ahmed" value={form.firstName}
                      onChange={handleChange} required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName" name="lastName" type="text"
                      placeholder="Khan" value={form.lastName}
                      onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="ahmed@email.com" value={form.email}
                    onChange={handleChange} required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+92 3XX XXXXXXX" value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Tell us about the program — when should it start, or do you have any questions?"
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
