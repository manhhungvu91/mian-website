export default function Editorial() {
  return (
    <section id="studio" style={{
      background: '#FFFFFF',
      padding: '120px 80px 120px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Top row: label + headline + intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '40px',
          alignItems: 'end',
        }}>
          <div>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 400, fontSize: '9px',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#9A9A96', display: 'block', marginBottom: '20px',
            }}>THE STUDIO</span>
            <h2 style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(36px, 4.5vw, 64px)',
              lineHeight: 0.86, letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: '#0F0F0F',
            }}>
              NOT A FACTORY.<br />A STUDIO.
            </h2>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '14px', lineHeight: 1.85, color: '#5A5A56',
              maxWidth: '400px',
            }}>
              We operate where manufacturing precision meets fashion intelligence. Development, sourcing, production — run by people who understand what the clothes are for.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '14px', lineHeight: 1.85, color: '#9A9A96',
              maxWidth: '400px', marginTop: '20px',
            }}>
              Vietnam. Global standards. Built for brands that take the work seriously.
            </p>
          </div>
        </div>

        {/* Asymmetric image grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '3px',
        }}>
          {/* Large left image — spans 2 rows */}
          <div style={{
            gridRow: '1 / 3',
            aspectRatio: '3/4',
            background: '#E8E8E4',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #D4D4CF 0%, #C8C8C3 100%)',
              display: 'flex', alignItems: 'flex-end', padding: '28px',
            }}>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '8px', letterSpacing: '0.2em',
                color: 'rgba(15,15,15,0.3)', textTransform: 'uppercase',
              }}>R&amp;D CENTER · INTERIOR · 2024</span>
            </div>
          </div>

          {/* Top right image */}
          <div style={{
            aspectRatio: '4/3',
            background: '#EFEFEC',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #E4E4DF 0%, #D8D8D2 100%)',
              display: 'flex', alignItems: 'flex-end', padding: '20px',
            }}>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '8px', letterSpacing: '0.2em',
                color: 'rgba(15,15,15,0.3)', textTransform: 'uppercase',
              }}>SAMPLE DEVELOPMENT</span>
            </div>
          </div>

          {/* Bottom right image */}
          <div style={{
            aspectRatio: '4/3',
            background: '#1C1C1C',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #222222 0%, #181818 100%)',
              display: 'flex', alignItems: 'flex-end', padding: '20px',
            }}>
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '8px', letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase',
              }}>FACTORY FLOOR · VIETNAM</span>
            </div>
          </div>
        </div>

        {/* Caption row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', marginTop: '24px',
        }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '8px', letterSpacing: '0.2em',
            color: '#9A9A96', textTransform: 'uppercase',
          }}>MIAN GROUP R&amp;D CENTER — IDEE ARCHITECTS, 2024</span>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '8px', letterSpacing: '0.2em',
            color: '#C8C8C3', textTransform: 'uppercase',
          }}>ARCHDAILY</span>
        </div>
      </div>
    </section>
  )
}
