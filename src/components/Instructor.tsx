import styles from './Instructor.module.css'

const certs = [
  'Senior Operations Manager',
  'BSCS in Artificial Intelligence',
  'Revenue Cycle Management Specialist',
  '5+ Years Healthcare RCM Experience',
]

export default function Instructor() {
  return (
    <section className={styles.section} id="instructor">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.card}>
            <div className={styles.avatar}>MA</div>
            <h3>Muhammad Abbas</h3>
            <p className={styles.cardTitle}>RCM Specialist & CPB-Certified Instructor</p>
            <div className={styles.certs}>
              {certs.map((c) => (
                <div key={c} className={styles.certItem}>
                  <span className={styles.certDot} />
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bio}>
            <p className={styles.label}>Your Instructor</p>
            <h2>
              Learn From a<br />Real Practitioner
            </h2>
            <p>
              Muhammad Abbas is not just a teacher — he is an active RCM specialist working with real healthcare institutions. His unique blend of AI and billing gives you access to some of the fastest-growing skills in the industry.
            </p>
            <p>
              His methodology is practical and results-driven: he applies classroom concepts to real billing software so you can become job-ready immediately, along with your certificate.
            </p>
            <blockquote className={styles.quote}>
              <p>
                &ldquo;My mission is to empower healthcare professionals with knowledge and
                skills needed for exceptional revenue cycle management. Every student becomes
                part of our community of excellence.&rdquo;
              </p>
              <cite>— Muhammad Abbas, Instructor</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
