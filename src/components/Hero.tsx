import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bg} />
      <div className={styles.grid} />

      <div className={styles.ecg} aria-hidden="true">
        <svg viewBox="0 0 1200 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <polyline
            points="0,40 100,40 120,40 130,10 140,70 150,20 160,55 170,40 400,40 420,40 430,15 440,65 450,18 460,50 470,40 700,40 720,40 730,12 740,68 750,15 760,52 770,40 1000,40 1020,40 1030,14 1040,66 1050,17 1060,51 1070,40 1200,40"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          CPB Accredited Training Program
        </div>

        <h1>
          Become a{' '}
          <span className={styles.accent}>Certified Professional</span>{' '}
          Medical Biller
        </h1>

        <p className={styles.sub}>
          Pakistan&apos;s #1 Revenue Cycle Management training program — transform your healthcare career with CPB certification.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>
            Enroll Now →
          </a>
          <a href="#course" className={styles.btnGhost}>
            View Curriculum
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { num: '500+', label: 'Certified Professionals' },
            { num: '98%', label: 'Exam Success Rate' },
            { num: '5+', label: 'Years Experience' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
