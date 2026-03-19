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
        padding: '8px 20px',
        borderRadius: '100px',
        transition: 'background 300ms ease-out, border-color 300ms ease-out, backdrop-filter 300ms ease-out',
        background: scrolled ? 'rgba(26,23,20,0.88)' : 'transparent',
        border: scrolled ? '0.5px solid rgba(242,237,230,0.10)' : '0.5px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--parchment)',
          whiteSpace: 'nowrap',
        }}
      >
        MIAN
      </span>

      {!isMobile && (
        <div
          style={{
            width: '0.5px',
            height: '10px',
            background: 'rgba(242,237,230,0.18)',
            flexShrink: 0,
          }}
        />
      )}

      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {['Capabilities', 'Products', 'Factories', 'About'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(242,237,230,0.7)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 200ms ease-out',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {!isMobile && (
        <div
          style={{
            width: '0.5px',
            height: '10px',
            background: 'rgba(242,237,230,0.18)',
            flexShrink: 0,
          }}
        />
      )}

      <a
        href="#inquire"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '9px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--parchment)',
          border: '0.5px solid rgba(242,237,230,0.35)',
          borderRadius: '100px',
          padding: '8px 20px',
          background: 'transparent',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          textDecoration: 'none',
          transition: 'opacity 200ms ease-out',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
      >
        Inquire
      </a>
    </nav>
  );
}
