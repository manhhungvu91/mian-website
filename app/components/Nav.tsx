'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['studio', 'capabilities', 'product-editorial', 'inquire']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const links = [
    { label: 'STUDIO', href: '#studio' },
    { label: 'PROCESS', href: '#capabilities' },
    { label: 'WORK', href: '#product-editorial' },
    { label: 'INQUIRY', href: '#inquire' },
  ]

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '52px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 56px',
        background: scrolled ? 'rgba(15,15,15,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 300ms ease-out, backdrop-filter 300ms ease-out',
      }}>
        <a href="/" style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 500, fontSize: '16px',
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: '#FFFFFF',
        }}>MIAN</a>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {links.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={label}
                href={href}
                onClick={e => { e.preventDefault(); handleLinkClick(href) }}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 400, fontSize: '9px',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)',
                  transition: 'color 150ms ease-out',
                  borderBottom: isActive ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)' }}
                onMouseLeave={e => { e.currentTarget.style.color = isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.4)' }}
              >{label}</a>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-nav-btn"
          onClick={() => setMenuOpen(true)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '8px', flexDirection: 'column',
            gap: '5px', alignItems: 'flex-end',
          }}
          aria-label="Open menu"
        >
          {[20, 14, 20].map((w, i) => (
            <span key={i} style={{
              display: 'block', width: `${w}px`, height: '1.5px',
              background: 'rgba(255,255,255,0.7)',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(15,15,15,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: '20px', right: '24px',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Archivo', sans-serif",
              fontSize: '28px', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1,
            }}
          >×</button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={e => { e.preventDefault(); handleLinkClick(href) }}
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 400, fontSize: '28px',
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >{label}</a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
          nav { padding: 0 24px !important; }
        }
      `}</style>
    </>
  )
}
