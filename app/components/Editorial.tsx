export default function Editorial() {
  return (
    <section id="studio" style={{
      background: '#FFFFFF',
      padding: '100px 80px 120px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Top row: label + headline + intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
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
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 70px)',
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

        {/* Full-bleed image */}
        <div style={{
          marginLeft: '-80px',
          marginRight: '-80px',
          width: 'calc(100% + 160px)',
          aspectRatio: '16/9',
          background: '#1C1C1C',
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 300, fontSize: '8px',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.2)',
          }}>R&amp;D CENTER · EXTERIOR · IDEE ARCHITECTS 2024</span>
        </div>

        {/* Caption */}
        <p style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 300, fontSize: '8px',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#9A9A96',
          marginTop: '12px',
        }}>MIAN GROUP R&amp;D CENTER — DESIGNED BY IDEE ARCHITECTS, HO CHI MINH CITY, 2024</p>

      </div>
    </section>
  )
}
