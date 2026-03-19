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

  const stats = [
    { number: '8.8M', label: 'pcs per month' },
    { number: '25+', label: 'years' },
    { number: '7', label: 'factories' },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: isMobile ? '100px 28px 48px 28px' : '120px 80px 64px 80px',
      }}
    >
      <div style={{ marginBottom: isMobile ? '36px' : '48px' }}>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--oak)',
            marginBottom: '24px',
          }}
        >
          Vietnam&apos;s Manufacturing Studio
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: isMobile ? '68px' : 'clamp(72px, 12vw, 160px)',
            lineHeight: 1.02,
            color: 'var(--white)',
            marginBottom: '28px',
            textAlign: 'left',
          }}
        >
          Your Full-<br />
          <em style={{ color: '#E8BE6A', fontStyle: 'italic' }}>Service</em><br />
          Partner.
        </h1>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--grey-3)',
            maxWidth: isMobile ? 'none' : '480px',
            textAlign: 'left',
          }}
        >
          From first sketch to final shipment — MOQ-flexible, CLO3D-ready, and trusted by Zara, H&amp;M, and Costco.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'flex-start' : 'space-between',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          gap: isMobile ? '24px' : '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '12px',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          <a
            href="#inquire"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '11.5px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--black)',
              background: 'var(--white)',
              borderRadius: '0',
              padding: '14px 32px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              display: 'block',
            }}
          >
            Start a Sourcing Inquiry
          </a>
          <a
            href="#capabilities"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '11.5px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--white)',
              background: 'transparent',
              border: '0.5px solid rgba(245,245,243,0.25)',
              borderRadius: '0',
              padding: '14px 32px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              display: 'block',
            }}
          >
            See Capabilities →
          </a>
        </div>

        <div style={{ display: 'flex', gap: isMobile ? '24px' : '48px', alignItems: 'flex-end' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: '34px',
                  color: '#F5F5F3',
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(245,245,243,0.35)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
