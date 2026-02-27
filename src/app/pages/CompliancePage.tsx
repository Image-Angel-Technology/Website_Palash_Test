import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { SEO } from '../components/SEO';

const enterEasing = [0, 0, 0.2, 1];

export default function CompliancePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Compliance & Privacy Architecture — Image Angel';
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Compliance & Privacy Architecture"
        description="Forensic watermarking designed around privacy from the start. No PII. No surveillance. No automated sanctions. Full platform control."
        path="/compliance"
      />

      {/* Hero */}
      <section style={{ backgroundColor: '#f7f6f5', padding: 'var(--hero-pad-top) 0 var(--section-pad-y)', marginTop: 'var(--nav-height)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Breadcrumb items={[{ label: 'Compliance' }]} />
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: enterEasing }} className="text-center mb-6" style={{ fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#221f1f', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Compliance and Privacy Architecture.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: enterEasing, delay: 0.1 }} className="text-center max-w-[700px] mx-auto" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '18px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.65 }}>
            Forensic watermarking designed around privacy from the start. No PII. No surveillance. No automated sanctions. Full platform control.
          </motion.p>
        </div>
      </section>

      {/* Regulatory Landscape */}
      <RegulatoryLandscape />

      {/* Privacy Architecture */}
      <PrivacyArchitecture />

      {/* Safe by Design */}
      <SafeByDesign />

      {/* Compliance Stats */}
      <ComplianceStats />

      {/* CISO Lead Capture */}
      <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="max-w-[480px] mx-auto text-center">
            <h3 className="mb-6" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '24px', fontWeight: 700, color: '#221f1f' }}>
              CISO Technical Summary.
            </h3>
            <p className="mb-6" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>
              A two-page brief covering architecture, privacy model, failure modes, and regulatory mapping. Written for the person who needs to approve this before anyone else can proceed.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email address"
                  style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, padding: '12px 16px', borderRadius: '12px', border: '1px solid #d6d2cd', backgroundColor: '#ffffff', color: '#221f1f', flex: 1, height: '44px', minWidth: '280px', width: '100%', maxWidth: '400px' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#f85838'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(248,88,56,0.15)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#d6d2cd'; e.currentTarget.style.boxShadow = 'none'; }} />
                <button type="submit" className="transition-all duration-300"
                  style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#ffffff', padding: '12px 28px', borderRadius: '12px', backgroundColor: '#f85838', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', height: '44px', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff6a4d'; e.currentTarget.style.boxShadow = '0 0 32px rgba(248,88,56,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f85838'; e.currentTarget.style.boxShadow = 'none'; }}>
                  DOWNLOAD COMPLIANCE BRIEF
                </button>
              </form>
            ) : (
              <div style={{ backgroundColor: '#e6f0ec', borderRadius: '12px', padding: '24px', border: '1px solid #b3d4c7' }}>
                <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 500, color: '#3a7d5c' }}>
                  Thank you! Check your email for the compliance brief.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f85838', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <h2 className="mb-8" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#ffffff' }}>
            Have Compliance Questions? We're Happy to Help.
          </h2>
          <Link to="/contact">
            <button className="transition-all duration-200"
              style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '12px', fontWeight: 600, color: '#ffffff', padding: '16px 48px', borderRadius: '12px', backgroundColor: '#221f1f', border: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#221f1f'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              SPEAK WITH OUR COMPLIANCE TEAM
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

function RegulatoryLandscape() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: enterEasing }} className="mb-8" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
          The Current Regulatory Landscape.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: enterEasing, delay: 0.1 }} className="mb-16 max-w-[800px]" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>
          Three major frameworks now require platforms to take proactive measures against image-based abuse. All are enforceable and carry significant financial penalties.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RegCard title="UK Online Safety Act" description="Platforms must demonstrate proportionate measures to prevent and respond to illegal content, including non-consensual intimate images. Maximum penalty: £18M or 10% of global revenue." delay={0.2} />
          <RegCard title="EU Digital Services Act" description="Very large platforms must assess and mitigate systemic risks, including content that harms personal safety. Independent audits are mandatory. Penalty: up to 6% of global revenue." delay={0.3} />
          <RegCard title="Australia Online Safety Act" description="The eSafety Commissioner has the power to issue removal notices and pursue enforcement against platforms that fail to adequately protect users. The regulatory model is expanding globally." delay={0.4} />
          <RegCard title="How Image Angel Fits" description="Forensic watermarking creates individual-level content traceability without collecting personal data or monitoring user behaviour. It meets the standard these frameworks describe as proportionate — proactive, privacy-preserving, and auditable." delay={0.5} />
        </div>
      </div>
    </section>
  );
}

function RegCard({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: enterEasing, delay }}
      style={{ backgroundColor: '#e8e4df', borderRadius: '12px', padding: '32px', borderLeft: '3px solid #f85838' }}>
      <h3 style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#221f1f', marginBottom: '12px' }}>{title}</h3>
      <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6 }}>{description}</p>
    </motion.div>
  );
}

function PrivacyArchitecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <h2 className="text-center mb-16" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
          What the System Does Not Do.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PrivacyCard icon={Lock} title="No Personal Data Embedded" description="Watermarks contain opaque session identifiers only. No names, emails, IP addresses, device IDs, or behavioural data. The identifiers are meaningful only to the originating platform." delay={0} />
          <PrivacyCard icon={Eye} title="No Automated Sanctions" description="Image Angel provides forensic attribution, not enforcement. No accounts are suspended, no content is removed, and no actions are taken without an explicit decision by the platform. Humans decide." delay={0.1} />
          <PrivacyCard icon={Shield} title="No Cross-Platform Resolvability" description="A watermark from one platform cannot identify a user on another. There is no central identity database. Each platform's data stays within its own boundaries — by architecture, not just by policy." delay={0.2} />
        </div>
      </div>
    </section>
  );
}

function PrivacyCard({ icon: Icon, title, description, delay = 0 }: { icon: any; title: string; description: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, ease: enterEasing, delay }} style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', backgroundColor: '#e6f0ec', borderRadius: '12px', marginBottom: '16px' }}>
        <Icon size={28} color="#5e8c7b" strokeWidth={1.5} />
      </div>
      <h3 style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: '#221f1f', marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.5 }}>{description}</p>
    </motion.div>
  );
}

function SafeByDesign() {
  return (
    <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="max-w-[800px] mx-auto">
          <h2 className="mb-6" style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#221f1f' }}>
            How the System Handles Failure.
          </h2>
          <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 400, color: '#221f1f', lineHeight: 1.6 }}>
            If the Image Angel API is unreachable, content delivers normally without watermarks. No errors. No broken pages. No user-facing impact. The worst-case outcome of any failure is a temporary period where new content is not watermarked. The system cannot expose user data, cannot take enforcement actions, and cannot create new security vulnerabilities.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComplianceStats() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard value="0" label="PII Embedded" context="By architecture" />
          <StatCard value="0" label="Automated Sanctions" context="Platform-controlled" />
          <StatCard value="0" label="Cross-Platform Data Sharing" context="Platform-local only" />
          <StatCard value="100%" label="Platform Control" context="All enforcement decisions are yours" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, context }: { value: string; label: string; context: string }) {
  return (
    <div className="text-center">
      <div style={{ fontFamily: "'Aktiv Grotesk Extended', sans-serif", fontSize: '48px', fontWeight: 900, color: value === '0' ? '#221f1f' : '#f85838', lineHeight: 1, marginBottom: '12px' }}>{value}</div>
      <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '16px', fontWeight: 700, color: '#221f1f', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#8f877d' }}>{context}</div>
    </div>
  );
}