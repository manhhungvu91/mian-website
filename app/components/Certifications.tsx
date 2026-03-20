export default function Certifications() {
  const certs = ['WRAP', 'Higg FEM Index', 'Fair Trade', 'C-TPAT', 'BetterWork Vietnam', 'Sedex SMETA']

  return (
    <section style={{
      background: '#FFFFFF',
      padding: '120px 80px',
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
              color: '#9A9A96', display: 'block', marginBottom: '16px',
            }}>COMPLIANCE</span>
            <h3 style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400, fontSize: 'clamp(26px, 3.1vw, 40px)',
              lineHeight: 0.9, textTransform: 'uppercase',
              color: '#0F0F0F', marginBottom: '24px',
            }}>BUILT TO THE<br />WORLD&apos;S MOST<br />DEMANDING<br />STANDARDS.</h3>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '13px', lineHeight: 1.8,
              color: '#9A9A96',
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
                borderTop: '1px solid rgba(15,15,15,0.06)',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(15,15,15,0.06)' : 'none',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400, fontSize: '13px',
                  color: '#5A5A56',
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
