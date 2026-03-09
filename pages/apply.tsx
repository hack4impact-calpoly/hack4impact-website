import Head from 'next/head';
import { motion, useReducedMotion } from 'framer-motion';

const APPLICATION_CLOSED = true;

export default function Apply() {
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
        <title>Apply - Hack4Impact Cal Poly</title>
      </Head>

      <main className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32">
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #0B6DBB 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #065798 0%, transparent 70%)' }}
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
              Get involved
            </motion.p>

            <motion.h1
              className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
              variants={fadeUp}
            >
              Apply Now
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-theme-body sm:text-lg"
              variants={fadeUp}
            >
              Whether you&apos;re a nonprofit looking for a technology partner or a
              student ready to build for social good — we&apos;d love to hear from
              you.
            </motion.p>

            <motion.div className="mt-8 flex justify-center gap-4" variants={fadeUp}>
              <a
                href="#nonprofit"
                className="rounded-full border border-theme-border bg-[var(--surface-glass)] px-5 py-2.5 text-sm text-theme-body transition-all duration-300 hover:bg-[var(--surface-glass-hover)] hover:border-theme-divider hover:text-theme-heading hover:shadow-card hover:-translate-y-0.5"
              >
                Nonprofit
              </a>
              <a
                href="#student"
                className="rounded-full border border-theme-border bg-[var(--surface-glass)] px-5 py-2.5 text-sm text-theme-body transition-all duration-300 hover:bg-[var(--surface-glass-hover)] hover:border-theme-divider hover:text-theme-heading hover:shadow-card hover:-translate-y-0.5"
              >
                Student
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Nonprofit Section */}
        <section id="nonprofit" className="relative scroll-mt-20 px-6 pb-16 sm:pb-24 md:px-8">
          <motion.div
            className="mx-auto max-w-4xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-center text-xs font-medium uppercase tracking-[0.2em] text-theme-accent sm:text-sm"
              variants={fadeUp}
            >
              For nonprofits
            </motion.p>
            <motion.h2
              className="mx-auto mt-3 max-w-lg text-center text-3xl tracking-tight sm:text-4xl"
              variants={fadeUp}
            >
              Partner with us
            </motion.h2>

            <motion.div className="group relative mt-10" variants={fadeUp}>
              <div className="absolute inset-px rounded-2xl bg-theme-card" />
              <div className="relative rounded-2xl p-8 sm:p-10">
                <p className="text-base leading-relaxed text-theme-body sm:text-lg">
                  We are excited that you are interested in partnering with
                  Hack4Impact to build a solution that will serve you. We have a
                  form below to understand your mission, any problems you currently
                  have and set up some time to talk!
                </p>

                <div className="mt-8">
                  <a
                    href="https://forms.gle/nonprofit-placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border border-theme-border bg-[var(--surface-glass)] px-7 py-3 text-sm font-medium tracking-wide text-theme-heading backdrop-blur-sm transition-all hover:border-theme-divider hover:bg-[var(--surface-glass-hover)] hover:-translate-y-0.5 sm:text-base"
                  >
                    Nonprofit Application Form
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />
            </motion.div>

            {/* What to expect */}
            <div className="relative mt-12 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3 lg:gap-10">
              {[
                {
                  step: '01',
                  title: 'Tell us about yourself',
                  desc: 'Fill out the form so we can learn about your organization, your mission, and the challenges you face.',
                },
                {
                  step: '02',
                  title: 'Have a conversation',
                  desc: 'We\'ll set up a meeting to dive deeper into your needs and explore how technology can help.',
                },
                {
                  step: '03',
                  title: 'We build together',
                  desc: 'Our team works with you throughout the year to deliver a tailored solution — with continuous feedback.',
                },
              ].map((item, i) => (
                <motion.div key={item.step} className="relative" variants={fadeUp}>
                  <div className="absolute inset-px rounded-2xl bg-theme-card" />
                  <div className="relative flex flex-col items-center rounded-2xl p-8 text-center sm:p-10">
                    <span className="text-3xl font-bold text-theme-accent opacity-30">
                      {item.step}
                    </span>
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

                  {i < 2 && (
                    <>
                      <span
                        className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-theme-faint lg:hidden"
                        aria-hidden="true"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
                        </svg>
                      </span>
                      <span
                        className="absolute top-1/2 -right-7 hidden -translate-y-1/2 text-theme-faint lg:block"
                        aria-hidden="true"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="gradient-divider mx-auto max-w-4xl" />

        {/* Student Section */}
        <section id="student" className="relative scroll-mt-20 px-6 py-16 sm:py-24 md:px-8">
          <motion.div
            className="mx-auto max-w-4xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="text-center text-xs font-medium uppercase tracking-[0.2em] text-theme-accent sm:text-sm"
              variants={fadeUp}
            >
              For students
            </motion.p>
            <motion.h2
              className="mx-auto mt-3 max-w-lg text-center text-3xl tracking-tight sm:text-4xl"
              variants={fadeUp}
            >
              Join our team
            </motion.h2>

            <motion.div className="group relative mt-10" variants={fadeUp}>
              <div className="absolute inset-px rounded-2xl bg-theme-card" />
              <div className="relative rounded-2xl p-8 sm:p-10">
                {APPLICATION_CLOSED ? (
                  <>
                    <div className="flex items-start gap-4">
                      <span
                        className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-lg"
                        aria-hidden="true"
                      >
                        📋
                      </span>
                      <div>
                        <h3
                          className="text-lg tracking-tight text-theme-heading"
                          style={{ fontFamily: 'Sofia Pro Medium' }}
                        >
                          Applications are currently closed
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-theme-body sm:text-lg">
                          Unfortunately, applications are closed for this school
                          year, but we will open them up again next Fall!
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-theme-muted">
                      In the meantime, follow us on social media to stay in the
                      loop for when applications reopen.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-base leading-relaxed text-theme-body sm:text-lg">
                      Hi there! Super excited that you are looking to join
                      Hack4Impact — we want to get to know you a little bit more,
                      so please fill out the form below!
                    </p>
                    <div className="mt-8">
                      <a
                        href="https://forms.gle/student-placeholder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full border border-theme-border bg-[var(--surface-glass)] px-7 py-3 text-sm font-medium tracking-wide text-theme-heading backdrop-blur-sm transition-all hover:border-theme-divider hover:bg-[var(--surface-glass-hover)] hover:-translate-y-0.5 sm:text-base"
                      >
                        Student Application Form
                      </a>
                    </div>
                  </>
                )}
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />
            </motion.div>

            {/* Roles preview */}
            <motion.div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4" variants={fadeUp}>
              {[
                { role: 'Product Manager', icon: '📊' },
                { role: 'Tech Lead', icon: '⚙️' },
                { role: 'Developer', icon: '💻' },
                { role: 'Designer', icon: '🎨' },
              ].map((track) => (
                <motion.div key={track.role} className="group relative" variants={fadeUp}>
                  <div className="absolute inset-px rounded-2xl bg-theme-card" />
                  <div className="relative flex flex-col items-center rounded-2xl p-6 text-center">
                    <span className="text-2xl" aria-hidden="true">
                      {track.icon}
                    </span>
                    <p
                      className="mt-3 text-sm font-medium text-theme-heading"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
                    >
                      {track.role}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
