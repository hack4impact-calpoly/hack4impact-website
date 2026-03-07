import Head from 'next/head';
import { type CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Star = {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};

const stars: Star[] = [
  { id: 1, top: '10%', left: '8%', size: 2, opacity: 0.55, duration: 3.4, delay: 0.2, driftX: 4, driftY: -2 },
  { id: 2, top: '14%', left: '22%', size: 3, opacity: 0.9, duration: 2.8, delay: 1.1, driftX: -3, driftY: 1 },
  { id: 3, top: '18%', left: '34%', size: 1.5, opacity: 0.6, duration: 3.8, delay: 0.9, driftX: 2, driftY: 2 },
  { id: 4, top: '11%', left: '47%', size: 2.5, opacity: 0.78, duration: 3.1, delay: 0.4, driftX: -2, driftY: -1 },
  { id: 5, top: '8%', left: '58%', size: 1.5, opacity: 0.52, duration: 4, delay: 1.8, driftX: 3, driftY: 0 },
  { id: 6, top: '17%', left: '69%', size: 3.5, opacity: 0.86, duration: 2.9, delay: 1.2, driftX: -4, driftY: 2 },
  { id: 7, top: '13%', left: '78%', size: 1, opacity: 0.48, duration: 3.6, delay: 0.6, driftX: 2, driftY: -2 },
  { id: 8, top: '20%', left: '88%', size: 2, opacity: 0.72, duration: 3.2, delay: 2.1, driftX: -2, driftY: 1 },
  { id: 9, top: '26%', left: '13%', size: 1, opacity: 0.5, duration: 3.9, delay: 1.3, driftX: 2, driftY: -1 },
  { id: 10, top: '30%', left: '26%', size: 2.5, opacity: 0.82, duration: 2.7, delay: 0.1, driftX: -1, driftY: 2 },
  { id: 11, top: '24%', left: '40%', size: 1.5, opacity: 0.64, duration: 3.5, delay: 1.7, driftX: 4, driftY: 1 },
  { id: 12, top: '28%', left: '54%', size: 2, opacity: 0.73, duration: 3.3, delay: 0.8, driftX: -3, driftY: -2 },
  { id: 13, top: '22%', left: '66%', size: 4, opacity: 0.92, duration: 2.6, delay: 1.4, driftX: 2, driftY: 2 },
  { id: 14, top: '27%', left: '77%', size: 1.5, opacity: 0.61, duration: 4.1, delay: 2, driftX: -2, driftY: 0 },
  { id: 15, top: '33%', left: '90%', size: 2, opacity: 0.58, duration: 3.7, delay: 0.5, driftX: 1, driftY: -2 },
  { id: 16, top: '6%', left: '18%', size: 2.5, opacity: 0.75, duration: 3, delay: 1.6, driftX: -2, driftY: 1 },
  { id: 17, top: '4%', left: '31%', size: 1, opacity: 0.42, duration: 4.2, delay: 0.7, driftX: 3, driftY: -1 },
  { id: 18, top: '3%', left: '44%', size: 3, opacity: 0.84, duration: 2.9, delay: 1.9, driftX: -4, driftY: 2 },
  { id: 19, top: '5%', left: '59%', size: 1.5, opacity: 0.57, duration: 3.8, delay: 0.3, driftX: 2, driftY: 1 },
  { id: 20, top: '7%', left: '71%', size: 2, opacity: 0.69, duration: 3.4, delay: 1, driftX: -2, driftY: -2 },
  { id: 21, top: '2%', left: '84%', size: 1, opacity: 0.44, duration: 4, delay: 1.5, driftX: 1, driftY: 1 },
  { id: 22, top: '15%', left: '9%', size: 2, opacity: 0.66, duration: 3.2, delay: 0.2, driftX: 3, driftY: -1 },
  { id: 23, top: '9%', left: '93%', size: 3.5, opacity: 0.88, duration: 2.8, delay: 1.8, driftX: -3, driftY: 2 },
  { id: 24, top: '1%', left: '37%', size: 1.5, opacity: 0.54, duration: 3.7, delay: 0.9, driftX: 2, driftY: -2 },
  { id: 25, top: '12%', left: '51%', size: 2.5, opacity: 0.8, duration: 3.1, delay: 1.2, driftX: -2, driftY: 1 },
  { id: 26, top: '16%', left: '64%', size: 1, opacity: 0.47, duration: 4.3, delay: 0.4, driftX: 4, driftY: 0 },
  { id: 27, top: '21%', left: '75%', size: 2, opacity: 0.63, duration: 3.6, delay: 1.1, driftX: -1, driftY: -1 },
  { id: 28, top: '19%', left: '87%', size: 3, opacity: 0.91, duration: 2.7, delay: 1.7, driftX: 2, driftY: 2 },
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.72,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <Head>
        <title>Hack4Impact</title>
        <meta
          name="description"
          content="Hack4Impact builds thoughtful software that helps nonprofits advance their missions."
        />
        <link
          rel="preload"
          as="image"
          href="/assets/illustrations/landing/complete_no_stars.png"
        />
      </Head>

      <main className="overflow-x-hidden">
        {/* Hero — illustration + text overlay, fills the viewport */}
        <section
          className="relative min-h-screen w-full overflow-hidden"
          style={{
            backgroundImage:
              'url(/assets/illustrations/landing/complete_no_stars.png)',
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center, center',
          }}
        >
          {/* Stars overlaying the illustration */}
          <div className="absolute inset-0 z-20" aria-hidden="true">
            {stars.map((star) => {
              const starStyle: CSSProperties & {
                '--drift-x': string;
                '--drift-y': string;
              } = {
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDuration: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                '--drift-x': `${star.driftX}px`,
                '--drift-y': `${star.driftY}px`,
                backgroundColor: 'rgba(247, 244, 238, 0.98)',
                boxShadow: '0 0 14px rgba(255, 255, 255, 0.22)',
              };

              return (
                <span
                  key={star.id}
                  className="animate-twinkle absolute block rounded-full"
                  style={starStyle}
                />
              );
            })}
          </div>
          {/* Shooting stars */}
          <div className="absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
            <span className="animate-shoot absolute top-[6%] left-[70%] h-[1px] w-[80px] rotate-[215deg] rounded-full bg-gradient-to-r from-white/90 to-transparent shadow-[0_0_6px_2px_rgba(255,80,80,0.6)]" style={{ animationDelay: '1s' }} />
            <span className="animate-shoot absolute top-[10%] left-[40%] h-[1px] w-[60px] rotate-[220deg] rounded-full bg-gradient-to-r from-white/80 to-transparent shadow-[0_0_6px_2px_rgba(255,80,80,0.5)]" style={{ animationDelay: '5s' }} />
            <span className="animate-shoot absolute top-[4%] left-[85%] h-[1px] w-[90px] rotate-[210deg] rounded-full bg-gradient-to-r from-white/90 to-transparent shadow-[0_0_8px_3px_rgba(255,60,60,0.7)]" style={{ animationDelay: '9s' }} />
            <span className="animate-shoot absolute top-[14%] left-[55%] h-[1px] w-[70px] rotate-[225deg] rounded-full bg-gradient-to-r from-white/80 to-transparent shadow-[0_0_6px_2px_rgba(255,80,80,0.5)]" style={{ animationDelay: '13s' }} />
          </div>
          {/* Text content at the top of the screen */}
          <div className="relative z-30 flex items-start justify-center px-4 pt-4 sm:px-5 sm:pt-8 md:px-5 md:pt-10 lg:px-6 lg:pt-14">
            <motion.div
              className="mx-auto max-w-5xl text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.p
                className="m-0 text-xs font-medium uppercase tracking-[0.24em] text-[#c9c6bf] sm:text-sm"
                variants={itemVariants}
              >
                Technology in service of mission
              </motion.p>

              <motion.h1
                className="mt-4 text-5xl leading-[0.96] text-white sm:mt-5 sm:text-6xl md:text-7xl lg:text-[6.25rem]"
                variants={itemVariants}
                style={{
                  letterSpacing: '-0.03em',
                  textShadow: '0 10px 40px rgba(6, 10, 29, 0.38)',
                }}
              >
                <span className="block">Every Non-Profit</span>
                <span className="block">Has A Mission.</span>
              </motion.h1>

              <motion.p
                className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#d9d6cf] sm:mt-8 sm:text-lg md:max-w-2xl"
                variants={itemVariants}
              >
                We build thoughtful, dependable software for nonprofits doing meaningful work,
                giving teams tools that feel as intentional as the missions they support.
              </motion.p>

              <motion.div className="mt-8 sm:mt-10" variants={itemVariants}>
                <a
                  href="#contact"
                  className="inline-block rounded-full border border-white/20 bg-white/10 px-7 py-2.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/18 sm:px-8 sm:py-3 sm:text-base"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Scroll-revealed card */}
        <section className="relative z-10 -mt-24 px-4 pb-32 sm:px-5 md:px-5 lg:px-6">

          <motion.div
            className="mx-auto mt-24 max-w-3xl rounded-[28px] border border-white/12 bg-white/8 px-6 py-5 text-center backdrop-blur-[2px] sm:mt-32 sm:px-8 sm:py-6"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className="mt-3 text-3xl leading-tight text-white sm:text-4xl md:text-5xl"
              style={{
                letterSpacing: '-0.03em',
                textShadow: '0 10px 30px rgba(6, 10, 29, 0.28)',
              }}
            >
              <span className="text-[#f6c56f]">Hack4Impact</span>
              {' '}
              makes the software to support it.
            </h2>
          </motion.div>

          {/* Trusted by section */}
          <motion.div
            className="mx-auto mt-24 max-w-4xl text-center sm:mt-32"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 sm:text-sm"
            >
              Trusted by over 30+ non-profits
            </p>

            {/* Scrolling logo bar */}
            <div className="relative mt-8 overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#161b52] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#161b52] to-transparent" />

              <div className="animate-scroll-x flex w-max items-center gap-14">
                {[0, 1].map((set) => (
                  <div key={set} className="flex items-center gap-14">
                    <div className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
                      <img className="max-h-full max-w-full object-contain opacity-70" src="/assets/nonprofits/ecologistics.png" alt="Ecologistics" />
                    </div>
                    <div className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
                      <img className="max-h-full max-w-full object-contain opacity-70" src="/assets/nonprofits/habitat.png" alt="Habitat for Humanity" />
                    </div>
                    <div className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
                      <span className="text-sm font-medium tracking-wide text-white/40">Kid&apos;s First Initiative</span>
                    </div>
                    <div className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
                      <img className="max-h-full max-w-full object-contain opacity-70" src="/assets/nonprofits/ecoslo.png" alt="ECOSLO" />
                    </div>
                    <div className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
                      <img className="max-h-full max-w-full object-contain opacity-70" src="/assets/nonprofits/paso-food-coop.png" alt="Paso Robles Food Co-Op" />
                    </div>
                    <div className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
                      <span className="text-sm font-medium tracking-wide text-white/40">SLO Beaver Brigade</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
