'use client';

import { useEffect, useState } from 'react';

export default function Differentiators() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const cards = [
    {
      titleFirst: 'MOQ ',
      titleItalic: 'Flexibility',
      body: '300 pieces or 500,000 — we scale with you. No brand too small. No volume too large.',
    },
    {
      titleFirst: 'Sample ',
      titleItalic: 'Development',
      body: 'Physical and digital sampling in-house — we work in CLO3D and Style 3D. Fewer rounds, faster approvals, speed to market.',
    },
    {
      titleFirst: 'Vertical ',
      titleItalic: 'Integration',
      body: 'Fabric sourcing, development, bulk production, washing, dyeing, printing and delivery — all under one roof. One partner, full control.',
    },
    {
      titleFirst: 'Sustainability ',
      titleItalic: 'Efforts',
      body: 'We are actively investing in a cleaner operation — solar roofing installation underway, transitioning to more sustainable boiler systems, and verified by Higg, Fair Trade, and BetterWork.',
    },
  ];

  const cardBg = ['var(--parchment)', 'var(--parchment-2)', 'var(--parchment)', 'var(--parchment-2)'];

  return (
    <section
      style={{
        width: '100%',
        background: 'var(--parchment-3)',
        padding: isMobile ? '140px 0' : '140px 0',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: isMobile ? '0 32px' : '0 80px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'flex-end',
            marginBottom: '80px',
          }}
        >
          <div>
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
              What Sets Us Apart
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: isMobile ? 'clamp(32px, 8vw, 42px)' : '42px',
                color: 'var(--ink)',
                lineHeight: 1.05,
              }}
            >
              Four Reasons Buyers Choose MIAN
            </h2>
          </div>

          {!isMobile && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.01em',
                color: 'var(--stone-2)',
                maxWidth: '320px',
                textAlign: 'right',
                lineHeight: 1.8,
              }}
            >
              From digital development to full vertical integration — we are built differently from every other factory in Vietnam.
            </p>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1px',
        }}
      >
        {cards.map((card, i) => (
          <div
            key={card.titleItalic}
            style={{
              background: cardBg[i],
              padding: isMobile ? '56px 32px' : '56px',
            }}
          >
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: '26px',
                color: 'var(--ink)',
                marginBottom: '20px',
                lineHeight: 1.05,
              }}
            >
              {card.titleFirst}{card.titleItalic}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.01em',
                color: 'var(--stone)',
                lineHeight: 1.8,
                maxWidth: '520px',
              }}
            >
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
