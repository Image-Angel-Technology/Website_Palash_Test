import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import {
  Shield,
  Eye,
  Lock,
  KeyRound,
  Terminal,
  Layers,
  Cloud,
  Code2,
  Database,
  Image as ImageIcon,
  Film,
  Wrench,
  ExternalLink,
} from 'lucide-react';

const enterEasing = [0, 0, 0.2, 1];

/* ───────────────────────── Shared Helpers ───────────────────────── */

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

/* ───────────────────────── Sub-components ───────────────────────── */

function ArchCard({
  num,
  title,
  body,
  color,
}: {
  num: string;
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '32px',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          fontFamily: "'Aktiv Grotesk Extended', sans-serif",
          fontSize: '32px',
          fontWeight: 900,
          color,
          marginBottom: '16px',
        }}
      >
        {num}
      </div>
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '20px',
          fontWeight: 700,
          color: '#ffffff',
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
          color: '#b5aea6',
          lineHeight: 1.6,
        }}
      >
        {body}
      </p>
    </div>
  );
}

function TechStat({
  value,
  label,
  context,
}: {
  value: string;
  label: string;
  context: string;
}) {
  return (
    <div className="text-center">
      <div
        style={{
          fontFamily: "'Aktiv Grotesk Extended', sans-serif",
          fontSize: '48px',
          fontWeight: 900,
          color: value === '0' ? '#221f1f' : '#f85838',
          lineHeight: 1,
          marginBottom: '12px',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '16px',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#8f877d',
        }}
      >
        {context}
      </div>
    </div>
  );
}

function PrivacyPoint({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          backgroundColor: '#e6f0ec',
          borderRadius: '10px',
          flexShrink: 0,
        }}
      >
        <Icon size={24} color="#5e8c7b" strokeWidth={1.5} />
      </div>
      <div>
        <h4
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            color: '#221f1f',
            marginBottom: '4px',
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#6e6c6a',
            lineHeight: 1.55,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

function CompatibilityTile({
  icon: Icon,
  label,
  delay = 0,
}: {
  icon: any;
  label: string;
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: enterEasing, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        padding: '0 16px',
        height: '44px',
        width: '100%',
        maxWidth: '210px',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: hovered ? 'rgba(248,88,56,0.25)' : '#e8e4df',
        backgroundColor: hovered ? 'rgba(248,88,56,0.03)' : '#ffffff',
        transition: 'all 200ms ease',
        cursor: 'default',
      }}
    >
      <Icon
        size={18}
        strokeWidth={1.5}
        style={{
          color: hovered ? '#f85838' : '#8f877d',
          transition: 'color 200ms ease',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: 600,
          color: hovered ? '#221f1f' : '#6e6c6a',
          transition: 'color 200ms ease',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

function EndpointCard({
  method,
  title,
  body,
  delay = 0,
}: {
  method: string;
  title: string;
  body: string;
  delay?: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: enterEasing, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#221f1f',
        borderRadius: '8px',
        padding: '24px',
        border: '1px solid',
        borderColor: hovered ? 'rgba(248,88,56,0.3)' : '#353332',
        boxShadow: hovered ? '0 0 20px rgba(248,88,56,0.08)' : 'none',
        transition: 'all 250ms ease',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          style={{
            fontFamily: "'Aktiv Grotesk Extended', sans-serif",
            fontSize: '10px',
            fontWeight: 300,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#f85838',
            backgroundColor: 'rgba(248,88,56,0.1)',
            padding: '4px 10px',
            borderRadius: '100px',
          }}
        >
          {method}
        </span>
      </div>
      <h4
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '14px',
          fontWeight: 400,
          color: '#ffffff',
          marginBottom: '8px',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#8f877d',
          lineHeight: 1.55,
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

function IntegrationStep({
  num,
  icon: Icon,
  title,
  body,
  isLast = false,
  delay = 0,
}: {
  num: string;
  icon: any;
  title: string;
  body: string;
  isLast?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: enterEasing, delay }}
      style={{ position: 'relative', flex: 1, textAlign: 'center' }}
    >
      {!isLast && (
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            top: '24px',
            right: '-50%',
            width: '100%',
            height: '0',
            borderTop: '2px dashed #d6d2cd',
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          fontFamily: "'Aktiv Grotesk Extended', sans-serif",
          fontSize: '28px',
          fontWeight: 900,
          color: '#f85838',
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {num}
      </div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          backgroundColor: '#f7f6f5',
          borderRadius: '10px',
          marginBottom: '16px',
        }}
      >
        <Icon size={24} color="#221f1f" strokeWidth={1.5} />
      </div>
      <h4
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '16px',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '8px',
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#6e6c6a',
          lineHeight: 1.55,
          maxWidth: '220px',
          margin: '0 auto',
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

function RequirementItem({
  icon: Icon,
  text,
  delay = 0,
}: {
  icon: any;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: enterEasing, delay }}
      className="flex items-start gap-4"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          backgroundColor: '#f7f6f5',
          borderRadius: '8px',
          flexShrink: 0,
        }}
      >
        <Icon size={20} color="#221f1f" strokeWidth={1.5} />
      </div>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '15px',
          fontWeight: 400,
          color: '#6e6c6a',
          lineHeight: 1.55,
          paddingTop: '8px',
        }}
      >
        {text}
      </p>
    </motion.div>
  );
}

