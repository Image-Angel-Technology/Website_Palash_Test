import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import heroQuote from 'figma:asset/81499a161a1b71ce63450ffe1d47d2e0532f7c9e.png';
import quote1 from 'figma:asset/865a38835a07802aa52841626edcee04bbdc8687.png';
import quote2 from 'figma:asset/2e0a5d685f2c66991ceeeeed3663f4854d4627e9.png';
import quote3 from 'figma:asset/53502d82b3f81c6d67d0492927f89ca1734f21cd.png';
import quote4 from 'figma:asset/a371926f6b2bcdfc094d8c2d95592194695b74de.png';
import quote5 from 'figma:asset/79888ab6e93b14297ea72eebc7ea5220bbbb81f6.png';
import quote6 from 'figma:asset/f603b35df5cec0607f81b9a420dfe26fc4d414fe.png';
import quote7 from 'figma:asset/1b6268609ebf9aa0ab6fdc24bb6cd8f4bd233f61.png';

const enterEasing = [0, 0, 0.2, 1];

export default function CaseStudyCommercialTheftPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="When Your Work Is Stolen and No One Is Accountable: Ben's Experience | Case Study"
        description="Ben's experience of commercial content theft highlights the devastating impact when creators lose control of their work with no way to prove how it was stolen or hold anyone accountable."
        type="article"
        article={{
          publishedTime: '2026-02-10T00:00:00Z',
          modifiedTime: '2026-02-10T00:00:00Z',
          section: 'Case Studies',
          tags: ['Content Theft', 'Creator Safety', 'Commercial Abuse', 'Forensic Evidence'],
        }}
      />

      <div style={{ backgroundColor: '#dededb', minHeight: '100vh' }}>
        {/* Hero Section */}
        <div
          style={{
            backgroundColor: '#221f1f',
            paddingTop: '120px',
            paddingBottom: '80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${heroQuote})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.5,
            }}
          />
          
          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(34,31,31,0.7) 0%, rgba(34,31,31,0.9) 100%)',
            }}
          />

          <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ position: 'relative', zIndex: 1 }}>
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Insights', path: '/insights' },
                { label: 'When Your Work Is Stolen and No One Is Accountable' },
              ]}
              theme="dark"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: enterEasing }}
              style={{ marginTop: '40px' }}
            >
              {/* Category Badge */}
              <div
                style={{
                  display: 'inline-block',
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#f85838',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                Case Study
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: 'clamp(32px, 4.5vw, 56px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  maxWidth: '900px',
                }}
              >
                When Your Work Is Stolen and No One Is Accountable: Ben's Experience
              </h1>

              {/* Meta Info */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '14px',
                  color: '#dededb',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} />
                  <span>February 2026</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} />
                  <span>11 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1280px] mx-auto px-5 md:px-8" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Back Link */}
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 mb-12 transition-colors duration-200"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: 500,
                color: '#f85838',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ff6a4d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f85838';
              }}
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Summary Box */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '32px',
                marginBottom: '48px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '16px',
                }}
              >
                Case Study Summary
              </h2>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#6e6c6a',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                Ben's* experience of commercial content theft highlights the devastating impact when creators lose control of their work with no way to prove how it was stolen or hold anyone accountable. Despite clear evidence of widespread distribution, the absence of forensic watermarking left Ben without the tools needed to take action.
              </p>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#8f877d',
                  lineHeight: 1.7,
                }}
              >
                *Names and identifying details have been changed to protect anonymity.
              </p>
            </div>

            {/* Content Sections */}
            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                  lineHeight: 1.3,
                }}
              >
                The Reality of Content Theft
              </h2>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#4a4746',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                Ben discovered his content being distributed across multiple piracy sites, aggregators, and forums. The theft was systematic: entire galleries reposted, watermarks removed, and content repackaged for profit by others. Despite knowing his work was stolen, Ben faced an impossible challenge: proving who was responsible and how the theft occurred.
              </p>

              {/* Quote 1 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote1}
                  alt="Quote from Ben about content theft"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                  lineHeight: 1.3,
                }}
              >
                The Evidence Gap
              </h2>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#4a4746',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                Without forensic watermarking, Ben couldn't identify which subscriber leaked the content, trace the distribution path, or provide evidence to support legal action. Platforms hosting his content refused takedown requests without proof of ownership, creating a cycle of helplessness that many creators face.
              </p>

              {/* Quote 2 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote2}
                  alt="Quote about evidence challenges"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                  lineHeight: 1.3,
                }}
              >
                Financial and Emotional Impact
              </h2>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#4a4746',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                The theft directly impacted Ben's income, as potential subscribers could access his content for free elsewhere. Beyond the financial loss, there was the psychological burden of knowing his work was being exploited with no recourse for accountability.
              </p>

              {/* Quote 3 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote3}
                  alt="Quote about impact"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                  lineHeight: 1.3,
                }}
              >
                What Forensic Watermarking Would Have Provided
              </h2>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#4a4746',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                With forensic watermarking embedded in every image, Ben would have had the evidence needed to identify the source of the leak, demonstrate ownership, and pursue legal action. The imperceptible identifiers would have survived screenshot attempts and provided court-ready proof of distribution chain.
              </p>

              {/* Quote 4 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote4}
                  alt="Quote about forensic watermarking solution"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </section>

            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                  lineHeight: 1.3,
                }}
              >
                Platform Responsibility
              </h2>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#4a4746',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                }}
              >
                Cases like Ben's highlight the need for platforms to implement forensic watermarking as standard protection. It's not just about compliance—it's about providing creators with the tools they need to protect their livelihoods and hold bad actors accountable.
              </p>

              {/* Quote 5 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote5}
                  alt="Quote about platform responsibility"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </section>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                backgroundColor: '#e0ddd9',
                margin: '64px 0',
              }}
            />

            {/* Related Case Studies */}
            <section>
              <h2
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '32px',
                }}
              >
                Related Case Studies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                  to="/insights/platform-compliance-uk-osa"
                  className="group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '24px',
                      transition: 'all 200ms ease',
                      border: '1px solid #e0ddd9',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f85838';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e0ddd9';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#f85838',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      Case Study
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#221f1f',
                        lineHeight: 1.4,
                        marginBottom: '12px',
                      }}
                    >
                      Platform Compliance Under UK OSA
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
                      How a major UK platform reduced regulatory risk while protecting creator revenue.
                    </p>
                  </div>
                </Link>

                <Link
                  to="/insights/revenge-porn-distribution"
                  className="group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '24px',
                      transition: 'all 200ms ease',
                      border: '1px solid #e0ddd9',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f85838';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e0ddd9';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#f85838',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                      }}
                    >
                      Case Study
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#221f1f',
                        lineHeight: 1.4,
                        marginBottom: '12px',
                      }}
                    >
                      Left Without Answers: Amy's Experience
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
                      How paywalled content theft leaves creators without answers or accountability.
                    </p>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
