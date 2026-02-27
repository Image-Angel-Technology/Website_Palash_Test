import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import caseStudy1 from 'figma:asset/8226c241ff06a6ce1bcb89ddb5c6aba9fa02b07e.png';
import quote1 from 'figma:asset/0a3d2bc971ce2fd5fccce17c4ba1dc7ad94bf1ec.png';
import quote2 from 'figma:asset/85e912543b43d7ed8c290cf9f7b2b42bb34b0144.png';

const enterEasing = [0, 0, 0.2, 1];

export default function CaseStudyUKOSAPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="When There's No Proof: Sarah's Experience | Case Study"
        description="Sarah's experience of intimate image abuse and the absence of evidence. A case study on the critical need for forensic watermarking technology."
        type="article"
        article={{
          publishedTime: '2026-02-01T00:00:00Z',
          modifiedTime: '2026-02-01T00:00:00Z',
          section: 'Case Studies',
          tags: ['Intimate Image Abuse', 'Forensic Evidence', 'Victim Support', 'Digital Safety'],
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
              backgroundImage: `url(${caseStudy1})`,
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
                { label: 'When There\'s No Proof: Sarah\'s Experience' },
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
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  fontWeight: 500,
                  color: '#ffffff',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  maxWidth: '900px',
                }}
              >
                When There's No Proof: Sarah's Experience of Intimate Image Abuse
              </h1>

              {/* Meta Info */}
              <div
                style={{
                  display: 'flex',
                  gap: '32px',
                  flexWrap: 'wrap',
                  marginBottom: '40px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar size={16} style={{ color: 'rgba(255,255,255,0.5)' }} />
                  <span
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    February 2026
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: 'rgba(255,255,255,0.5)' }} />
                  <span
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    8 min read
                  </span>
                </div>
              </div>

              {/* Excerpt */}
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  maxWidth: '800px',
                }}
              >
                Sarah's experience of intimate image abuse did not begin with a public leak. It began earlier, within a private relationship built on trust and in systems that offered her no protection when that trust was broken.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-[800px] mx-auto px-5 md:px-8" style={{ paddingTop: '88px', paddingBottom: '120px' }}>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: enterEasing }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              color: '#221f1f',
            }}
          >
            {/* Case Study Summary */}
            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#221f1f',
                }}
              >
                Case Study Summary
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: 'rgba(34,31,31,0.8)',
                  marginBottom: '20px',
                }}
              >
                Sarah's* experience of intimate image abuse did not begin with a public leak. It began earlier, within a private relationship built on trust and in systems that offered her no protection when that trust was broken. During their relationship, Sarah shared intimate images and videos with her partner consensually. Some were taken on her phone, others on his, and some were sent directly between them. She repeatedly asked that the content be deleted after viewing, and was reassured that it had been. At the time, Sarah had no reason to doubt this. Like many people, she believed that once something was deleted, it was gone.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'rgba(34,31,31,0.6)',
                  fontStyle: 'italic',
                  marginTop: '32px',
                }}
              >
                *Names and identifying details have been changed to protect anonymity.
              </p>
            </section>

            {/* From Trust to Threats */}
            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#221f1f',
                }}
              >
                From Trust to Threats
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: 'rgba(34,31,31,0.8)',
                  marginBottom: '20px',
                }}
              >
                After the relationship ended, Sarah began receiving threats. Her ex-partner warned that he would share the intimate images with people who mattered most to her, including her parents and her college peers. Because they attended the same college and were part of shared group chats, the threats felt immediate and real.
              </p>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: 'rgba(34,31,31,0.8)',
                  marginBottom: '20px',
                }}
              >
                When Sarah refused demands for money and pressure to resume the relationship, the situation escalated. One video was shared in a college group chat. Later, a naked image of Sara appeared publicly on a social media page, an intimate image she did not even know had been taken. False narratives followed, including claims that she was selling content online.
              </p>
            </section>

            {/* Quote Image 1 */}
            <div style={{ margin: '64px 0' }}>
              <img
                src={quote1}
                alt="It would have put out the flame before it turned into fire"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>

            {/* Living Without Proof */}
            <section style={{ marginBottom: '48px' }}>
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#221f1f',
                }}
              >
                Living Without Proof
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: 'rgba(34,31,31,0.8)',
                  marginBottom: '20px',
                }}
              >
                A defining part of Sarah's experience was the absence of evidence. Although she believed she knew who was responsible, she had no way to show how the intimate images were being kept, restored, or shared. The threats continued, but without proof of ongoing possession or distribution, there was little she could do.
              </p>
            </section>

            {/* Quote Image 2 */}
            <div style={{ margin: '64px 0' }}>
              <img
                src={quote2}
                alt="This research is shared with thanks to the participant for their openness and courage"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </div>
          </motion.article>

          {/* Back to Insights Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: enterEasing }}
            style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(34,31,31,0.1)' }}
          >
            <Link
              to="/insights"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: '#221f1f',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'color 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f85838';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#221f1f';
              }}
            >
              <ArrowLeft size={16} />
              Back to Insights
            </Link>
          </motion.div>

          {/* Related Case Studies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: enterEasing }}
            style={{ marginTop: '80px' }}
          >
            <h3
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '20px',
                fontWeight: 600,
                color: '#221f1f',
                marginBottom: '32px',
              }}
            >
              Related Case Studies
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <Link
                to="/insights/revenge-porn-distribution"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  border: '1px solid rgba(34,31,31,0.1)',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
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
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#221f1f',
                    marginBottom: '8px',
                  }}
                >
                  Stopping Revenge Porn Distribution
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(34,31,31,0.6)',
                    lineHeight: 1.5,
                  }}
                >
                  Court-ready evidence with 95%+ confidence
                </div>
              </Link>

              <Link
                to="/insights/commercial-content-theft"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  border: '1px solid rgba(34,31,31,0.1)',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
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
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#221f1f',
                    marginBottom: '8px',
                  }}
                >
                  When Your Work Is Stolen: Ben's Experience
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgba(34,31,31,0.6)',
                    lineHeight: 1.5,
                  }}
                >
                  Commercial content theft and the absence of accountability
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}