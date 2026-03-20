export default function FullBleed({
  bg = '#1C1C1C',
  label = '',
  aspect = '16/9',
  light = false,
}: {
  bg?: string
  label?: string
  aspect?: string
  light?: boolean
}) {
  return (
    <div style={{ width: '100%', background: bg, aspectRatio: aspect, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '24px 80px' }}>
      {label && (
        <span style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 300, fontSize: '8px',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: light ? 'rgba(15,15,15,0.25)' : 'rgba(255,255,255,0.2)',
        }}>{label}</span>
      )}
    </div>
  )
}
