'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pillStyle: React.CSSProperties = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '8px 18px',
    borderRadius: '100px',
    transition: 'background 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease',
    background: scrolled ? 'rgba(13,13,11,0.88)' : 'transparent',
    border: scrolled ? '0.5px solid rgba(245,245,243,0.10)' : '0.5px solid transparent',
    backdropFilter: scrolled ? 'blur(14px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
  };

  const wordmarkStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: '13px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#F5F5F3',
    whiteSpace: 'nowrap',
  };

  const dividerStyle: React.CSSProperties = {
    width: '0.5px',
    height: '14px',
    background: 'rgba(245,245,243,0.18)',
    flexShrink: 0,
  };

  const navLinks = ['Capabilities', 'Products', 'Factories', 'About'];

  return (
    <nav style={pillStyle}>
      {/* Wordmark */}
      <span style={wordmarkStyle}>MIAN</span>

      {/* Divider */}
      <span style={dividerStyle} />

      {/* Nav links — hidden on mobile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
        className="nav-links"
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '10.5px',
              color: 'rgba(245,245,243,0.45)',
              transition: 'opacity 200ms ease-out',
              letterSpacing: '0.04em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                'rgba(245,245,243,0.85)';
              (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                'underline';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                'rgba(245,245,243,0.45)';
              (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                'none';
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Divider — hidden on mobile */}
      <span style={dividerStyle} className="nav-divider" />

      {/* CTA */}
      <a
        href="#inquire"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: '9.5px',
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: '#F5F5F3',
          border: '0.5px solid rgba(245,245,243,0.25)',
          borderRadius: '100px',
          padding: '5px 14px',
          whiteSpace: 'nowrap',
          transition: 'border-color 200ms ease-out',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            'rgba(245,245,243,0.55)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            'rgba(245,245,243,0.25)';
        }}
      >
        Inquire
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-divider { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
