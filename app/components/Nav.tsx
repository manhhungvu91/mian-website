'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '10px 22px',
        borderRadius: '100px',
        transition: 'all 300ms ease',
        background: scrolled ? 'rgba(13,13,11,0.88)' : 'transparent',
        border: scrolled
          ? '0.5px solid rgba(245,245,243,0.10)'
          : '0.5px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          whiteSpace: 'nowrap',
        }}
      >
        MIAN
      </span>

      {/* Divider */}
      {!isMobile && (
        <div
          style={{
            width: '0.5px',
            height: '12px',
            background: 'rgba(245,245,243,0.18)',
            flexShrink: 0,
          }}
        />
      )}

      {/* Nav links */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {['Capabilities', 'Products', 'Factories', 'About'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '10.5px',
                color: 'rgba(245,245,243,0.45)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 200ms ease-out',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(245,245,243,0.85)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  'rgba(245,245,243,0.45)';
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Divider */}
      {!isMobile && (
        <div
          style={{
            width: '0.5px',
            height: '12px',
            background: 'rgba(245,245,243,0.18)',
            flexShrink: 0,
          }}
        />
      )}

      {/* CTA */}
      <a
        href="#inquire"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: '9.5px',
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          border: '0.5px solid rgba(245,245,243,0.25)',
          borderRadius: '100px',
          padding: '5px 14px',
          background: 'transparent',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          textDecoration: 'none',
        }}
      >
        Inquire
      </a>
    </nav>
  );
}
