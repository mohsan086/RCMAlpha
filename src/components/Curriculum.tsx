import styles from './Curriculum.module.css'
import { ICONS, type IconName } from './Icons'

const weeks = [
  { week: '01', title: 'Intro to Medical Billing', tags: ['Fundamentals', 'Healthcare Overview', 'Career Paths'] },
  { week: '02', title: 'HIPAA Basics', tags: ['Privacy Laws', 'Security Standards', 'Compliance'] },
  { week: '03', title: 'ICD / CPT / HCPCS Coding', tags: ['Code Selection', 'Documentation', 'Standards'] },
  { week: '04', title: 'Claim Submission', tags: ['Electronic Claims', 'Paper Claims', 'Charge Entry'] },
  { week: '05', title: 'Denials & Appeals', tags: ['Denial Analysis', 'Appeal Process', 'Prevention'] },
  { week: '06', title: 'Eligibility Verification', tags: ['Insurance Check', 'Benefits', 'Patient Responsibility'] },
  { week: '07', title: 'Payment Posting', tags: ['EOB Processing', 'Reconciliation', 'Adjustments'] },
  { week: '08', title: 'Software Practice', tags: ['Live Software', 'Real Scenarios', 'Hands-on'] },
]

const meta: { icon: IconName; label: string; value: string }[] = [
  { icon: 'clock', label: 'Duration', value: '8 Weeks' },
  { icon: 'globe', label: 'Format', value: 'Online + Live' },
  { icon: 'medal', label: 'Certification', value: 'CPB' },
  { icon: 'users', label: 'Class Size', value: 'Max 20' },
]

export default function Curriculum() {
  return (
    <section className={styles.section} id="course">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Course Curriculum</p>
            <h2 className={styles.title}>
              8-Week Medical Billing<br />Course
            </h2>
          </div>
          <div className={styles.metaRow}>
            {meta.map((m) => (
              <div key={m.label} className={styles.metaPill}>
                <span>{ICONS[m.icon]}</span>
                <strong>{m.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {weeks.map((w) => (
            <div key={w.week} className={styles.card}>
              <div className={styles.weekNum}>Week {w.week}</div>
              <h4>{w.title}</h4>
              <div className={styles.tags}>
                {w.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
