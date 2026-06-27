import styles from './Pricing.module.css'

const features = [
  'Complete 8-week curriculum',
  'Live instructor-led sessions',
  'Course materials & resources',
  'CPB certification exam prep',
  'Lifetime access to recordings',
  '24/7 student support',
  'Networking community access',
  'Career placement assistance',
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <p className={styles.label}>Pricing</p>
        <h2 className={styles.title}>Simple, Transparent Investment</h2>
        <p className={styles.sub}>Invest once and gain long-term value.</p>

        <div className={styles.card}>
          <div className={styles.topBar} />
          <div className={styles.badge}>Standard Plan — All Inclusive</div>

          <div className={styles.price}>
            <span className={styles.currency}>PKR</span>
            <span className={styles.amount}>19,999</span>
          </div>
          <p className={styles.once}>One-time payment • Flexible installments available</p>

          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f}>
                <span className={styles.check}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.btn}>
            Enroll Today →
          </a>
          <p className={styles.note}>
            Flexible payment plans available on request
          </p>
        </div>
      </div>
    </section>
  )
}
