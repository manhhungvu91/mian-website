'use client';

import { useEffect, useState } from 'react';

export default function Certifications() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const certs = [
    { badge: 'W', name: 'WRAP' },
    { badge: 'H', name: 'Higg Index' },
    { badge: 'FT', name: 'Fair Trade' },
    { badge: 'CT', name: 'C-TPAT' },
    { badge: 'BW', name: 'BetterWork' },
    { badge: 'SX', name: 'Sedex SMETA' },
  ];

  return (
    <section style={{ width: '100%', background: '#0D0D0B', padding: isMobile ? '64px 28px' : '112px 80px' }}>

      <div style={{ marginBottom: '48px' }}>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: '10px',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: '#8A8A86',
            marginBottom: '12px',
          }}
        >
          Compliance &amp; Certification
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : '36px',
            color: '#F5F5F3',
            lineHeight: 1.05,
          }}
        >
          Built to the world&apos;s most demanding standards.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '3px',
          marginTop: '48px',
        }}
      >
        {certs.map((cert) => (
          <div
            key={cert.badge}
            style={{
              background: '#2E2E2C',
              padding: isMobile ? '18px 20px' : '20px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                background: '#3D3B32',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                fontWeight: 700,
                color: '#8A8A86',
                flexShrink: 0,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {cert.badge}
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                color: '#B8B4AA',
                letterSpacing: '0.04em',
              }}
            >
              {cert.name}
            </span>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '14px',
          color: '#4A4A47',
          lineHeight: 1.75,
          marginTop: '48px',
        }}
      >
        MIAN holds active certifications across social compliance, customs security, environmental standards, and worker welfare — renewed annually and available for audit upon request.
      </p>
    </section>
  );
}
