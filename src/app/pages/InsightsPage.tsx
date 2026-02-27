import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import caseStudy1 from 'figma:asset/8226c241ff06a6ce1bcb89ddb5c6aba9fa02b07e.png';
import caseStudy2 from 'figma:asset/81499a161a1b71ce63450ffe1d47d2e0532f7c9e.png';
import caseStudy3 from 'figma:asset/7af2b4dd239a023599b9aa40366161f596b58024.png';
import bbcLogo from 'figma:asset/d3113ec4d6ed0333aa824650d8045cad21e2f08e.png';
import glamourLogo from 'figma:asset/c0657163dde1dc33240b27413c46c2c92bd3fc52.png';
import guardianLogo from 'figma:asset/b285b74e87cc8cb6d67797644f1dfea406d23136.png';

const enterEasing = [0, 0, 0.2, 1];

const categories = ['All', 'Press', 'Case Studies', 'Regulatory', 'Technology', 'Creator Safety'];

const insights = [
  {
    id: 1,
    title: 'Platform Compliance Under UK OSA',
    excerpt: 'How a major UK platform reduced regulatory risk while protecting creator revenue through forensic watermarking deployment.',
    date: 'Feb 2026',
    readTime: '8 min read',
    category: 'Case Studies',
    imageUrl: caseStudy1,
    featured: true,
    link: '/insights/platform-compliance-uk-osa',
  },
  {
    id: 2,
    title: "Left Without Answers: Amy's Experience",
    excerpt: "Amy's experience of paywalled content theft shows how private images shared with clear boundaries can escape into the open internet with no way to identify who was responsible.",
    date: 'Feb 2026',
    readTime: '9 min read',
    category: 'Case Studies',
    imageUrl: caseStudy3,
    featured: true,
    link: '/insights/revenge-porn-distribution',
  },
  {
    id: 3,
    title: "When Your Work Is Stolen",
    excerpt: "Ben's experience of commercial content theft highlights the devastating impact when creators lose control of their work with no way to prove how it was stolen or hold anyone accountable.",
    date: 'Jan 2026',
    readTime: '11 min read',
    category: 'Case Studies',
    imageUrl: caseStudy2,
    featured: true,
    link: '/insights/commercial-content-theft',
  },
  {
    id: 4,
    title: 'BBC News: Image Angel Founder Discusses Content Protection',
    excerpt: "Image Angel's founder speaks to BBC News about the critical need for forensic watermarking technology to protect creators and combat intimate image abuse.",
    date: 'Feb 2026',
    readTime: '5 min read',
    category: 'Press',
    imageUrl: bbcLogo,
    featured: false,
    link: 'https://www.bbc.com/audio/play/m002pptl',
    external: true,
  },
  {
    id: 5,
    title: 'Glamour Magazine: The Tech Fighting Back Against Image Theft',
    excerpt: "Glamour Magazine features Image Angel's innovative approach to protecting digital content creators in an age of widespread image theft and non-consensual sharing.",
    date: 'Feb 2026',
    readTime: '6 min read',
    category: 'Press',
    imageUrl: glamourLogo,
    featured: false,
    link: 'https://www.glamourmagazine.co.uk/',
    external: true,
  },
  {
    id: 6,
    title: 'The Guardian: Campaigners Call for Stronger Protection Against AI-Generated Explicit Imagery',
    excerpt: 'The Guardian reports on calls from campaigners, including Image Angel, for stronger legal protections against AI-generated explicit imagery and non-consensual deepfakes.',
    date: 'Feb 2026',
    readTime: '7 min read',
    category: 'Press',
    imageUrl: guardianLogo,
    featured: false,
    link: 'https://www.theguardian.com/technology/2026/feb/07/campaigners-call-stronger-protection-against-ai-generated-explicit-imagery',
    external: true,
  },
];

export default function InsightsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'Insights — Image Angel Case Studies, Research & Analysis';
    const filter = searchParams.get('filter');
    if (filter) {
      const categoryName = categories.find(c => c.toLowerCase().replace(/\s+/g, '-') === filter);
      if (categoryName) setActiveFilter(categoryName);
    }
  }, [searchParams]);

  const filteredInsights = activeFilter === 'All' 
    ? insights 
    : insights.filter(i => i.category === activeFilter);

  const featuredInsights = insights.filter(i => i.featured);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: category.toLowerCase().replace(/\s+/g, '-') });
    }
  };

  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: '#f7f6f5',
          padding: 'var(--hero-pad-top) 0 var(--hero-pad-bottom)',
          marginTop: 'var(--nav-height)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          {/* Breadcrumb */}
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
            <span style={{ color: '#221f1f' }}>Insights</span>
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
              lineHeight: 1.05,
            }}
          >
            Insights.
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
            Case studies from live deployments, regulatory analysis, and technical thinking from the Image Angel team.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ backgroundColor: '#ffffff', padding: '28px 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '10px 24px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: activeFilter === category ? '#221f1f' : '#f5f5f5',
                  color: activeFilter === category ? '#ffffff' : '#221f1f',
                  transition: 'all 200ms',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== category) {
                    e.currentTarget.style.backgroundColor = '#e0e0e0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category) {
                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights Grid */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <h2
            className="mb-8"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Interested in What This Looks Like in Production?
          </h2>

          <Link to="/contact">
            <button
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
            >
              TALK TO OUR TEAM
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

function InsightCard({ insight, featured = false }: { insight: any; featured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 200ms',
        boxShadow: isHovered ? '0 10px 25px rgba(0,0,0,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden' }}>
        <ImageWithFallback
          src={insight.imageUrl}
          alt={insight.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 500ms',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            backgroundColor: insight.category === 'Case Studies' ? '#f85838' : insight.category === 'Press' ? '#221f1f' : '#8f877d',
            color: '#ffffff',
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            padding: '6px 12px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          {insight.category === 'Case Studies' ? 'CASE STUDY' : insight.category.toUpperCase()}
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        <h3
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '24px',
            fontWeight: 700,
            color: '#221f1f',
            marginBottom: '12px',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {insight.title}
        </h3>

        <p
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#6e6c6a',
            lineHeight: 1.6,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {insight.excerpt}
        </p>

        <div
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#8f877d',
          }}
        >
          {insight.date} · {insight.readTime}
        </div>
      </div>
    </div>
  );

  // External links (press articles)
  if (insight.external) {
    return (
      <a
        href={insight.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {CardContent}
      </a>
    );
  }

  // Internal links (case studies)
  return (
    <Link
      to={insight.link}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {CardContent}
    </Link>
  );
}