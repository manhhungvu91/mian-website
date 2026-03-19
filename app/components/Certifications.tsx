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
    <section
      style={{
        width: '100%',
        background: 'var(--ink)',
        padding: isMobile ? '140px 32px' : '140px 80px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '8px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--stone-3)',
              marginBottom: '16px',
            }}
          >
            Compliance &amp; Certification
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : '36px',
              color: 'var(--parchment)',
              lineHeight: 1.05,
            }}
          >
            Built to the world&apos;s most demanding standards.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '28px',
          }}
        >
          {certs.map((cert) => (
            <span
              key={cert}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '13px',
                letterSpacing: '0.01em',
                color: 'rgba(242,237,230,0.7)',
              }}
            >
              {cert}
            </span>
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: '14px',
            letterSpacing: '0.01em',
            color: 'var(--stone-3)',
            lineHeight: 1.8,
            marginTop: '80px',
            maxWidth: '520px',
          }}
        >
          MIAN holds active certifications across social compliance, customs security, environmental standards, and worker welfare — renewed annually and available for audit upon request.
        </p>
      </div>
    </section>
  );
}
