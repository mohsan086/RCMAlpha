import styles from './Footer.module.css'

const links = [
  { href: '#why-choose', label: 'Why Us' },
  { href: '#course', label: 'Course' },
  { href: '#instructor', label: 'Instructor' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/logo1.png" alt="RCMAlpha logo" className={styles.logoImage} />
          <p className={styles.tagline}>
            Pakistan&apos;s leading Revenue Cycle<br />
            Management training center.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Explore</h3>
          <nav className={styles.nav}>
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>

        <div className={styles.section}>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.contact}>
            <a href="tel:+923127846016">+92 312 7846016</a>
            <a href="mailto:rcmalpha@gmail.com">rcmalpha@gmail.com</a>
            <span>Rawalpindi, Pakistan</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 RCMAlpha. All rights reserved.</p>
      </div>
    </footer>
  )
}
