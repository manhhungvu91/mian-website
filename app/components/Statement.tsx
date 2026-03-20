export default function Statement() {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '160px 80px',
      borderTop: '1px solid #E8E8E4',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '80px', alignItems: 'end',
        }}>
          {/* The statement */}
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(56px, 8.5vw, 120px)',
            lineHeight: 0.84, letterSpacing: '-0.015em',
            textTransform: 'uppercase', color: '#0F0F0F',
          }}>
            MOST MANUFACTURERS<br />
            EXECUTE YOUR SPECS.<br />
            WE HELP YOU BUILD<br />
            THEM — AT ANY SCALE,<br />
            FROM ANY STARTING<br />
            POINT.
          </h2>

          {/* Attribution */}
          <div style={{ paddingBottom: '12px', textAlign: 'right', flexShrink: 0 }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 300, fontSize: '9px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#9A9A96', display: 'block',
            }}>VU MANH HUNG</span>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 300, fontSize: '9px',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#C8C8C3', display: 'block', marginTop: '4px',
            }}>DEPUTY CEO · MIAN GROUP</span>
          </div>
        </div>
      </div>
    </section>
  )
}
