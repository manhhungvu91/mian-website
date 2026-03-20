export default function Capabilities() {
  const caps = [
    {
      number: '01',
      title: 'SAMPLE IN\n72 HOURS',
      body: '500 pieces or 50,000. From an approved tech pack to a physical sample in 72 hours. We have the system, the team, and the production capacity to match any timeline your brand needs.',
    },
    {
      number: '02',
      title: 'DIGITAL\nDEVELOPMENT',
      body: 'CLO3D and Style 3D digital development reduces your sample rounds from four to an average of 1.8. Every fit issue resolved before fabric is cut. Faster to market. Less waste. Fewer surprises.',
    },
    {
      number: '03',
      title: 'FULL VERTICAL\nINTEGRATION',
      body: 'Fabric sourcing, development, washing, dyeing, printing, and final delivery — all under one roof. One partner. Full control. No broken chain between your design intention and the finished garment.',
    },
    {
      number: '04',
      title: 'BEYOND\nFOB PRICING',
      body: 'Our executives think in retail margins and brand calendars, not just CM rates. We understand the distribution pressure you are managing, the sell-through uncertainty, and what it costs when a product is wrong.',
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
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
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
