export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--black)',
        padding: '64px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--white)',
        }}
      >
        MIAN
      </span>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '10px',
          letterSpacing: '0.1em',
          color: 'var(--grey-3)',
        }}
      >
        Vietnam&apos;s Full-Service Manufacturing Partner
      </span>

      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '10px',
          letterSpacing: '0.01em',
          color: 'var(--grey-3)',
        }}
      >
        mianapparel.com · sourcing@mianapparel.com
      </span>
    </footer>
  );
}
