'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '52px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 56px',
      background: scrolled ? 'rgba(15,15,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      transition: 'background 300ms ease-out, backdrop-filter 300ms ease-out',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
    }}>
      {/* Wordmark */}
      <a href="/" style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700, fontSize: '18px',
        letterSpacing: '0.42em', textTransform: 'uppercase',
        color: '#FFFFFF',
      }}>MIAN</a>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {[['STUDIO', '#studio'], ['WORK', '#capabilities'], ['INQUIRE', '#inquire']].map(([label, href]) => (
          <a key={label} href={href} style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 400, fontSize: '9px',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            transition: 'color 150ms ease-out',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >{label}</a>
        ))}
      </div>
    </nav>
  )
}