/* ──────────────────────── Page Component ───────────────────────── */

export default function TechnologyPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    document.title =
      'How Forensic Watermarking Works — Image Angel Technology';
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyCta(heroBottom < 0);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* ════════════════ SCROLL 1 — HERO + ARCHITECTURE ════════════════ */}
      <section
        ref={heroRef}
        style={{
          backgroundColor: '#dededb',
          padding: 'var(--hero-pad-top) 0 var(--section-pad-y)',
          marginTop: 'var(--nav-height)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: enterEasing }}
            className="mb-6"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              color: '#8f877d',
            }}
          >
            <Link to="/" style={{ color: '#8f877d', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#221f1f' }}>Technology</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: enterEasing }}
            className="text-center mb-6"
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#221f1f',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            How Forensic Watermarking Works.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: enterEasing, delay: 0.1 }}
            className="text-center max-w-[700px] mx-auto"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.65,
            }}
          >
            A two-layer system that embeds invisible, traceable forensic marks
            into content — with no measurable impact on performance.
          </motion.p>
        </div>
      </section>

      {/* Two-Layer Architecture */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-6"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Two Layers. Complete Traceability.
          </h2>
          <p
            className="text-center max-w-[800px] mx-auto mb-16"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#b5aea6',
              lineHeight: 1.6,
            }}
          >
            Image Angel uses a two-layer watermarking system. The first layer
            identifies the platform. The second layer identifies the individual
            viewer. Together, they create an unbroken forensic chain from the
            moment content is accessed to the moment a leak is attributed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <ArchCard
              num="01"
              title="Layer 1: Platform Watermark"
              body="Applied once at upload. Identifies the source platform. Cached for 30 days. Generated server-side with no impact on content delivery."
              color="#f85838"
            />
            <ArchCard
              num="02"
              title="Layer 2: User Watermark"
              body="Applied at the moment of access. Unique to every viewing session. Cached for 24 hours per user per dimension. This is the layer that makes individual attribution possible."
              color="#f85838"
            />
            <ArchCard
              num="03"
              title="Extraction"
              body="When a leaked file is submitted, Image Angel analyses it and returns the platform ID, session ID, and timestamp. The process works even after screenshots, compression, cropping, and messaging app re-encoding. Attribution confidence: 90%+."
              color="#5e8c7b"
            />
          </div>
        </div>
      </section>

      {/* ════════════════ SCROLL 2 — PERFORMANCE + PRIVACY ═══════════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            No Measurable Impact on Performance.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <TechStat
              value="<100ms"
              label="Image Render Impact"
              context="Typically materially lower"
            />
            <TechStat
              value="0"
              label="Additional Storage"
              context="Overlays are applied, never stored"
            />
            <TechStat
              value="0"
              label="CDN Cache Impact"
              context="Cache hit rates unaffected"
            />
          </div>
          <p
            className="text-center max-w-[800px] mx-auto"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.6,
            }}
          >
            The watermark overlay runs asynchronously, downstream of your CDN.
            Time-to-first-byte remains unchanged. There's no client-side
            JavaScript and no blocking requests. Your performance metrics stay
            where they are. If the API is unreachable, content delivers
            normally — the worst case is a temporary gap in traceability.
          </p>
        </div>
      </section>

      {/* Privacy — inline points, NOT cards */}
      <section style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            Privacy by Design.
          </h2>
          <div className="flex flex-col gap-8">
            <PrivacyPoint
              icon={Shield}
              title="No Personal Data Embedded"
              body="The watermark contains opaque session identifiers only. No names, no emails, no IP addresses, no device IDs. The identifiers are meaningful only to the platform that generated them."
            />
            <PrivacyPoint
              icon={Eye}
              title="No User Surveillance"
              body="Image Angel does not track behaviour, monitor browsing, or profile users. It marks content at the moment of access. That's it."
            />
            <PrivacyPoint
              icon={Lock}
              title="No Cross-Platform Tracking"
              body="Watermarks are platform-local. A mark embedded by one platform cannot be read by another. There is no central database of user identities."
            />
          </div>
        </div>
      </section>

      {/* ════════════════ SCROLL 3 — RESILIENCE + CONTENT SUPPORT ════════════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: '54px 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-6"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            What the Watermark Survives.
          </h2>
          <p
            className="text-center max-w-[800px] mx-auto mb-10"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.6,
            }}
          >
            Screenshots. Screen recordings. JPEG compression. Cropping.
            Resizing. Messaging app re-encoding. The forensic watermark is
            embedded in the visual structure of the image — not in metadata or
            EXIF data. If enough of the original image remains visible to a
            person, the watermark is recoverable by our system.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px] mx-auto mb-6">
            {[
              'Screenshots',
              'Screen Recordings',
              'JPEG Compression',
              'Cropping',
              'Resizing',
              'Messaging Re-encoding',
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: '#e6f0ec',
                  borderRadius: '12px',
                  padding: '16px 24px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#5e8c7b',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Content Support — compact single row */}
          <div className="max-w-[1280px] mx-auto text-center">
            <h3
              className="text-center mb-3"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '18px',
                fontWeight: 700,
                color: '#221f1f',
              }}
            >
              What It Supports.
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Image Formats */}
              <div className="flex flex-col items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                    fontSize: '10px',
                    fontWeight: 300,
                    color: '#8f877d',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Image Formats
                </span>
                <div className="flex flex-col gap-2">
                  <CompatibilityTile icon={ImageIcon} label="JPEG" delay={0} />
                  <CompatibilityTile icon={ImageIcon} label="PNG" delay={0.03} />
                </div>
              </div>
              {/* Video */}
              <div className="flex flex-col items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                    fontSize: '10px',
                    fontWeight: 300,
                    color: '#8f877d',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Video
                </span>
                <div className="flex flex-col gap-2">
                  <CompatibilityTile icon={Film} label="Rotating overlay" delay={0.06} />
                  <CompatibilityTile icon={Film} label="Session traceability" delay={0.09} />
                </div>
              </div>
              {/* Supported Tools */}
              <div className="flex flex-col items-center gap-3">
                <span
                  style={{
                    fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                    fontSize: '10px',
                    fontWeight: 300,
                    color: '#8f877d',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Supported Tools
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <CompatibilityTile icon={Wrench} label="ImageMagick" delay={0.12} />
                  <CompatibilityTile icon={Wrench} label="Sharp" delay={0.15} />
                  <CompatibilityTile icon={Wrench} label="GD" delay={0.18} />
                  <CompatibilityTile icon={Wrench} label="Pillow" delay={0.21} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ SCROLL 4 — DEVELOPER'S CORNER ════════════════ */}
      <section style={{ backgroundColor: '#221f1f', padding: '64px 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <AnimatedSection>
            <h2
              className="text-center mb-6"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 32px)',
                fontWeight: 800,
                color: '#f85838',
              }}
            >
              Developer's Corner.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="text-center max-w-[800px] mx-auto mb-12"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: '#b5aea6',
                lineHeight: 1.6,
              }}
            >
              REST API. JSON responses. Standard authentication. Server-side
              integration into your existing media pipeline. No proprietary
              frameworks. No lock-in. This is infrastructure, not a product
              bolted on.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* API Overview — EndpointCards */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <AnimatedSection>
            <div
              className="mb-12"
              style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                fontSize: '11px',
                fontWeight: 300,
                color: '#8f877d',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              API OVERVIEW
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EndpointCard
              method="POST"
              title="POST /Watermark/Platform"
              body="Request platform overlay. Identifies the source platform. Cache: 30 days."
              delay={0}
            />
            <EndpointCard
              method="POST"
              title="POST /Watermark"
              body="Request user payload and convert to overlay. Unique per session. Cache: 24 hours."
              delay={0.1}
            />
            <EndpointCard
              method="POST"
              title="POST /Extract"
              body="Submit leaked file for forensic analysis. Returns platform ID, session ID, timestamp."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Integration Architecture */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <AnimatedSection>
            <div
              className="mb-12"
              style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                fontSize: '11px',
                fontWeight: 300,
                color: '#8f877d',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              INTEGRATION ARCHITECTURE
            </div>
          </AnimatedSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mb-16"
            style={{ position: 'relative' }}
          >
            <IntegrationStep
              num="1"
              icon={KeyRound}
              title="Get Credentials"
              body="API key and client ID issued. Sandbox environment provisioned."
              delay={0}
            />
            <IntegrationStep
              num="2"
              icon={Terminal}
              title="Call API"
              body="Server-side call to the watermarking endpoint from your media pipeline."
              delay={0.15}
            />
            <IntegrationStep
              num="3"
              icon={Layers}
              title="Apply Overlay"
              body="Composite the returned overlay onto the source image before delivery."
              delay={0.3}
            />
            <IntegrationStep
              num="4"
              icon={Cloud}
              title="Cache & Serve"
              body="Cache the watermarked output. Serve through your existing CDN. Done."
              isLast
              delay={0.45}
            />
          </div>

          <AnimatedSection delay={0.2}>
            <p
              className="text-center max-w-[800px] mx-auto"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 400,
                color: '#6e6c6a',
                lineHeight: 1.6,
              }}
            >
              Image Angel sits downstream of your CDN, between your origin
              server and content delivery. It processes the overlay after your
              existing pipeline has finished. No new infrastructure. No new
              dependencies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════ SCROLL 5 — REQUIREMENTS + WORDPRESS + CTA ════════════════ */}
      <section style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[800px] mx-auto px-5 md:px-8">
          <AnimatedSection>
            <h3
              className="mb-8"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#221f1f',
              }}
            >
              Requirements.
            </h3>
          </AnimatedSection>

          <div className="flex flex-col gap-6 mb-16">
            <RequirementItem
              icon={KeyRound}
              text="API key and client ID — provided by Image Angel on signing."
              delay={0}
            />
            <RequirementItem
              icon={Code2}
              text="Image processing capability — ImageMagick, Sharp, GD, or Pillow."
              delay={0.1}
            />
            <RequirementItem
              icon={Database}
              text="Your existing content storage — no changes required."
              delay={0.2}
            />
          </div>

          <AnimatedSection delay={0.15}>
            <div
              style={{
                borderTop: '1px solid #d6d2cd',
                paddingTop: '48px',
              }}
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#221f1f',
                }}
              >
                Reference Implementation.
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#6e6c6a',
                  lineHeight: 1.6,
                }}
              >
                An open-source WordPress plugin exists as a working reference.
                Install, activate, connect your API key. Full forensic
                protection in five minutes. No server configuration required.
                Source available for inspection.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 transition-colors duration-200"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#221f1f',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1.5px solid #221f1f',
                  backgroundColor: 'transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#221f1f';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#221f1f';
                }}
              >
                VIEW PLUGIN
                <span style={{ letterSpacing: '0.04em' }}>{'>>>'}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 800,
                color: '#ffffff',
              }}
            >
              Request API Access.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p
              className="mb-8 max-w-[600px] mx-auto"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                color: '#b5aea6',
                lineHeight: 1.6,
              }}
            >
              Full documentation, sandbox credentials, and a named engineer on
              our side. Typically within 48 hours.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Link to="/contact">
              <button
                className="transition-all duration-300"
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
                REQUEST API ACCESS
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════ STICKY FLOATING CTA ════════════════ */}
      {showStickyCta && (
        <>
          {/* Desktop: fixed pill bottom-right */}
          <div
            className="hidden md:block"
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 90,
              animation: 'fadeInUp 300ms ease forwards',
            }}
          >
            <Link to="/contact">
              <button
                className="transition-all duration-200"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#ffffff',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  backgroundColor: '#f85838',
                  border: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff6a4d';
                  e.currentTarget.style.boxShadow = '0 0 32px rgba(248,88,56,0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f85838';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                REQUEST API ACCESS
              </button>
            </Link>
          </div>

          {/* Mobile: full-width bar at bottom */}
          <div
            className="md:hidden"
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 90,
              padding: '12px 16px',
              paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
              backgroundColor: 'rgba(34,31,31,0.95)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              animation: 'fadeInUp 300ms ease forwards',
            }}
          >
            <Link to="/contact" style={{ display: 'block' }}>
              <button
                style={{
                  width: '100%',
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: '100px',
                  backgroundColor: '#f85838',
                  border: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >
                REQUEST API ACCESS
              </button>
            </Link>
          </div>
        </>
      )}

      {/* Keyframe for sticky CTA entrance */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}