import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href="https://api.whatsapp.com/send?phone=923127846016&text=Hi%2C%20Im%20interested%20in%20the%20RCMAlpha%20training%20program."
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
    >
      <span className={styles.icon}>💬</span>
      <span className={styles.label}>WhatsApp</span>
    </a>
  )
}
