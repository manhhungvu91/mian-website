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
    <section style={{ width: '100%', background: '#C8941A', padding: 0 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)',
          gap: 0,
        }}
      >
        {stats.map((stat, i) => {
          const isLastInRow = isMobile
            ? (i + 1) % 3 === 0 || i === stats.length - 1
            : i === stats.length - 1;

          return (
            <div
              key={stat.label}
              style={{
                padding: '28px 16px',
                textAlign: 'center',
                borderRight: isLastInRow ? 'none' : '0.5px solid rgba(13,13,11,0.12)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: '44px',
                  lineHeight: 1,
                  color: '#0D0D0B',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '8.5px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(13,13,11,0.5)',
                  marginTop: '6px',
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
