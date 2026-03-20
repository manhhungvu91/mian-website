export default function Certifications() {
  const certs = ['WRAP', 'Higg FEM Index', 'Fair Trade', 'C-TPAT', 'BetterWork Vietnam', 'Sedex SMETA']

  return (
    <section style={{
      background: '#0F0F0F',
      padding: '120px 80px 120px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr',
          gap: '80px', alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 400, fontSize: '9px',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '16px',
            }}>COMPLIANCE</span>
            <h3 style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 400, fontSize: 'clamp(24px, 2.8vw, 36px)',
              lineHeight: 0.9, textTransform: 'uppercase',
              color: '#FFFFFF', marginBottom: '24px',
            }}>BUILT TO THE<br />WORLD&apos;S MOST<br />DEMANDING<br />STANDARDS.</h3>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '13px', lineHeight: 1.8,
              color: 'rgba(255,255,255,0.35)',
            }}>Active certifications across social compliance, environmental standards, and worker welfare. Full documentation on request.</p>
          </div>

          {/* Right — cert grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
          }}>
            {certs.map((cert, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, fontSize: '13px',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.02em',
                }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
