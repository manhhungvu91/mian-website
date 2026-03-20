export default function ProductEditorial() {
  const items = [
    { label: 'PRECISION TAILORING', sub: 'Compact stretch wool · FW26', tone: '#1A1A1A' },
    { label: 'TECHNICAL OUTERWEAR', sub: 'Bonded ripstop · SS26', tone: '#2E2E2A' },
    { label: 'RELAXED TAILORING', sub: 'Washed linen · Core', tone: '#3A3630' },
    { label: 'CONTEMPORARY CASUAL', sub: 'Organic terry · SS26', tone: '#262624' },
  ]

  return (
    <section style={{
      background: '#0F0F0F',
      padding: '120px 80px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '64px',
        }}>
          <div>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 400, fontSize: '9px',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '16px',
            }}>AESTHETIC DIRECTION</span>
            <h2 style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 0.88, letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: '#FFFFFF',
            }}>WE KNOW WHAT GOOD CLOTHES LOOK LIKE.</h2>
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            fontSize: '13px', lineHeight: 1.85,
            color: 'rgba(255,255,255,0.35)',
            maxWidth: '280px', textAlign: 'right',
          }}>Our team moves in the same aesthetic world as the brands we work with. That understanding is present in every development decision — not just the ones that are obvious.</p>
        </div>

        {/* 4-column product grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
        }}>
          {items.map((item, i) => (
            <div key={i}>
              <div style={{
                aspectRatio: '3/4',
                background: item.tone,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(160deg, ${item.tone} 0%, rgba(15,15,15,0.95) 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 300, fontSize: '11px',
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.08)',
                  }}>MIAN</span>
                </div>
              </div>
              <div style={{ padding: '14px 0 0' }}>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 400, fontSize: '8px',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.55)', marginBottom: '4px',
                }}>{item.label}</p>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 300, fontSize: '8px',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.22)',
                }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: '48px', paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 300, fontSize: '8px',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.18)',
          }}>EDITORIAL PHOTOGRAPHY IN PRODUCTION — Q3 2026</p>
        </div>
      </div>
    </section>
  )
}
