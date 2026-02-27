import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

/**
 * STRUCTURED DATA & NAVIGATION: Breadcrumb component
 * Consistent positioning across all pages
 * Includes JSON-LD BreadcrumbList schema
 */

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const enterEasing = [0, 0, 0.2, 1] as const;

export function Breadcrumb({ items }: BreadcrumbProps) {
  const siteUrl = 'https://imageangel.com';

  // Generate JSON-LD structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      ...items.slice(0, -1).map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${siteUrl}${item.path}`,
      })),
      {
        '@type': 'ListItem',
        position: items.length + 1,
        name: items[items.length - 1].label,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: enterEasing }}
        className="mb-6"
        aria-label="Breadcrumb"
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#767270',
        }}
      >
        <ol
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                color: '#767270',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#221f1f')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#767270')}
            >
              Home
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ margin: '0 8px', color: '#767270' }}>/</span>
              {item.path && index !== items.length - 1 ? (
                <Link
                  to={item.path}
                  style={{
                    color: '#767270',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#221f1f')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#767270')}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: '#221f1f', fontWeight: 500 }} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </motion.nav>
    </>
  );
}
