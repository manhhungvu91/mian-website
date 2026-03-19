export default function Footer() {
  return (
    <footer
      style={{
        background: '#0D0D0B',
        padding: '48px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#F5F5F3',
        }}
      >
        MIAN
      </span>

      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '11px',
          color: '#4A4A47',
        }}
      >
        Vietnam&apos;s Full-Service Manufacturing Partner
      </span>

      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '11px',
          color: '#4A4A47',
        }}
      >
        mianapparel.com
      </span>
    </footer>
  );
}
