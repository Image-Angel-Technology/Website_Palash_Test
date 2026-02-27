import { Helmet } from 'react-helmet-async';
import faviconImage from 'figma:asset/45854d4fa5281abfccf991d5a0201158fda25a5e.png';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export function SEO({
  title,
  description,
  path,
  image = 'https://imageangel.com/og-image.jpg',
  type = 'website',
  publishedTime,
  author,
}: SEOProps) {
  const siteUrl = 'https://imageangel.com';
  const canonical = `${siteUrl}${path}`;
  const fullTitle = `${title} | Image Angel`;

  return (
    <Helmet>
      {/* Favicon */}
      <link rel="icon" type="image/png" href={faviconImage} />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Image Angel" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
}