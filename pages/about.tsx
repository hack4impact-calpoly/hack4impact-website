import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";

const ROLE_TRACKS = [
  {
    role: "Product Manager",
    desc: "How to lead teams effectively, communicating with non-profits and more.",
  },
  {
    role: "Tech Lead",
    desc: "How to lead technically, advanced Git, CI/CD, and more.",
  },
  {
    role: "Developer",
    desc: "Learning our tech stack — Next.js, TypeScript, NoSQL/SQL.",
  },
  {
    role: "Designer",
    desc: "Creating lo-fi, mid-fi and hi-fi designs within Figma.",
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
        <section className="relative overflow-hidden section-gradient px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-28 md:pb-32">
          <div
            className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #0B6DBB 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-[320px] w-[320px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, #065798 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <motion.div
            className="relative mx-auto max-w-3xl text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.22em] text-blue-light sm:text-sm"
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
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
              variants={fadeUp}
            >
              Hack4Impact is a student-led organization dedicated to using
              technology for social good. We believe in the power of code to
              create positive change in our communities.
            </motion.p>
          </motion.div>
        </section>

        {/* ── What to expect ── */}
        <section className="relative px-6 py-16 sm:py-24 md:px-8">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.p
              className="text-center text-xs font-medium uppercase tracking-[0.2em] text-blue-light sm:text-sm"
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

            {/* Bento grid */}
            <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
              {/* Card — Social (spans 1 col, 2 rows on lg) */}
              <motion.div
                className="group relative lg:row-span-2"
                variants={fadeUp}
              >
                <div className="absolute inset-px rounded-2xl bg-white lg:rounded-l-3xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-[calc(1.5rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <span
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                      style={{ background: "#EEF7FF" }}
                      aria-hidden="true"
                    >
                      🤝
                    </span>
                    <h3
                      className="text-xl tracking-tight text-gray-900"
                      style={{ fontFamily: "Sofia Pro Medium" }}
                    >
                      Social
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      We connect initiative-driven and passionate individuals
                      together.
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-gray-500">
                      We host team task activities, hikes, bonfires and an
                      annual{" "}
                      <strong className="font-medium text-gray-700">
                        banquet
                      </strong>{" "}
                      to celebrate a year of hard work.
                    </p>
                  </div>
                  <div className="relative min-h-[28rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-8 top-8 bottom-0 overflow-hidden rounded-t-xl shadow-card-lg">
                      <img
                        src="/assets/about/social.webp"
                        alt="Hack4Impact members at a bonfire social event"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card lg:rounded-l-3xl" />
              </motion.div>

              {/* Card — Learnings (spans 2 cols on lg) */}
              <motion.div
                className="group relative lg:col-span-2"
                variants={fadeUp}
              >
                <div className="absolute inset-px rounded-2xl bg-white lg:rounded-tr-3xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-tr-[calc(1.5rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <span
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                      style={{ background: "#EEF7FF" }}
                      aria-hidden="true"
                    >
                      📚
                    </span>
                    <h3
                      className="text-xl tracking-tight text-gray-900"
                      style={{ fontFamily: "Sofia Pro Medium" }}
                    >
                      Learnings
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      We expect no previous experience. Every year we host
                      multiple bootcamps open for all students.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {ROLE_TRACKS.map((track) => (
                        <div
                          key={track.role}
                          className="rounded-xl border border-gray-100 p-4 transition-shadow duration-300 hover:shadow-card"
                        >
                          <p
                            className="text-sm font-medium text-blue"
                            style={{ fontFamily: "Sofia Pro Medium" }}
                          >
                            {track.role}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500">
                            {track.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-8 max-lg:pb-10 sm:px-10 lg:pb-2">
                    <img
                      src="/assets/about/learnings.webp"
                      alt="Students collaborating during a Hack4Impact bootcamp"
                      className="w-full max-lg:max-w-xs rounded-xl shadow-card transition-transform duration-700 ease-out group-hover:scale-102"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card lg:rounded-tr-3xl" />
              </motion.div>

              {/* Card — Application (spans 2 cols on lg) */}
              <motion.div
                className="group relative lg:col-span-2"
                variants={fadeUp}
              >
                <div className="absolute inset-px rounded-2xl bg-white lg:rounded-br-3xl" />
                <div className="relative flex h-full overflow-hidden rounded-2xl flex-col lg:flex-row-reverse lg:rounded-br-[calc(1.5rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10 lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:pt-0">
                    <span
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                      style={{ background: "#EEF7FF" }}
                      aria-hidden="true"
                    >
                      🚀
                    </span>
                    <h3
                      className="text-xl tracking-tight text-gray-900"
                      style={{ fontFamily: "Sofia Pro Medium" }}
                    >
                      Application
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      The best part.
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Every year we partner with 7–10 non-profits. Some returning, some new.",
                        "These projects streamline processes for these non-profits and make their lives easier.",
                        "We always try to meet with local non-profits in person and get to know their mission personally through volunteering.",
                      ].map((text) => (
                        <div key={text} className="flex gap-3">
                          <span className="mt-1 block h-1.5 min-w-1.5 rounded-full bg-blue-light flex-shrink-0" />
                          <p className="text-sm leading-relaxed text-gray-500">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-1 items-center max-lg:py-6 px-8 sm:px-10 lg:w-1/2 lg:px-0">
                    <img
                      src="/assets/about/application.webp"
                      alt="Hack4Impact team volunteering with a local non-profit"
                      className="w-full object-cover shadow-card transition-transform duration-700 ease-out group-hover:scale-102 rounded-xl lg:rounded-none lg:h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card lg:rounded-br-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
