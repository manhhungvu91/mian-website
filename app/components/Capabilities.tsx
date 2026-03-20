export default function Capabilities() {
  const caps = [
    {
      number: '01',
      title: 'SAMPLE IN\n72 HOURS',
      body: '500 pieces or 500,000. Physical sample from approved tech pack in 72 hours. The system exists. The team is ready. The capacity is there.',
    },
    {
      number: '02',
      title: 'DIGITAL\nDEVELOPMENT',
      body: 'CLO3D and Style 3D development cuts average sample rounds to under two. Fit resolved before fabric is touched. Faster to market. Considerably less waste.',
    },
    {
      number: '03',
      title: 'FULL VERTICAL\nINTEGRATION',
      body: 'Sourcing, development, washing, dyeing, printing, delivery. One roof. One partner. Nothing lost between the design intention and what arrives.',
    },
    {
      number: '04',
      title: 'BEYOND THE\nBRIEF',
      body: 'We understand margin pressure, seasonal planning, and what happens when a product misses. The conversation is more useful because of it.',
    },
  ]

  return (
    <section id="capabilities" style={{
      background: '#FFFFFF',
      padding: '0 80px 160px',
      borderTop: '1px solid #E8E8E4',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ padding: '80px 0 64px' }}>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 400, fontSize: '9px',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#9A9A96', display: 'block', marginBottom: '12px',
          }}>HOW WE WORK</span>
        </div>

        {/* Capabilities list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {caps.map((cap, i) => (
            <div key={i} className="cap-row" style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr',
              gap: '48px',
              padding: '52px 0',
              borderTop: '1px solid #E8E8E4',
              alignItems: 'start',
            }}>
              {/* Number */}
              <span style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10px', letterSpacing: '0.2em',
                color: '#C8C8C3', paddingTop: '8px',
              }}>{cap.number}</span>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(32px, 3.5vw, 52px)',
                lineHeight: 0.9, letterSpacing: '-0.01em',
                textTransform: 'uppercase', color: '#0F0F0F',
                whiteSpace: 'pre-line',
              }}>{cap.title}</h3>

              {/* Body */}
              <p style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '14px', lineHeight: 1.85,
                color: '#5A5A56', maxWidth: '420px',
                paddingTop: '6px',
              }}>{cap.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
