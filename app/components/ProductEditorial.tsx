export default function ProductEditorial() {
  return (
    <section id="product-editorial" style={{
      background: '#FFFFFF',
      padding: '120px 80px 0',
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
              color: '#9A9A96', display: 'block', marginBottom: '16px',
            }}>AESTHETIC DIRECTION</span>
            <h2 style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(35px, 4.4vw, 62px)',
              lineHeight: 0.88, letterSpacing: '-0.01em',
              textTransform: 'uppercase', color: '#0F0F0F',
            }}>WE KNOW WHAT GOOD CLOTHES LOOK LIKE.</h2>
          </div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            fontSize: '13px', lineHeight: 1.85,
            color: '#5A5A56',
            maxWidth: '280px', textAlign: 'right',
          }}>Our team moves in the same aesthetic world as the brands we work with. That understanding is present in every development decision — not just the ones that are obvious.</p>
        </div>

      </div>

      {/* Full-bleed image 1 — light editorial */}
      <div style={{
        width: '100%',
        aspectRatio: '3/2',
        background: '#E8E8E4',
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 300, fontSize: '8px',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(15,15,15,0.15)',
        }}>PRECISION TAILORING · FW26</span>
      </div>

      {/* Full-bleed image 2 — dark factory */}
      <div style={{
        width: '100%',
        aspectRatio: '3/2',
        background: '#1C1C1C',
        position: 'relative',
        marginTop: '3px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 300, fontSize: '8px',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.15)',
        }}>FACTORY FLOOR · VIETNAM</span>
      </div>

    </section>
  )
}
