import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef } from 'react';
import {
  Check,
  ChevronDown,
  Scale,
  Shield,
  AlertTriangle,
  Fingerprint,
  ScanSearch,
  UserCheck,
} from 'lucide-react';
import { duration, easing, stagger, distance, shouldReduceMotion, spring } from '../config/motion';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';

export default function SolutionsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'platforms' | 'creators'>('platforms');

  useEffect(() => {
    document.title = 'Content Protection Solutions — Image Angel Forensic Watermarking';
    if (location.hash === '#creators') setActiveTab('creators');
    else setActiveTab('platforms');
  }, [location.hash]);

  const handleTabChange = (tab: 'platforms' | 'creators') => {
    setActiveTab(tab);
    navigate(`/solutions#${tab}`, { replace: true });
  };

  return (
    <>
      <SEO
        title="Content Protection Solutions"
        description="Individual-level content traceability that meets regulatory requirements — without surveillance, storage overhead, or changes to your user experience."
        path="/solutions"
      />
      
      <SolutionsHero activeTab={activeTab} setActiveTab={handleTabChange} />
      <AnimatePresence mode="wait">
        {activeTab === 'platforms' ? (
          <motion.div
            key="platforms"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: easing.enterEase, delay: 0.05 }}
          >
            <PlatformsTab />
          </motion.div>
        ) : (
          <motion.div
            key="creators"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.35, ease: easing.enterEase, delay: 0.05 }}
          >
            <CreatorsTab />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  HERO                                               */
