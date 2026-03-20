export default function Stats() {
  const stats = [
    { n: '25+',   l: 'YEARS IN\nOPERATION' },
    { n: '8.8M',  l: 'PIECES PER\nMONTH' },
    { n: '172',   l: 'PRODUCTION\nLINES' },
    { n: '12K+',  l: 'SKILLED\nWORKERS' },
    { n: '7',     l: 'PRODUCTION\nFACILITIES' },
  ]

  return (
    <section style={{
      background: '#0F0F0F',
    }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: '64px 32px',
            borderRight: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 400, fontSize: 'clamp(52px, 5vw, 72px)',
              lineHeight: 1, letterSpacing: '-0.02em',
              color: '#FFFFFF', marginBottom: '12px',
            }}>{s.n}</div>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 300, fontSize: '8px',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)', whiteSpace: 'pre-line', lineHeight: 1.6,
            }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
