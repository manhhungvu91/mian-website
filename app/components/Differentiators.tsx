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
      number: '01',
      titleFirst: 'MOQ ',
      titleItalic: 'Flexibility',
      body: '300 pieces or 500,000 — we scale with you. No brand too small. No volume too large.',
      tag: 'Key differentiator →',
    },
    {
      number: '02',
      titleFirst: 'Sample ',
      titleItalic: 'Development',
      body: 'Physical and digital sampling in-house — we work in CLO3D and Style 3D. Fewer rounds, faster approvals, speed to market.',
      tag: 'Innovation proof →',
    },
    {
      number: '03',
      titleFirst: 'Vertical ',
      titleItalic: 'Integration',
      body: 'Fabric sourcing, development, bulk production, washing, dyeing, printing and delivery — all under one roof. One partner, full control.',
      tag: 'Operational proof →',
    },
    {
      number: '04',
      titleFirst: 'Sustainability ',
      titleItalic: 'Efforts',
      body: 'We are actively investing in a cleaner operation — solar roofing installation underway, transitioning to more sustainable boiler systems, and verified by Higg, Fair Trade, and BetterWork.',
      tag: 'Proof not promise →',
    },
  ];

  return (
    <section style={{ width: '100%', background: '#EDEDEA', padding: isMobile ? '64px 28px' : '112px 80px' }}>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'flex-end',
          marginBottom: '64px',
        }}
      >
        <div>
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
            What Sets Us Apart
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: isMobile ? 'clamp(32px, 8vw, 42px)' : '42px',
              color: '#0D0D0B',
              lineHeight: 1.05,
            }}
          >
            Four Reasons Buyers Choose MIAN
          </h2>
        </div>

        {!isMobile && (
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '14px',
              color: '#6E6E6A',
              maxWidth: '300px',
              textAlign: 'right',
              lineHeight: 1.75,
            }}
          >
            From digital development to full vertical integration — we are built differently from every other factory in Vietnam.
          </p>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '3px',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.number}
            style={{
              background: '#F5F5F3',
              border: '0.5px solid rgba(13,13,11,0.08)',
              padding: isMobile ? '32px 28px' : '48px',
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8A8A86',
                marginBottom: '16px',
              }}
            >
              {card.number}
            </p>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: isMobile ? '22px' : '26px',
                color: '#0D0D0B',
                marginBottom: '12px',
                lineHeight: 1.05,
              }}
            >
              {card.titleFirst}<em style={{ fontStyle: 'italic' }}>{card.titleItalic}</em>
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '15px',
                color: '#4A4A47',
                lineHeight: 1.75,
              }}
            >
              {card.body}
            </p>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '10px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C8941A',
                border: '0.5px solid rgba(200,148,26,0.35)',
                padding: '5px 12px',
                display: 'inline-block',
                marginTop: '16px',
              }}
            >
              {card.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
