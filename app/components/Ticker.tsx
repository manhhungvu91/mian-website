export default function Ticker() {
  return (
    <div
      style={{
        width: '100%',
        background: 'var(--parchment-2)',
        padding: '20px 0',
        borderTop: '0.5px solid var(--parchment-3)',
        borderBottom: '0.5px solid var(--parchment-3)',
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
          color: 'var(--stone-3)',
        }}
      >
        ZARA · H&amp;M · COSTCO · WALMART · TARGET · EDDIE BAUER
      </span>
    </div>
  );
}
