export default function Footer() {
  return (
    <footer style={{
      background: '#0F0F0F',
      padding: '72px 80px',
      display: 'flex',
      flexDirection: 'column', alignItems: 'center', gap: '14px',
    }}>
      <span style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 400, fontSize: '16px',
        letterSpacing: '0.52em', textTransform: 'uppercase',
        color: '#FFFFFF',
      }}>MIAN GROUP</span>

      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: 300, fontSize: '8.5px',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)',
      }}>FULL-SERVICE MANUFACTURING PARTNER · VIETNAM</span>

      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: 300, fontSize: '8.5px',
        letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.18)',
      }}>mianapparel.com &nbsp;·&nbsp; sourcing@mianapparel.com</span>

      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: 300, fontSize: '8px',
        letterSpacing: '0.1em',
        color: 'rgba(255,255,255,0.1)',
        marginTop: '8px',
      }}>© 2026 MIAN Group. All rights reserved.</span>
    </footer>
  )
}
