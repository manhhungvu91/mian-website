'use client'
export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      width: '100%', height: '100vh', minHeight: '640px',
      background: '#0F0F0F',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Background placeholder — replace with R&D Center photo when available */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(165deg, #1A1A1A 0%, #0F0F0F 60%, #1C1810 100%)',
      }} />

      {/* Dark gradient overlay — bottom-weighted so text is always legible */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(15,15,15,0.1) 0%, rgba(15,15,15,0.5) 50%, rgba(15,15,15,0.88) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1400px', margin: '0 auto', width: '100%',
        padding: '0 80px 88px',
      }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 300, fontSize: '9px',
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          marginBottom: '16px',
        }}>VIETNAM · EST. 2000</p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 400,
          fontSize: 'clamp(44px, 6.5vw, 88px)',
          lineHeight: 0.92,
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          marginBottom: '36px',
        }}>
          WHERE FASHION IS MADE.
        </h1>

        {/* Data line */}
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 300, fontSize: '9.5px',
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: '40px',
        }}>7 FACTORIES · 172 PRODUCTION LINES · 8.8M PCS MONTHLY</p>

        {/* CTA */}
        <a href="#inquire" style={{
          display: 'inline-block',
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 500, fontSize: '10px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.22)',
          padding: '13px 32px',
          transition: 'border-color 150ms ease-out, color 150ms ease-out',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#4A6FA5'
          e.currentTarget.style.color = '#4A6FA5'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
          e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
        }}>BEGIN AN INQUIRY</a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', right: '56px', zIndex: 2,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '8px', letterSpacing: '0.2em',
        color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase',
        writingMode: 'vertical-rl',
      }}>SCROLL</div>
    </section>
  )
}
