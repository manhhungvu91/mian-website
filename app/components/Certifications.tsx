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
    'WRAP',
    'Higg Index',
    'Fair Trade',
    'C-TPAT',
    'BetterWork',
    'Sedex SMETA',
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
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '48px',
        }}
      >
        {certs.map((cert) => (
          <span
            key={cert}
            style={{
              background: 'rgba(245,245,243,0.06)',
              border: '0.5px solid rgba(245,245,243,0.2)',
              padding: '6px 16px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '13px',
              color: '#B8B4AA',
              whiteSpace: 'nowrap',
            }}
          >
            {cert}
          </span>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '14px',
          color: '#8A8A86',
          lineHeight: 1.75,
          marginTop: '48px',
        }}
      >
        MIAN holds active certifications across social compliance, customs security, environmental standards, and worker welfare — renewed annually and available for audit upon request.
      </p>
    </section>
  );
}
