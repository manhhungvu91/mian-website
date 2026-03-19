export default function Differentiators() {
  const cards = [
    {
      number: '01',
      titleFirst: 'MOQ ',
      titleItalic: 'Flexibility',
      body: '300 pieces or 500,000 — we scale with you. No brand too small. No volume too large.',
      tag: 'Key differentiator →',
    },
    {
      number: '02',
      titleFirst: 'Sample ',
      titleItalic: 'Development',
      body: 'Physical and digital sampling in-house — we work in CLO3D and Style 3D. Fewer rounds, faster approvals, speed to market.',
      tag: 'Innovation proof →',
    },
    {
      number: '03',
      titleFirst: 'Vertical ',
      titleItalic: 'Integration',
      body: 'Fabric sourcing, development, bulk production, washing, dyeing, printing and delivery — all under one roof. One partner, full control.',
      tag: 'Operational proof →',
    },
    {
      number: '04',
      titleFirst: 'Sustainability ',
      titleItalic: 'Efforts',
      body: 'We are actively investing in a cleaner operation — solar roofing installation underway, transitioning to more sustainable boiler systems, and verified by Higg, Fair Trade, and BetterWork.',
      tag: 'Proof not promise →',
    },
  ];

  return (
    <section style={{ width: '100%', background: '#EDEDEA', padding: '96px 64px' }}>

      {/* Section header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '64px',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '9px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#8A8A86',
              marginBottom: '12px',
            }}
          >
            What Sets Us Apart
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: '34px',
              color: '#0D0D0B',
              lineHeight: 1.05,
            }}
          >
            Four Reasons Buyers Choose MIAN
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 300,
            fontSize: '12px',
            color: '#6E6E6A',
            maxWidth: '280px',
            textAlign: 'right',
            lineHeight: 1.75,
          }}
        >
          From digital development to full vertical integration — we are built differently from every other factory in Vietnam.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '3px',
        }}
      >
        {cards.map((card) => (
          <div
            key={card.number}
            style={{
              background: '#F5F5F3',
              border: '0.5px solid rgba(13,13,11,0.08)',
              padding: '40px',
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '9px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#8A8A86',
                marginBottom: '16px',
              }}
            >
              {card.number}
            </p>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: '22px',
                color: '#0D0D0B',
                marginBottom: '10px',
                lineHeight: 1.05,
              }}
            >
              {card.titleFirst}<em style={{ fontStyle: 'italic' }}>{card.titleItalic}</em>
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '13px',
                color: '#6E6E6A',
                lineHeight: 1.75,
              }}
            >
              {card.body}
            </p>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '8.5px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#C8941A',
                border: '0.5px solid rgba(200,148,26,0.35)',
                padding: '4px 10px',
                display: 'inline-block',
                marginTop: '14px',
              }}
            >
              {card.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
