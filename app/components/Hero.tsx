'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: isMobile
          ? '120px 32px 140px 32px'
          : '120px 80px 140px 80px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: isMobile ? '48px' : '64px' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '8px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--oak)',
              marginBottom: '28px',
            }}
          >
            Vietnam&apos;s Manufacturing Studio
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: isMobile ? '72px' : 'clamp(80px, 13vw, 168px)',
              lineHeight: 0.85,
              letterSpacing: '-0.03em',
              color: 'var(--white)',
              marginBottom: '40px',
            }}
          >
            Your Full-<br />
            <em style={{ fontStyle: 'italic' }}>Service</em><br />
            Partner.
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: 1.8,
              letterSpacing: '0.01em',
              color: 'var(--grey-3)',
              maxWidth: '520px',
            }}
          >
            From first sketch to final shipment — MOQ-flexible, CLO3D-ready, and trusted by Zara, H&amp;M, and Costco.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <a
            href="#inquire"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--black)',
              background: 'var(--white)',
              padding: '14px 32px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'opacity 200ms ease-out',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
          >
            Start an Inquiry
          </a>

          <div style={{ display: 'flex', gap: isMobile ? '28px' : '48px', alignItems: 'flex-end' }}>
            {['8.8M', '25+', '7'].map((number) => (
              <span
                key={number}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: '22px',
                  color: 'var(--white)',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                }}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
