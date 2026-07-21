import { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  pageUrl: string;
  activeTab: string;
}

export default function SEOHead({ title, description, keywords, pageUrl, activeTab }: SEOHeadProps) {
  useEffect(() => {
    // Update Meta Title
    document.title = `${title} | Agrawal Medical Hall`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: `${title} | ${BUSINESS_INFO.name}` },
      { property: 'og:description', content: description },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: BUSINESS_INFO.name },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop' }
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Update Twitter Cards
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${title} | ${BUSINESS_INFO.name}` },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop' }
    ];

    twitterTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', tag.name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });

    // Inject JSON-LD Schema Markup
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // 1. Local Business / Pharmacy Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_INFO.name,
      "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop",
      "@id": pageUrl,
      "url": pageUrl,
      "telephone": BUSINESS_INFO.phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pai Bigha",
        "addressLocality": "Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": "804424",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.028678,
        "longitude": 85.031548
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "21:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "sameAs": []
    };

    // 2. FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.slice(0, 5).map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // 3. Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": pageUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
          "item": `${pageUrl}#${activeTab}`
        }
      ]
    };

    // Inject scripts
    const schemas = [localBusinessSchema, faqSchema, breadcrumbSchema];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      const scriptsToRemove = document.querySelectorAll('script[type="application/ld+json"]');
      scriptsToRemove.forEach(script => script.remove());
    };
  }, [title, description, keywords, pageUrl, activeTab]);

  return null;
}
