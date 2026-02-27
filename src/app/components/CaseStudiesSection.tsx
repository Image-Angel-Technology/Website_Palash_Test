import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import caseStudy1 from 'figma:asset/8226c241ff06a6ce1bcb89ddb5c6aba9fa02b07e.png';
import caseStudy2 from 'figma:asset/7af2b4dd239a023599b9aa40366161f596b58024.png';
import caseStudy3 from 'figma:asset/81499a161a1b71ce63450ffe1d47d2e0532f7c9e.png';

const enterEasing = [0, 0, 0.2, 1];

const InsightCard = ({
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
  delay,
  link,
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  delay: number;
  link: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: enterEasing, delay }}
    >
      <Link
        to={link}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'all 300ms ease',
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: isHovered ? '0 12px 40px rgba(0,0,0,0.12)' : '0 2px 12px rgba(0,0,0,0.06)',
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          {/* Image Container */}
          <div
            style={{
              position: 'relative',
              paddingBottom: '60%',
              overflow: 'hidden',
              backgroundColor: '#f7f6f5',
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 500ms ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: '#f85838',
                color: '#ffffff',
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '10px',
                fontWeight: 700,
                padding: '6px 12px',
                borderRadius: '6px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Case Study
            </div>
          </div>

          {/* Content Container */}
          <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
                color: '#221f1f',
                lineHeight: 1.3,
                marginBottom: '12px',
              }}
            >
              {title}
            </h3>

            <p
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '15px',
                fontWeight: 400,
                color: '#6e6c6a',
                lineHeight: 1.6,
                marginBottom: '16px',
                flex: 1,
              }}
            >
              {excerpt}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid #e0ddd9',
              }}
            >
              <div
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  color: '#8f877d',
                }}
              >
                {date} · {readTime}
              </div>
              <ArrowRight
                size={18}
                style={{
                  color: '#f85838',
                  transition: 'transform 300ms ease',
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export function CaseStudiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#f7f6f5',
        padding: 'var(--section-pad-y) 0 calc(var(--section-pad-y) * 0.6) 0',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: 'clamp(32px, 4vw, 40px)',
              fontWeight: 900,
              color: '#221f1f',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Real Evidence. Real Protection.
          </h2>
          <p
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#6e6c6a',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Case studies from live deployments showing how forensic watermarking provides accountability.
          </p>
        </motion.div>

        {/* Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-8 mb-12">
          <InsightCard
            title="Platform Compliance Under UK OSA"
            excerpt="How a major UK platform reduced regulatory risk while protecting creator revenue through forensic watermarking deployment."
            date="Feb 2026"
            readTime="8 min read"
            imageUrl={caseStudy1}
            delay={0}
            link="/insights/platform-compliance-uk-osa"
          />
          <InsightCard
            title="Left Without Answers: Amy's Experience"
            excerpt="Amy's experience of paywalled content theft shows how private images shared with clear boundaries can escape into the open internet with no way to identify who was responsible."
            date="Feb 2026"
            readTime="9 min read"
            imageUrl={caseStudy2}
            delay={0.1}
            link="/insights/revenge-porn-distribution"
          />
          <InsightCard
            title="When Your Work Is Stolen"
            excerpt="Ben's experience of commercial content theft highlights the devastating impact when creators lose control of their work with no way to prove how it was stolen or hold anyone accountable."
            date="Jan 2026"
            readTime="11 min read"
            imageUrl={caseStudy3}
            delay={0.2}
            link="/insights/commercial-content-theft"
          />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/insights">
            <button
              className="transition-all duration-200"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#ffffff',
                padding: '16px 40px',
                borderRadius: '12px',
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
              View More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}