export default function RDCenter() {
  return (
    <section style={{
      background: '#0F0F0F',
      padding: '160px 80px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '72px' }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 400, fontSize: '9px',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '16px',
          }}>THE CENTER</span>
          <h2 style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(48px, 6vw, 80px)',
            lineHeight: 0.88, letterSpacing: '-0.01em',
            textTransform: 'uppercase', color: '#FFFFFF',
            maxWidth: '800px',
          }}>MIAN GROUP<br />R&amp;D CENTER</h2>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '3px', alignItems: 'start',
        }}>
          {/* Large image — R&D exterior */}
          <div style={{
            aspectRatio: '16/10',
            background: '#1C1C1C',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(160deg, #1E2028 0%, #0F0F12 100%)',
              display: 'flex', alignItems: 'flex-end', padding: '28px',
            }}>
              <div>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '8px', letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase',
                  marginBottom: '4px',
                }}>MIAN GROUP R&amp;D CENTER</p>
                <p style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '8px', letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.12)', textTransform: 'uppercase',
                }}>IDEE ARCHITECTS · HO CHI MINH CITY · 2024</p>
              </div>
            </div>
          </div>

          {/* Right column — interior + data */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {/* Interior image */}
            <div style={{
              aspectRatio: '4/3',
              background: '#1A1A16',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(140deg, #1E1C14 0%, #141410 100%)',
                display: 'flex', alignItems: 'flex-end', padding: '20px',
              }}>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '8px', letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase',
                }}>INTERIOR · DOUBLE-HEIGHT LOBBY</span>
              </div>
            </div>

            {/* Text block */}
            <div style={{
              background: '#181818',
              padding: '36px 32px',
              flex: 1,
            }}>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '13.5px', lineHeight: 1.85,
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '28px',
              }}>
                Designed by Idee Architects, completed in 2024. Sample rooms, showroom, commercial offices, and meeting suites — built to the standard of the work that happens inside them.
              </p>

              {/* Data points */}
              {[
                ['2024', 'YEAR COMPLETED'],
                ['IDEE ARCHITECTS', 'DESIGNED BY'],
                ['HO CHI MINH CITY', 'LOCATION'],
              ].map(([val, label]) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'baseline', padding: '12px 0',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <span style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 400, fontSize: '16px',
                    letterSpacing: '0.02em', color: '#FFFFFF',
                    textTransform: 'uppercase',
                  }}>{val}</span>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 300, fontSize: '8px',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                  }}>{label}</span>
                </div>
              ))}

              {/* ArchDaily credit */}
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 300, fontSize: '8px',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.15)',
                marginTop: '24px',
              }}>Featured on ArchDaily · archdaily.com/1026064</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
