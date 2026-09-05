import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component to dynamically update document title, meta tags, canonical link, and JSON-LD schemas.
 */
export default function SEO({
  title = 'Web Development Company in Islamabad | VELIX',
  description = 'VELIX is a web development company in Islamabad building custom websites, React and Next.js applications, ecommerce stores, WordPress sites and SEO-ready digital experiences for businesses worldwide.',
  canonical,
  ogType = 'website',
  ogImage = '/assets/velix-logo-stacked.png',
  schema
}) {
  const location = useLocation();
  const siteUrl = 'https://velix.com';
  const currentUrl = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMetaTag('description', description);
    setMetaTag('robots', 'index, follow');

    // 3. Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'VELIX', true);
    setMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`, true);

    // 4. Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // 6. JSON-LD Schema
    const existingSchema = document.getElementById('jsonld-structured-data');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'jsonld-structured-data';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const schemaElement = document.getElementById('jsonld-structured-data');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [title, description, currentUrl, ogType, ogImage, schema]);

  return null;
}
