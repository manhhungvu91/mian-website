export default function Editorial() {
  return (
    <section id="studio" style={{
      background: '#FFFFFF',
      padding: '160px 80px 120px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Top row: label + headline + intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          marginBottom: '100px',
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
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(56px, 7.5vw, 108px)',
              lineHeight: 0.86, letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: '#0F0F0F',
            }}>
              NOT A<br />FACTORY.<br />A STUDIO.
            </h2>
          </div>
          <div style={{ paddingBottom: '8px' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '15px', lineHeight: 1.85, color: '#5A5A56',
              maxWidth: '400px',
            }}>
              MIAN operates at the intersection of fashion literacy and manufacturing precision. Our executives think in brand calendars and retail margins. Our development team works in CLO3D and fabric boards. Our factories deliver 500 pieces in 72 hours or 8.8 million in a month.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '15px', lineHeight: 1.85, color: '#9A9A96',
              maxWidth: '400px', marginTop: '20px',
            }}>
              Vietnam. Global standards. The partner your brand has been looking for.
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
          }}>MIAN GROUP R&amp;D CENTER — DESIGNED BY IDEE ARCHITECTS, 2024</span>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '8px', letterSpacing: '0.2em',
            color: '#C8C8C3', textTransform: 'uppercase',
          }}>FEATURED ON ARCHDAILY</span>
        </div>
      </div>
    </section>
  )
}
