import styles from './Careers.module.css'

const roles = [
  {
    icon: '💼',
    title: 'RCM Specialist',
    desc: 'Manage the patient revenue cycle with major healthcare providers and make high-impact decisions.',
  },
  {
    icon: '🏥',
    title: 'Care Coordinator',
    desc: 'Lead interdisciplinary teams and coordinate comprehensive patient care plans.',
  },
  {
    icon: '📋',
    title: 'Program Manager',
    desc: 'Oversee RCM programs within healthcare organizations and ensure quality compliance.',
  },
  {
    icon: '🎯',
    title: 'RCM Consultant',
    desc: 'Provide expert guidance to healthcare institutions on RCM implementation and optimization.',
  },
]

const stats = [
  { num: '95%', label: 'Employment Rate (6 months)' },
  { num: '65K+', label: 'Average Starting Salary' },
  { num: '50+', label: 'Partner Employers' },
]

export default function Careers() {
  return (
    <section className={styles.section} id="careers">
      <div className={styles.container}>
        <p className={styles.label}>Career Opportunities</p>
        <h2 className={styles.title}>Where Our Graduates Work</h2>
        <p className={styles.sub}>
          After CPB certification, these rewarding career paths are available to you.
        </p>

        <div className={styles.grid}>
          {roles.map((r) => (
            <div key={r.title} className={styles.card}>
              <span className={styles.icon}>{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
