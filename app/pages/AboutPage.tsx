import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { ChevronDown, Linkedin } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';
import founderPhoto from 'figma:asset/6ba50b1d4eb53459ae4fc4b6b4af14efdfbbf55b.png';
import enoughLogo from 'figma:asset/bd933f227eec97abf1303dcd3e9116afdba4ba6b.png';
import nnedvLogo from 'figma:asset/fde8b33ad9cb93eebc39073a4739d3b5bb2dec2b.png';
import safetyNetLogo from 'figma:asset/2c75d09f8c22673c73192ff33859cb2624ffe81e.png';
import ourWaveLogo from 'figma:asset/8fde8b66cb9003bd399872f226514823c57fa520.png';
import dsitLogo from 'figma:asset/5d85e4a96d74ce786fe90ce049d082c96f8221a4.png';
import digitalIntimacyCoalitionLogo from 'figma:asset/7b4d5207f291b44e677bf1299278762414161820.png';
import ofcomLogo from 'figma:asset/54a6fcd318172f755dc863bc9d8534eb024a00b0.png';

const enterEasing = [0, 0, 0.2, 1] as const;

const teamMembers = [
  {
    name: 'Madelaine Thomas',
    role: 'Founder & CEO',
    bio: 'Survivor advocate. Built the product.',
    linkedIn: '#',
  },
];

const advocacyPartners = [
  { name: 'Refuge', logo: null, url: 'https://refuge.org.uk' },
  { name: 'Not Your Porn', logo: null, url: 'https://notyourporn.com' },
  { name: 'The Josephine Butler Society', logo: null, url: 'https://www.josephinebutlersociety.org' },
  { name: 'illuminate Tech', logo: null, url: 'https://www.illuminatetech.co.uk' },
  { name: 'OSINT', logo: null, url: 'https://www.osint.uk' },
  { name: 'techuk', logo: null, url: 'https://www.techuk.org' },
  { name: 'Women In Cyber', logo: null, url: 'https://womenincyber.wales' },
  { name: 'Stisa', logo: null, url: 'https://stisa.network' },
  { name: 'Lucy Faithfull Foundation', logo: null, url: 'https://www.lucyfaithfull.org.uk' },
  { name: 'SafetyNet', logo: safetyNetLogo, url: 'https://www.techsafety.org' },
  { name: 'NNEDV', logo: nnedvLogo, url: 'https://nnedv.org' },
  { name: 'Our Wave', logo: ourWaveLogo, url: 'https://www.ourwave.org/en' },
  { name: "Everyone's Invited", logo: null, url: 'https://www.everyonesinvited.uk' },
  { name: 'Eiris', logo: null, url: 'https://www.eiris.co' },
  { name: 'Enough', logo: enoughLogo, url: 'https://enough.campaign.gov.uk' },
  { name: 'Digital Intimacy Coalition', logo: digitalIntimacyCoalitionLogo, url: null },
];

const regulatoryPartners = [
  { name: 'Ofcom', logo: ofcomLogo, url: 'https://www.ofcom.org.uk/' },
  { name: 'DSIT', logo: dsitLogo, url: null },
];