/* ═══════════════════════════════════════════════════ */
function SolutionsHero({ activeTab, setActiveTab }: { activeTab: 'platforms' | 'creators'; setActiveTab: (tab: 'platforms' | 'creators') => void }) {
  const reduceMotion = shouldReduceMotion();
  
  return (
    <section style={{ backgroundColor: '#dededb', padding: 'var(--hero-pad-top) 0 var(--hero-pad-bottom)', marginTop: 'var(--nav-height)' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
        <motion.h1
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.medium / 1000, ease: easing.enterEase }}
          style={{ fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#221f1f', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}
        >
          Forensic Protection for Platforms.
        </motion.h1>
        <motion.p
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay: 0.05 }}
          className="max-w-[700px] mx-auto"
          style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.65, marginBottom: '32px' }}
        >
          Individual-level content traceability that meets regulatory requirements — without surveillance, storage overhead, or changes to your user experience.
        </motion.p>
        
        {/* Tab Selector with Sliding Pill Indicator */}
        <motion.div 
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay: 0.1 }}
          className="inline-flex w-full sm:w-auto relative"
          style={{ 
            backgroundColor: '#d6d2cd', 
            borderRadius: '14px', 
            padding: '4px', 
            gap: '4px' 
          }}
        >
          {/* Sliding active indicator */}
          <motion.div
            layoutId="activeTabIndicator"
            style={{
              position: 'absolute',
              top: '4px',
              bottom: '4px',
              left: activeTab === 'platforms' ? '4px' : '50%',
              right: activeTab === 'platforms' ? '50%' : '4px',
              backgroundColor: '#221f1f',
              borderRadius: '12px',
              zIndex: 0,
            }}
            transition={reduceMotion ? { duration: 0 } : spring.gentleSpring}
          />
          
          {(['platforms', 'creators'] as const).map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{ 
                fontFamily: "'Aktiv Grotesk', sans-serif", 
                fontSize: '14px', 
                fontWeight: 600, 
                padding: '10px 32px', 
                borderRadius: '12px', 
                border: 'none', 
                backgroundColor: 'transparent',
                color: activeTab === tab ? '#ffffff' : '#221f1f', 
                transition: `color ${duration.fast}ms ease`,
                minHeight: '48px', 
                cursor: 'pointer', 
                flex: '1',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {tab === 'platforms' ? 'For Platforms' : 'For Creators'}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  PLATFORMS TAB                                      */
/* ═══════════════════════════════════════════════════ */
function PlatformsTab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.02 }); // Reduced from 0.05 to 0.02 for faster triggering

  return (
    <div ref={ref}>
      {/* Regulatory Context */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: easing.enterEase }}
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: 'clamp(26px, 3.5vw, 32px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '24px',
                }}
              >
                The Regulatory Landscape Has Changed.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}
              >
                {[
                  { icon: Scale, text: "UK Online Safety Act — protection measures required now." },
                  { icon: Shield, text: "EU Digital Services Act — mandatory risk assessments." },
                  { icon: AlertTriangle, text: "Significant penalties apply to intimate content platforms." },
                  { icon: Fingerprint, text: "Forensic watermarking is the cited proportionate standard." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                    <item.icon size={20} color="#5e8c7b" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#b5aea6' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.2 }}
                style={{
                  backgroundColor: '#eaf0f4',
                  borderLeft: '3px solid #5b7b8d',
                  borderRadius: '12px',
                  padding: '24px',
                  marginTop: 'auto',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '16px',
                    fontWeight: 400,
                    color: '#221f1f',
                    lineHeight: 1.6,
                  }}
                >
                  Individual-level traceability. No personal data collected. No behaviour monitored.
                </p>
              </motion.div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.25 }}
                style={{
                  backgroundColor: '#f85838',
                  borderRadius: '12px',
                  padding: 'clamp(32px, 4vw, 48px)',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  £18M
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  Maximum Penalty Per Breach
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  UK Online Safety Act, enforceable now.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.3 }}
                style={{
                  backgroundColor: '#221f1f',
                  borderRadius: '12px',
                  padding: '48px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                    fontSize: '32px',
                    fontWeight: 900,
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}
                >
                  #1 Reason
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  Creators Leave Platforms
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  No protection means no trust. No trust means no retention.
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <FeatureCard
              title="Invisible Forensic Marks."
              description="Unique watermark per session. Applied at access. Invisible to users. Zero impact on load times or delivery pipeline."
            />
            <FeatureCard
              title="Resilient Extraction."
              description="Leaked file in, forensic data out. Works after screenshots, compression, cropping, screen recording. 90%+ confidence."
            />
            <FeatureCard
              title="Forensic Attribution."
              description="Returns platform ID, session ID, timestamp. Identifies the leak. Forensic-grade. Compliance-ready. Enforceable."
            />
          </div>
        </div>
      </section>

      {/* Technical Performance */}
      <section style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-10 md:mb-16"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            Technical Performance.
          </h2>
          
          <div className="max-w-[700px] mx-auto mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
            {[
              "Downstream of your CDN — no pipeline changes",
              "Zero storage — overlays applied, never stored",
              "Server-side only — no client JavaScript",
              "No PII — opaque session identifiers only",
              "Non-blocking — Lighthouse scores unaffected",
              "Fails silently — content delivers if API unreachable"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Check size={18} color="#5e8c7b" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#221f1f' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard
              value="<100ms"
              label="Overlay Latency"
              context="Typically materially lower"
            />
            <StatCard
              value="0"
              label="Personal Data Stored"
              context="Privacy by design"
            />
            <StatCard
              value="~450KB"
              label="Overlay File Size"
              context="Cached, not stored"
            />
            <StatCard
              value="1,000/min"
              label="API Rate Limit"
              context="Production tier"
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-10 md:mb-16"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            Before and After Integration.
          </h2>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #221f1f' }}>
                  <th
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#221f1f',
                      padding: '16px 24px',
                      textAlign: 'left',
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#221f1f',
                      padding: '16px 24px',
                      textAlign: 'left',
                    }}
                  >
                    With Image Angel
                  </th>
                  <th
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#8f877d',
                      padding: '16px 24px',
                      textAlign: 'left',
                    }}
                  >
                    Without
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Regulatory compliance',
                    withIA: 'Proactive traceability. Demonstrable to regulators.',
                    without: 'Reactive takedowns only.',
                  },
                  {
                    feature: 'Leak accountability',
                    withIA: 'Identifies the leak. Forensic-grade.',
                    without: 'No attribution possible.',
                  },
                  {
                    feature: 'Creator retention',
                    withIA: 'Protection creators can verify. A reason to stay.',
                    without: 'Creators leave. Revenue follows.',
                    highlightWithout: true
                  },
                  {
                    feature: 'Integration',
                    withIA: 'Standard REST API. Live in weeks.',
                    without: 'Custom builds. Uncertain timelines.',
                  },
                  {
                    feature: 'Storage cost',
                    withIA: 'Zero. Overlays applied, never stored.',
                    without: 'Ongoing DRM overhead.',
                  },
                  {
                    feature: 'User experience',
                    withIA: 'Invisible. Zero performance impact.',
                    without: 'Visible marks. Degraded content.',
                  },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e5e5' }}>
                    <td
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#221f1f',
                        padding: '20px 24px',
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#221f1f',
                        padding: '20px 24px',
                      }}
                    >
                      {row.withIA}
                    </td>
                    <td
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 400,
                        color: row.highlightWithout ? 'rgba(248,88,56,0.7)' : '#8f877d',
                        padding: '20px 24px',
                      }}
                    >
                      {row.without}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {[
              { feature: 'Regulatory compliance', withIA: 'Proactive traceability. Demonstrable to regulators.', without: 'Reactive takedowns only.' },
              { feature: 'Leak accountability', withIA: 'Identifies the leak. Forensic-grade.', without: 'No attribution possible.' },
              { feature: 'Creator retention', withIA: 'Protection creators can verify. A reason to stay.', without: 'Creators leave. Revenue follows.', highlightWithout: true },
              { feature: 'Integration', withIA: 'Standard REST API. Live in weeks.', without: 'Custom builds. Uncertain timelines.' },
              { feature: 'Storage cost', withIA: 'Zero. Overlays applied, never stored.', without: 'Ongoing DRM overhead.' },
              { feature: 'User experience', withIA: 'Invisible. Zero performance impact.', without: 'Visible marks. Degraded content.' },
            ].map((row, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e5e5e5', paddingBottom: '16px' }}>
                <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, color: '#221f1f', marginBottom: '8px' }}>{row.feature}</div>
                <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#221f1f', marginBottom: '4px' }}>{row.withIA}</div>
                <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '13px', fontWeight: 400, color: row.highlightWithout ? 'rgba(248,88,56,0.7)' : '#8f877d' }}>{row.without}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Timeline */}
      <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            From Agreement to Production.
          </h2>
          <p
             className="text-center mb-12"
             style={{
               fontFamily: "'Aktiv Grotesk', sans-serif",
               fontSize: 'clamp(16px, 2vw, 18px)',
               fontWeight: 400,
               color: '#6e6c6a',
             }}
          >
            Most integrations are live within 4–6 weeks.
          </p>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div
              className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] z-0"
              style={{ 
                borderTop: '1px dashed #d6d2cd',
              }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
              {[
                {
                  badge: 'DAY 1',
                  title: 'NDA & Service Agreement',
                  body: 'Standard commercial terms.',
                },
                {
                  badge: 'DAY 2–3',
                  title: 'API Credentials & Staging',
                  body: 'Keys and sandbox issued.',
                },
                {
                  badge: 'WEEK 1–2',
                  title: 'Integration',
                  body: 'Your team implements. We support.',
                },
                {
                  badge: 'WEEK 2–3',
                  title: 'Testing & Validation',
                  body: 'Verified in staging.',
                },
                {
                  badge: 'WEEK 3–4',
                  title: 'Go-Live',
                  body: 'Production with monitoring.',
                },
                {
                  badge: 'ONGOING',
                  title: 'Support',
                  body: 'Named contact. Extraction on demand.',
                }
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center text-center lg:block"
                >
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'rgba(248,88,56,0.1)',
                      color: '#f85838',
                      fontSize: '11px',
                      fontWeight: 700,
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      marginBottom: '8px',
                      position: 'relative',
                      zIndex: 20
                    }}
                  >
                    {step.badge}
                  </div>
                  <div 
                    style={{
                      width: '12px', 
                      height: '12px', 
                      borderRadius: '50%', 
                      backgroundColor: '#f85838',
                      margin: '0 auto 20px',
                      position: 'relative',
                      zIndex: 20
                    }} 
                  />
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      padding: '20px',
                      width: '100%',
                      minHeight: '130px',
                      textAlign: 'left'
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#221f1f',
                        marginBottom: '4px',
                        lineHeight: 1.2
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#6e6c6a',
                        lineHeight: 1.5
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Case */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2 className="text-center mb-8" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
            Protection Is a Retention Strategy.
          </h2>
          <p className="text-center max-w-[800px] mx-auto" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.65 }}>
            Creators who don't feel protected leave. They take their audience and their revenue with them. Forensic watermarking gives them a verifiable reason to stay.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            See It Work. Request a Demo.
          </h2>
          <p
            className="mb-8 max-w-[600px] mx-auto"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(16px, 2vw, 18px)',
              fontWeight: 400,
              color: '#b5aea6',
              lineHeight: 1.6,
            }}
          >
            30 minutes. We watermark an image, extract the attribution, and answer every question.
          </p>
          <Link to="/contact">
            <button
              className="w-full sm:w-auto transition-all duration-300"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#ffffff',
                padding: '16px 48px',
                borderRadius: '12px',
                backgroundColor: '#f85838',
                border: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6a4d';
                e.currentTarget.style.boxShadow =
                  '0 0 32px rgba(248,88,56,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f85838';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              REQUEST A DEMO
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ══════════════════════════════════════════════════ */
/*  CREATORS TAB                                       */
/* ══════════════════════════════════════════════════ */
function CreatorsTab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <div ref={ref}>
      {/* Section 1: The Reality */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[800px] mx-auto px-5 md:px-8 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: easing.enterEase }} style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f', marginBottom: '24px' }}>
            Your Content Was Shared.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.1 }} style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.65, marginBottom: '24px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Leaked content can reach hundreds of sites within hours. Screenshots bypass DRM. Cropping defeats visible watermarks. Takedown notices remove copies from compliant sites, but the harm is already done.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.2 }} style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 700, color: '#221f1f', marginBottom: '24px' }}>
            The person responsible is never identified. Until Now.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: easing.enterEase, delay: 0.3 }} style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Image Angel embeds invisible forensic marks in your content — unique to every viewer. If it leaks, the marks identify the account that accessed it before it was shared.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Founder Quote (moved up) */}
      <section style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="max-w-[900px] mx-auto pl-4 md:pl-6 lg:pl-8" style={{ borderLeft: '3px solid #f85838' }}>
            <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400, fontStyle: 'italic', color: '#221f1f', lineHeight: 1.6, marginBottom: '16px' }}>
              "I built Image Angel because the tools I needed as a survivor didn't exist. I wanted to make sure nobody else had to go through what I went through without a way to hold someone accountable."
            </p>
            <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 600, color: '#8f877d', marginBottom: '16px' }}>
              — Madelaine Thomas, Founder & CEO
            </div>
            <Link to="/about" style={{ fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: 'clamp(11px, 1.5vw, 12px)', fontWeight: 300, color: '#f85838', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
              HER STORY &gt;&gt;&gt;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: How It Protects You */}
      <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2 className="text-center mb-10 md:mb-16" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
            How It Protects You.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Shield, title: 'Invisible. Embedded. Traceable.', body: "Every time someone views your content, unique forensic marks are embedded in the image. They don't change how it looks. They can't be removed. Only Image Angel and the platform can extract the data." },
              { icon: ScanSearch, title: 'Leaked? We Investigate.', body: 'Send us the leaked file. We can start an investigation. We can extract the data. We can get the wheels of justice turning. Works after screenshots, cropping, compression, and re-encoding.' },
              { icon: UserCheck, title: 'A Session. A Timestamp. Evidence.', body: "Not a guess. Not a suspicion. A specific session, a specific moment — forensic-grade evidence that can support enforcement through your platform or legal proceedings." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <step.icon size={40} color="#f85838" strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#221f1f', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: WordPress Plugin */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[800px] mx-auto px-5 md:px-8 text-center">
          <h2 className="mb-8" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
            Protection is Easy. And accessible.
          </h2>
          <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>
            If your site runs on WordPress, install the plugin, connect your API key, done. Every piece of content on your site is forensically protected — images, videos, and live streams. No code. No configuration. No technical knowledge.
          </p>
          <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '13px', fontWeight: 500, color: '#221f1f', marginTop: '12px', marginBottom: '24px' }}>
            Already used by creators protecting thousands of images daily.
          </p>
          <Link to="/contact">
            <button className="w-full sm:w-auto transition-all duration-300" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#ffffff', padding: '14px 32px', minHeight: '48px', borderRadius: '12px', backgroundColor: '#f85838', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff6a4d'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f85838'; e.currentTarget.style.boxShadow = 'none'; }}>
              GET THE PLUGIN
            </button>
          </Link>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[800px] mx-auto px-5 md:px-8">
          <h2 className="text-center mb-10 md:mb-16" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
            Questions? Answered.
          </h2>
          {[
            { q: 'Will it change how my content looks?', a: 'The marks are embedded in the image, but they are completely invisible to viewers. Your content looks, loads, and performs exactly as it does today.' },
            { q: 'What happens if my content leaks?', a: 'You report it to us. We analyse the file, extract the forensic data, and send you an attribution report — which account accessed it, when, and from which platform. 90%+ confidence.' },
            { q: 'What does it cost?', a: "If your platform already uses Image Angel, you're covered — no extra cost to you. For independent sites on WordPress, contact us for current rates. Self-serve pricing for creators is coming soon." },
            { q: 'Does it work on video?', a: 'Yes. Image and video. The video watermark uses a rotating overlay that maintains traceability across the entire viewing session.' },
            { q: 'What about screenshots and cropping?', a: "Survives all of it. Screenshots, cropping, compression, resizing, messaging app re-encoding. The marks are in the visual structure, not metadata." },
            { q: 'Is my personal information in the watermark?', a: 'No. Opaque session identifiers only. No names, emails, IP addresses, or device IDs. Nothing that identifies you personally.' },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

      {/* Section 6: Lead Capture */}
      <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[480px] mx-auto px-5 md:px-8 text-center">
          <h3 className="mb-4" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 24px)', fontWeight: 700, color: '#221f1f' }}>
            Be First.
          </h3>
          <p className="mb-8" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>
            Self-serve creator accounts are launching soon. No platform needed. Leave your email — we'll notify you before anyone else.
          </p>
          {!emailSubmitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setEmailSubmitted(true); }} className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email address" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, padding: '12px 16px', borderRadius: '12px', border: '1px solid #d6d2cd', backgroundColor: '#ffffff', color: '#221f1f', flex: 1, height: '44px' }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#f85838'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(248,88,56,0.15)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#d6d2cd'; e.currentTarget.style.boxShadow = 'none'; }} />
              <button type="submit" className="transition-all duration-300" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#ffffff', padding: '12px 28px', borderRadius: '12px', backgroundColor: '#f85838', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', height: '44px', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff6a4d'; e.currentTarget.style.boxShadow = '0 0 32px rgba(248,88,56,0.35)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f85838'; e.currentTarget.style.boxShadow = 'none'; }}>
                GET EARLY ACCESS
              </button>
            </form>
          ) : (
            <div style={{ backgroundColor: '#e6f0ec', borderRadius: '12px', padding: '24px', border: '1px solid #b3d4c7' }}>
              <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 500, color: '#3a7d5c' }}>Thank you! We'll let you know when self-serve accounts launch.</p>
            </div>
          )}
        </div>
      </section>

      {/* Section 7: CTA Banner */}
      <section style={{ backgroundColor: '#f85838', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <h2 style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#ffffff', marginBottom: '0' }}>
            Your Content. Your Proof. Your Move.
          </h2>
          <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '16px' }}>
            Talk to our team. We'll show you how it works in 15 minutes.
          </p>
          <Link to="/contact">
            <button className="w-full sm:w-auto transition-all duration-200" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#ffffff', padding: '16px 48px', minHeight: '48px', borderRadius: '12px', backgroundColor: '#221f1f', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#221f1f'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              GET PROTECTED NOW
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════ */
/*  SHARED SUB-COMPONENTS                              */
/* ═══════════════════════════════════════════════════ */
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '32px',
      }}
    >
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '20px',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#6e6c6a',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function StatCard({ value, label, context }: { value: string; label: string; context: string }) {
  return (
    <div className="text-center">
      <div style={{ fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: value === '0' ? '#221f1f' : '#f85838', lineHeight: 1, marginBottom: '8px' }}>{value}</div>
      <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(13px, 1.5vw, 16px)', fontWeight: 700, color: '#221f1f', marginBottom: '4px' }}>{label}</div>
      <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(12px, 1.3vw, 14px)', fontWeight: 400, color: '#8f877d' }}>{context}</div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e5e5e5' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: '#221f1f', paddingRight: '16px' }}>{question}</span>
        <ChevronDown size={20} color="#8f877d" style={{ flexShrink: 0, transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>
      {open && (
        <div style={{ paddingBottom: '20px' }}>
          <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>{answer}</p>
        </div>
      )}
    </div>
  );
}