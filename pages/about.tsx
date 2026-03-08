import Head from 'next/head';
import { motion, useReducedMotion } from 'framer-motion';

const ROLE_TRACKS = [
  {
    role: 'Product Manager',
    desc: 'How to lead teams effectively, communicating with non-profits and more.',
  },
  {
    role: 'Tech Lead',
    desc: 'How to lead technically, advanced Git, CI/CD, and more.',
  },
  {
    role: 'Developer',
    desc: 'Learning our tech stack — Next.js, TypeScript, NoSQL/SQL.',
  },
  {
    role: 'Designer',
    desc: 'Creating lo-fi, mid-fi and hi-fi designs within Figma.',
  },
];

export default function AboutUs() {
  const reduceMotion = useReducedMotion();

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <Head>
        <title>About Us - Hack4Impact Cal Poly</title>
      </Head>

      <main className="overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32">
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle, #0B6DBB 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full opacity-20"
            style={{
              background:
                'radial-gradient(circle, #065798 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <motion.div
            className="relative mx-auto max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] sm:p-14"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.22em] text-theme-accent sm:text-sm"
              variants={fadeUp}
            >
              Who we are
            </motion.p>

            <motion.h1
              className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
              variants={fadeUp}
            >
              About Us
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-theme-body sm:text-lg"
              variants={fadeUp}
            >
              Hack4Impact is a student-led organization dedicated to using
              technology for social good. We believe in the power of code to
              create positive change in our communities.
            </motion.p>

            <motion.div className="mt-8 flex justify-center gap-4" variants={fadeUp}>
              <a
                href="#nonprofits"
                className="rounded-full border border-theme-border bg-[var(--surface-glass)] px-5 py-2.5 text-sm text-theme-body transition-all duration-300 hover:bg-[var(--surface-glass-hover)] hover:border-theme-divider hover:text-theme-heading hover:shadow-card hover:-translate-y-0.5"
              >
                Non-profits
              </a>
              <a
                href="#students"
                className="rounded-full border border-theme-border bg-[var(--surface-glass)] px-5 py-2.5 text-sm text-theme-body transition-all duration-300 hover:bg-[var(--surface-glass-hover)] hover:border-theme-divider hover:text-theme-heading hover:shadow-card hover:-translate-y-0.5"
              >
                Students
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Non-profit process ── */}
        <section id="nonprofits" className="relative scroll-mt-20 px-6 py-16 sm:py-24 md:px-8">
          <motion.div
            className="mx-auto max-w-7xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-center text-xs font-medium uppercase tracking-[0.2em] text-theme-accent sm:text-sm"
              variants={fadeUp}
            >
              For non-profits
            </motion.p>
            <motion.h2
              className="mx-auto mt-3 max-w-lg text-center text-3xl tracking-tight sm:text-4xl"
              variants={fadeUp}
            >
              How we work with you
            </motion.h2>

            <div className="relative mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-10">
              {[
                {
                  step: '01',
                  title: 'Apply / Get Contacted',
                  desc: 'Reach out to us or we reach out to you. We partner with local and national non-profits each year.',
                },
                {
                  step: '02',
                  title: 'Talk to Us',
                  desc: 'We sit down to understand your mission, your pain points, and how technology can make your work easier.',
                },
                {
                  step: '03',
                  title: 'Application with Support',
                  desc: 'Our team builds your project with continuous feedback, delivering a product tailored to your needs.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="relative"
                  variants={fadeUp}
                >
                  <div className="absolute inset-px rounded-2xl bg-theme-card" />
                  <div className="relative flex flex-col items-center rounded-2xl p-8 text-center sm:p-10">
                    <span className="text-3xl font-bold text-theme-accent opacity-30">{item.step}</span>
                    <h3
                      className="mt-3 text-lg tracking-tight text-theme-heading"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />

                  {/* Arrow — absolute so it doesn't affect layout */}
                  {i < 2 && (
                    <>
                      {/* Down arrow between cards on mobile */}
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-theme-faint lg:hidden" aria-hidden="true">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
                        </svg>
                      </span>
                      {/* Right arrow between cards on desktop */}
                      <span className="absolute top-1/2 -right-7 hidden -translate-y-1/2 text-theme-faint lg:block" aria-hidden="true">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Example projects */}
            <motion.div className="mt-16" variants={fadeUp}>
              <h3
                className="text-center text-lg tracking-tight text-theme-heading"
                style={{ fontFamily: 'Sofia Pro Medium' }}
              >
                What we build
              </h3>
              <div className="mx-auto mt-6 flex flex-wrap justify-center gap-3">
                {[
                  'Volunteer Management Systems',
                  'Scheduling Platforms',
                  'Event Coordination Tools',
                  'Data Dashboards & Trackers',
                  'Member & Donor Portals',
                  'Interactive Maps & Directories',
                  'Job Boards',
                  'Web Scrapers & Aggregators',
                ].map((project) => (
                  <span
                    key={project}
                    className="rounded-full border border-theme-border bg-[var(--surface-glass)] px-4 py-2 text-sm text-theme-body"
                  >
                    {project}
                  </span>
                ))}
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
                  + Custom Solutions
                </span>
              </div>
              <p className="mt-4 text-center text-xs text-theme-faint">
                Yes, these are all real projects — and we&apos;re always building more.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── What to expect ── */}
        <section id="students" className="relative scroll-mt-20 px-6 py-16 sm:py-24 md:px-8">
          <motion.div
            className="mx-auto max-w-7xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.p
              className="text-center text-xs font-medium uppercase tracking-[0.2em] text-theme-accent sm:text-sm"
              variants={fadeUp}
            >
              Student experience
            </motion.p>
            <motion.h2
              className="mx-auto mt-3 max-w-lg text-center text-3xl tracking-tight sm:text-4xl"
              variants={fadeUp}
            >
              What to expect as a student?
            </motion.h2>

            {/* 3-column grid */}
            <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {/* Card — Social */}
              <motion.div className="group relative" variants={fadeUp}>
                <div className="absolute inset-px rounded-2xl bg-theme-card" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                      style={{ background: '#EEF7FF' }}
                      aria-hidden="true"
                    >
                      🤝
                    </span>
                    <h3
                      className="text-xl tracking-tight text-theme-heading"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
                    >
                      Social
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-theme-muted">
                    We connect initiative-driven and passionate individuals
                    together.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-theme-muted">
                    We host team task activities, hikes, bonfires and an
                    annual
                    {' '}
                    <strong className="font-medium text-theme-body">
                      banquet
                    </strong>
                    {' '}
                    to celebrate a year of hard work.
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />
              </motion.div>

              {/* Card — Learnings */}
              <motion.div className="group relative" variants={fadeUp}>
                <div className="absolute inset-px rounded-2xl bg-theme-card" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                      style={{ background: '#EEF7FF' }}
                      aria-hidden="true"
                    >
                      📚
                    </span>
                    <h3
                      className="text-xl tracking-tight text-theme-heading"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
                    >
                      Learnings
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-theme-muted">
                    We expect no previous experience. Every year we host
                    multiple bootcamps open for all students.
                  </p>

                  {/* 2x2 role cards */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {ROLE_TRACKS.map((track) => (
                      <div
                        key={track.role}
                        className="rounded-xl border border-theme-border p-4 transition-shadow duration-300 hover:shadow-card"
                      >
                        <p
                          className="text-sm font-medium text-theme-accent"
                          style={{ fontFamily: 'Sofia Pro Medium' }}
                        >
                          {track.role}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-theme-muted">
                          {track.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />
              </motion.div>

              {/* Card — Application */}
              <motion.div
                className="group relative md:col-span-2 lg:col-span-1"
                variants={fadeUp}
              >
                <div className="absolute inset-px rounded-2xl bg-theme-card" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                      style={{ background: '#EEF7FF' }}
                      aria-hidden="true"
                    >
                      🚀
                    </span>
                    <h3
                      className="text-xl tracking-tight text-theme-heading"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
                    >
                      Application
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-theme-muted">
                    The best part.
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      'Every year we partner with 7–10 non-profits. Some returning, some new.',
                      'These projects streamline processes for these non-profits and make their lives easier.',
                      'We always try to meet with local non-profits in person and get to know their mission personally through volunteering.',
                    ].map((text) => (
                      <div key={text} className="flex gap-3">
                        <span className="mt-1.5 block h-1.5 min-w-1.5 rounded-full bg-theme-accent shrink-0" />
                        <p className="text-sm leading-relaxed text-theme-muted">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
