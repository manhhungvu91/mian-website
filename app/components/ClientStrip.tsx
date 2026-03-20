export default function ClientStrip() {
  const clients = ['ZARA', 'H&M', 'COSTCO', 'WALMART', 'TARGET', 'EDDIE BAUER']
  return (
    <section style={{
      background: '#0F0F0F',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '20px 0',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', gap: '48px',
        flexWrap: 'wrap', padding: '0 40px',
      }}>
        {clients.map(c => (
          <span key={c} style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 300, fontSize: '9px',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.22)',
          }}>{c}</span>
        ))}
      </div>
    </section>
  )
}
