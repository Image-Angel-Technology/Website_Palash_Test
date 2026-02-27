import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import bbcLogo from 'figma:asset/d3113ec4d6ed0333aa824650d8045cad21e2f08e.png';
import glamourLogo from 'figma:asset/c0657163dde1dc33240b27413c46c2c92bd3fc52.png';
import guardianLogo from 'figma:asset/b285b74e87cc8cb6d67797644f1dfea406d23136.png';

const enterEasing = [0, 0, 0.2, 1];

const mediaOutlets = [
  { 
    name: 'BBC', 
    logo: bbcLogo,
    url: 'https://www.bbc.com/audio/play/m002pptl'
  },
  { 
    name: 'Glamour', 
    logo: glamourLogo,
    url: 'https://www.glamourmagazine.co.uk/'
  },
  { 
    name: 'The Guardian', 
    logo: guardianLogo,
    url: 'https://www.theguardian.com/technology/2026/feb/07/campaigners-call-stronger-protection-against-ai-generated-explicit-imagery'
  },
];

export function InThePressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.h2
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: 'clamp(26px, 3.5vw, 32px)',
            fontWeight: 800,
            color: '#221f1f',
          }}
        >
          In the Press.
        </motion.h2>

        <motion.p
          className="text-center mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing, delay: 0.1 }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 400,
            color: '#6e6c6a',
            lineHeight: 1.6,
            maxWidth: '700px',
          }}
        >
          Image Angel's work has been covered by national and international
          media, and our founder has advised on legislation at the highest
          levels of UK government.
        </motion.p>

        {/* Media Logo Bar */}
        <div
          className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-10 md:gap-16"
        >
          {mediaOutlets.map((outlet, i) => (
            <MediaLogo 
              key={outlet.name} 
              name={outlet.name} 
              logo={outlet.logo}
              url={outlet.url}
              delay={i * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaLogo({ 
  name, 
  logo, 
  url, 
  delay 
}: { 
  name: string; 
  logo: string;
  url: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: enterEasing, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '48px',
        padding: '8px 16px',
        filter: hovered ? 'grayscale(0) opacity(1)' : 'grayscale(1) opacity(0.6)',
        transition: 'filter 350ms ease',
        cursor: 'pointer',
      }}
    >
      <img 
        src={logo} 
        alt={name}
        style={{
          maxHeight: '48px',
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </motion.a>
  );
}