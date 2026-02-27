import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import heroImage from 'figma:asset/7af2b4dd239a023599b9aa40366161f596b58024.png';
import quote1 from 'figma:asset/2544ec85b543992e27ab7231dab4071c81d57edb.png';
import quote2 from 'figma:asset/6e3394aef0cc6c1e445021bf4124e91854e8700e.png';
import quote3 from 'figma:asset/208739ea566d1cae476b9a2e26ecd72253167299.png';
import quote4 from 'figma:asset/433e46047ad1f318ec7dae633524c70bdf6a5c56.png';
import quote5 from 'figma:asset/f603b35df5cec0607f81b9a420dfe26fc4d414fe.png';

const enterEasing = [0, 0, 0.2, 1];

export default function CaseStudyRevengePornPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Left Without Answers: Amy's Experience of Paywalled Content Theft | Case Study"
        description="Amy's experience shows how content shared with clear boundaries on paywalled platforms can be stolen, leaving creators without answers about who was responsible or how to stop it."
        type="article"
        article={{
          publishedTime: '2026-02-15T00:00:00Z',
          modifiedTime: '2026-02-15T00:00:00Z',
          section: 'Case Studies',
          tags: ['Content Theft', 'Paywalled Platforms', 'Privacy Violation', 'Forensic Evidence'],
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
              backgroundImage: `url(${heroImage})`,
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
                { label: 'Left Without Answers' },
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
                Left Without Answers: Amy's Experience of Paywalled Content Theft
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
                  <span>9 min read</span>
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
                Amy's* experience of image abuse did not involve a partner or someone she knew personally. Instead, it began with a message from a friend and the sudden realisation that private content shared behind a paywall had escaped onto the open internet.
              </p>
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
                What followed was not just the loss of control over her images, but a prolonged struggle to understand how it happened, who was responsible, and what, if anything, she could do next.
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
                Content Shared with Clear Boundaries
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
                Amy shared intimate images on a subscription website, which was limited to paying subscribers. She was explicit about her boundaries: her content was not to be screenshotted, shared, or redistributed in any form.
              </p>
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
                She never consented to her images being available for free or hosted on external websites. Like any creator, Amy's work was behind a paywall because that would provide income here. That expectation was broken without warning.
              </p>

              {/* Quote 1 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote1}
                  alt="The lack of control at that moment intensified the distress."
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
                The Moment of Discovery
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
                Amy first became aware of the leak when a friend, also a sex worker, reached out to warn her that images were appearing on third-party websites. What she found was overwhelming: large volumes of her private content circulating freely, often under slightly altered site names.
              </p>
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
                But she could not make the key discovery — she did not know who had first posted the images, how they had been taken, or how widely they had already spread. As she later described, the moment of finding out was marked by panic and confusion, a sudden need to grasp knowns that simply would not come.
              </p>

              {/* Quote 2 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote2}
                  alt="When your images are taken and you're left without answers"
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
                Exposure Beyond Consent
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
                The leaked material did not stop at the images themselves. Amy discovered that the leaked content had been linked not only to her pseudonym and stage name, but to her username, and her full legal name.
              </p>
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
                She described this as "terrifying", a permanent connection between her sex work and her legal identity. It increased her sense of vulnerability far beyond the original leak. What had been a controlled environment became something entirely uncontrolled.
              </p>

              {/* Quote 3 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote3}
                  alt="Game changer both for identifying who was responsible and for deterring misuse"
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
                The Search for Accountability
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
                Amy attempted to report the leaked content to the platform where she'd originally shared it, but was met with little support. Without being able to identify the specific subscriber responsible, there was nothing that could be done.
              </p>
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
                She also tried to have the images removed from third-party sites hosting the content. But those takedown requests were slow, incomplete, and ultimately futile — the content simply reappeared elsewhere. She found herself locked into an endless cycle of reporting with no end in sight.
              </p>
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
                The absence of forensic evidence meant there was no trail to follow, no proof of who had first taken the images or distributed them. Without that, Amy was left powerless.
              </p>

              {/* Quote 4 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote4}
                  alt="Having that power back in my hands where it was taken out of my hands would feel... really important"
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
                What Forensic Watermarking Could Have Changed
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
                When Amy was shown how forensic watermarking works, her reaction was immediate. If her images had been embedded with imperceptible identifiers that linked each copy to a specific subscriber, she would have known exactly who was responsible.
              </p>
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
                That evidence could have been used to hold the subscriber accountable — through the platform, or through law enforcement. It would have also provided the platform itself with proof sufficient to take action: removing the subscriber, supporting prosecution, or providing a deterrent effect to others.
              </p>
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
                For Amy, the significance was not just technical. She described forensic watermarking as "really important" — a tool that would have given her back the power that was taken from her. Being able to identify the person responsible would have transformed a situation defined by helplessness into one where action was possible.
              </p>
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
                The Broader Impact on Trust and Safety
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
                Amy's case is not isolated. Paywalled content platforms host millions of creators who depend on the integrity of those boundaries. When leaks occur without accountability, the trust between platform, creator, and subscriber breaks down.
              </p>
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
                Forensic watermarking offers a way to restore that trust. It provides evidence where none existed before. It creates accountability where there was only uncertainty. And it places control back in the hands of those who had it taken away.
              </p>
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
                For platforms, it is not just a compliance tool. It is a commitment to the people whose content they host, and a defence against the reputational and legal consequences of failing to act.
              </p>

              {/* Quote 5 */}
              <div style={{ margin: '40px 0' }}>
                <img
                  src={quote5}
                  alt="This research is shared with thanks to the participant for their openness and courage"
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
                  to="/insights/commercial-content-theft"
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
                      When Your Work Is Stolen and No One Is Accountable
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
                      Ben's experience shows the devastating impact when creators lose control of their work.
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