/* ───────────────────────── Shared helpers ───────────────────────── */

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: enterEasing, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TeamCard({
  member,
  delay = 0,
}: {
  member: (typeof teamMembers)[0];
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: enterEasing, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid rgba(34,31,31,0.06)',
        transition: 'all 200ms cubic-bezier(0.25, 0.1, 0.25, 1.0)',
        boxShadow: isHovered
          ? '0 8px 24px rgba(0,0,0,0.06)'
          : '0 1px 3px rgba(0,0,0,0.03)',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '20px',
              fontWeight: 700,
              color: '#221f1f',
              marginBottom: '4px',
            }}
          >
            {member.name}
          </h3>
          <div
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: '11px',
              fontWeight: 300,
              color: '#8f877d',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {member.role}
          </div>
        </div>
        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: '#b5aea6' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#221f1f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#b5aea6';
            }}
          >
            <Linkedin size={18} />
          </a>
        )}
      </div>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '15px',
          fontWeight: 400,
          color: '#6e6c6a',
          lineHeight: 1.6,
        }}
      >
        {member.bio}
      </p>
    </motion.div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function AboutPage() {
  const [teamExpanded, setTeamExpanded] = useState(false);

  /* Single ref for the entire founder story so stagger works as intended */
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, amount: 0.1 });

  useEffect(() => {
    document.title = 'About Image Angel — Built By Someone Who Survived It';
  }, []);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        style={{
          backgroundColor: '#dededb',
          padding: 'var(--hero-pad-top) 0 var(--section-pad-y)',
          marginTop: 'var(--nav-height)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <SEO
            title="About Image Angel"
            description="Technology born from experience. Madelaine Thomas is a survivor of image-based abuse who built the forensic watermarking technology that protects creators and platforms."
            path="/about"
          />
          
          <Breadcrumb items={[{ label: 'About' }]} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: enterEasing }}
            className="mb-6"
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#221f1f',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            Built By Someone Who Survived It.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: enterEasing, delay: 0.1 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.65,
              maxWidth: '700px',
            }}
          >
            How Personal Crisis Built a Tech Solution.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ FOUNDER STORY ═══════════════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: 'calc(var(--section-pad-y) * 0.3) 0 var(--section-pad-y)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8" ref={storyRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Founder Photo — 16:9 on mobile, 4:5 on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={
                storyInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{ duration: 0.7, ease: enterEasing }}
            >
              <style>{`
                .founder-photo { aspect-ratio: 16 / 9; }
                @media (min-width: 1024px) {
                  .founder-photo { aspect-ratio: 4 / 5; }
                }
              `}</style>
              <img
                src={founderPhoto}
                alt="Madelaine Thomas, Founder"
                className="founder-photo w-full rounded-xl object-cover object-[center_top]"
              />
            </motion.div>

            {/* 6-Paragraph Emotional Arc — 600ms stagger */}
            <div
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontWeight: 400,
                color: '#6e6c6a',
                lineHeight: 1.7,
              }}
            >
              {/* P1 — Body LG, 18px. One sentence. Let it land. */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  storyInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: enterEasing, delay: 0.2 }}
                style={{
                  fontSize: '18px',
                  color: '#221f1f',
                  marginBottom: '28px',
                  maxWidth: '680px',
                }}
              >
                Madelaine Thomas is a survivor of image-based abuse.
              </motion.p>

              {/* P2 — Body MD, 16px, 600ms stagger */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  storyInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: enterEasing, delay: 0.8 }}
                style={{
                  fontSize: '16px',
                  marginBottom: '28px',
                }}
              >
                She knows what it's like to have intimate images shared without consent. She knows the helplessness of watching those images travel across the internet — copied, reposted, redistributed — while the person responsible faces no consequences. She knows how it feels to file takedown notices that change nothing, to search for tools that don't exist, to be told that the technology to solve this simply hadn't been built yet.
              </motion.p>

              {/* P3 — Body MD, 16px, 600ms stagger. Three words. Full weight. */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  storyInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: enterEasing, delay: 1.4 }}
                style={{
                  fontSize: '18px',
                  color: '#221f1f',
                  marginBottom: '28px',
                }}
              >
                So she built one.
              </motion.p>

              {/* P4 — Body MD, 16px, 600ms stagger. Pivot to fact. */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  storyInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: enterEasing, delay: 2.0 }}
                style={{
                  fontSize: '16px',
                  marginBottom: '28px',
                }}
              >
                Image Angel embeds invisible forensic marks into every piece of content, every time it's viewed. If that content is leaked, the marks trace it back to the account that accessed it. It doesn't change how content looks. It doesn't slow anything down. It simply means that for the first time, a leak can be investigated with real evidence.
              </motion.p>

              {/* P5 — Body MD, 16px, 600ms stagger. Credibility through association. */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  storyInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: enterEasing, delay: 2.6 }}
                style={{
                  fontSize: '16px',
                  marginBottom: '28px',
                }}
              >
                The technology is now live on production platforms and endorsed by the advocacy organisations and regulatory bodies that define best practice in online safety. StopNCII, the Revenge Porn Helpline, Ofcom, and the UK Department for Science, Innovation and Technology all work with Image Angel — not because the technology is impressive, but because the problem is urgent and the solution works.
              </motion.p>

              {/* P6 — Body MD, 16px, 600ms stagger. Close the loop. */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={
                  storyInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.6, ease: enterEasing, delay: 3.2 }}
                style={{
                  fontSize: '16px',
                }}
              >
                Every feature in the product was designed by someone who understood the problem from the inside. That's not a marketing claim. It's the reason the company exists.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ MISSION ═══════════════════ */}
      <section style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 32px)',
                fontWeight: 800,
                color: '#221f1f',
              }}
            >
              Survivors Believed. Perpetrators Accountable.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="max-w-[700px] mx-auto"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                color: '#6e6c6a',
                lineHeight: 1.65,
              }}
            >
              Everything we build serves one purpose: making sure survivors are believed and the people who harm them are held accountable. Forensic watermarking is our first tool. It won't be our last.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ THE TEAM ═══════════════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <AnimatedSection>
            <h2
              className="text-center mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 32px)',
                fontWeight: 800,
                color: '#221f1f',
              }}
            >
              The People Behind It.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-center max-w-[700px] mx-auto mb-16"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: '#6e6c6a',
                lineHeight: 1.6,
              }}
            >
              Image Angel was founded by Madelaine Thomas and is built by a small team of engineers, commercial operators, and advocates who believe technology should protect people — not just platforms.
            </p>
          </AnimatedSection>

          <div
            className="max-w-[800px] mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {teamMembers
              .slice(0, teamExpanded ? teamMembers.length : 4)
              .map((member, i) => (
                <TeamCard key={member.name} member={member} delay={i * 0.1} />
              ))}
          </div>

          {teamMembers.length > 4 && (
            <AnimatedSection delay={0.2}>
              <div className="text-center mt-10">
                <button
                  onClick={() => setTeamExpanded(!teamExpanded)}
                  className="inline-flex items-center gap-2 transition-colors duration-200"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#6e6c6a',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#221f1f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6e6c6a';
                  }}
                >
                  {teamExpanded ? 'Show Less' : 'View Full Team'}
                  <ChevronDown
                    size={16}
                    style={{
                      transition: 'transform 200ms ease',
                      transform: teamExpanded
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    }}
                  />
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ═══════════════════ PARTNERS ═══════════════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: '0 0 var(--section-pad-y)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <AnimatedSection>
            <h2
              className="text-center mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 32px)',
                fontWeight: 800,
                color: '#221f1f',
              }}
            >
              Who We Work With.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-center max-w-[700px] mx-auto mb-16"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: '#6e6c6a',
                lineHeight: 1.6,
              }}
            >
              These aren't logos on a page. These are the organisations we work with, report to, and are accountable to. Every partnership listed here is active.
            </p>
          </AnimatedSection>

          {/* Advocacy Partners */}
          <AnimatedSection delay={0.15}>
            <div className="mb-14">
              <h3
                className="text-center mb-8"
                style={{
                  fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#8f877d',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Advocacy Partners
              </h3>
              <div
                className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-6 md:gap-12 max-w-[1200px] mx-auto"
              >
                {advocacyPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: '#221f1f' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#221f1f';
                    }}
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        style={{
                          width: 'clamp(100px, 20vw, 140px)',
                          height: 'auto',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          fontFamily: "'Aktiv Grotesk', sans-serif",
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#221f1f',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {partner.name}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Regulatory Bodies */}
          <AnimatedSection delay={0.2}>
            <div>
              <h3
                className="text-center mb-8"
                style={{
                  fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#8f877d',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Regulatory Bodies
              </h3>
              <div
                className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-8 md:gap-16 max-w-[600px] mx-auto"
              >
                {regulatoryPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: '#221f1f' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#221f1f';
                    }}
                  >
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        style={{
                          width: 'clamp(100px, 20vw, 140px)',
                          height: 'auto',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          fontFamily: "'Aktiv Grotesk', sans-serif",
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#221f1f',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {partner.name}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section style={{ backgroundColor: '#f85838', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2
              className="mb-8"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              This Work Matters. Join Us.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Link to="/contact">
              <button
                className="transition-all duration-200"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#ffffff',
                  padding: '16px 48px',
                  borderRadius: '12px',
                  backgroundColor: '#221f1f',
                  border: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#221f1f';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                JOIN OUR MISSION
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}