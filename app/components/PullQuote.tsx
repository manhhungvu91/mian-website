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
    <section style={{ width: '100%', background: '#0D0D0B', padding: isMobile ? '72px 28px' : '112px 80px' }}>
      <blockquote
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 4.5vw, 52px)',
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.15,
          color: '#F5F5F3',
          maxWidth: '820px',
          margin: 0,
        }}
      >
        &ldquo;Most manufacturers execute your specs. We help you{' '}
        <span style={{ color: '#E8BE6A' }}>build them</span> — at any scale,
        from any starting point.&rdquo;
      </blockquote>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '9px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#8A8A86',
          marginTop: '28px',
        }}
      >
        MIAN Apparel · Full-Service Manufacturing
      </p>
    </section>
  );
}
