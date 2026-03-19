'use client';

import { useEffect, useState } from 'react';

export default function PullQuote() {
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
        width: '100%',
        background: 'var(--ink)',
        padding: isMobile ? '140px 32px' : '140px 80px',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: '120px',
            lineHeight: 0,
            color: 'var(--camel)',
            opacity: 0.4,
            display: 'block',
            marginBottom: '-40px',
          }}
        >
          &ldquo;
        </span>

        <blockquote
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? 'clamp(28px, 5vw, 40px)' : 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: 1.15,
            color: 'var(--parchment)',
            maxWidth: '820px',
            margin: 0,
          }}
        >
          Most manufacturers execute your specs. We help you build them — at any scale, from any starting point.
        </blockquote>

        <div style={{ marginTop: '36px' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '9px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--stone-3)',
            }}
          >
            MIAN Apparel · Full-Service Manufacturing
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: '11px',
              letterSpacing: '0.01em',
              color: 'var(--stone-2)',
              marginTop: '6px',
            }}
          >
            — Vu Manh Hung, Deputy CEO
          </p>
        </div>
      </div>
    </section>
  );
}
