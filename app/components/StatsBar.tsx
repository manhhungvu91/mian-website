'use client';

import { useEffect, useState } from 'react';

const stats = [
  { number: '25+', label: 'Years in operation' },
  { number: '8.8M', label: 'Pcs per month' },
  { number: '172', label: 'Production lines' },
  { number: '12K+', label: 'Workers' },
  { number: '7', label: 'Factories' },
];

export default function StatsBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ width: '100%', background: 'var(--black)', padding: 0 }}>
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)',
          gap: 0,
        }}
      >
        {stats.map((stat, i) => {
          const isLastCol = isMobile
            ? (i + 1) % 3 === 0 || i === stats.length - 1
            : i === stats.length - 1;
          return (
            <div
              key={stat.label}
              style={{
                padding: isMobile ? '56px 16px' : '80px 20px',
                textAlign: 'center',
                borderRight: isLastCol ? 'none' : '0.5px solid rgba(245,245,243,0.08)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  fontSize: isMobile ? '40px' : '52px',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: 'var(--white)',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: '8px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,245,243,0.4)',
                  marginTop: '10px',
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
