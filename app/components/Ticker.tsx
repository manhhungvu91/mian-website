export default function Ticker() {
  const items = [
    { type: 'brand', text: 'Zara' },
    { type: 'capability', text: 'Denim & Woven' },
    { type: 'brand', text: 'H&M' },
    { type: 'capability', text: 'Knit & Active' },
    { type: 'brand', text: 'Costco' },
    { type: 'capability', text: 'Seamless Santoni' },
    { type: 'brand', text: 'Walmart' },
    { type: 'capability', text: 'CLO3D Development' },
    { type: 'brand', text: 'Target' },
    { type: 'capability', text: 'MOQ Flexible' },
    { type: 'brand', text: 'Eddie Bauer' },
    { type: 'capability', text: 'Full Package Production' },
  ];

  const separator = (key: string) => (
    <div
      key={key}
      style={{
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        background: '#C8941A',
        opacity: 0.5,
        flexShrink: 0,
        alignSelf: 'center',
        margin: '0 32px',
      }}
    />
  );

  const renderItems = (prefix: string) =>
    items.map((item, i) => [
      item.type === 'brand' ? (
        <span
          key={`${prefix}-item-${i}`}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '15px',
            fontWeight: 300,
            color: '#4A4A47',
            whiteSpace: 'nowrap',
          }}
        >
          {item.text}
        </span>
      ) : (
        <span
          key={`${prefix}-item-${i}`}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '8px',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#8A8A86',
            whiteSpace: 'nowrap',
          }}
        >
          {item.text}
        </span>
      ),
      separator(`${prefix}-sep-${i}`),
    ]);

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        background: '#EDEDEA',
        padding: '14px 0',
        borderTop: '0.5px solid rgba(13,13,11,0.08)',
        borderBottom: '0.5px solid rgba(13,13,11,0.08)',
      }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          animation: 'ticker 28s linear infinite',
        }}
      >
        {renderItems('a')}
        {renderItems('b')}
      </div>
    </div>
  );
}
