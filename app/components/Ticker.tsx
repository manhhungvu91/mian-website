export default function Ticker() {
  return (
    <div
      style={{
        width: '100%',
        background: 'var(--surf-1)',
        padding: '20px 0',
        borderTop: '0.5px solid var(--surf-2)',
        borderBottom: '0.5px solid var(--surf-2)',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: '9px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--grey-3)',
        }}
      >
        ZARA · H&amp;M · COSTCO · WALMART · TARGET · EDDIE BAUER
      </span>
    </div>
  );
}
