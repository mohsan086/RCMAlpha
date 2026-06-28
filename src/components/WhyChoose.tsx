import styles from './WhyChoose.module.css'
import { ICONS, type IconName } from './Icons'

const features: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'trophy',
    title: 'CPB Accredited',
    desc: 'An internationally recognized Certified Professional Biller credential that dramatically increases your career value.',
  },
  {
    icon: 'brain',
    title: 'Expert Instructor',
    desc: 'Learn from Muhammad Abbas, a specialist in AI-integrated billing with 5+ years of real-world RCM experience.',
  },
  {
    icon: 'laptop',
    title: 'Live + Recorded Sessions',
    desc: 'Join online live classes and enjoy lifetime access to recordings — learn at your own pace without missing anything.',
  },
  {
    icon: 'chart',
    title: '98% Pass Rate',
    desc: 'Benefit from one of the highest certification exam success rates in the industry — our students consistently perform at the top.',
  },
  {
    icon: 'users',
    title: 'Small Cohorts',
    desc: 'With a maximum of 20 students per batch, you receive personalized attention and a strong peer network.',
  },
  {
    icon: 'rocket',
    title: 'Career Support',
    desc: 'Gain job placement assistance and career guidance through a network of 50+ partner employers.',
  },
]

export default function WhyChoose() {
  return (
    <section className={styles.section} id="why-choose">
      <div className={styles.container}>
        <p className={styles.label}>Why RCMAlpha</p>
        <h2 className={styles.title}>
          Industry-Leading Training<br />You Can Trust
        </h2>
        <p className={styles.sub}>
          Real-world curriculum, expert instructors, and proven results — everything in one place.
        </p>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.cardLine} />
              <div className={styles.icon}>{ICONS[f.icon]}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
