export default function Hero() {
  const stats = [
    { number: '8.8M', label: 'pcs per month' },
    { number: '25+', label: 'years' },
    { number: '7', label: 'factories' },
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 64px 60px 64px',
      }}
    >
      {/* Main content */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px', flexWrap: 'wrap' }}>

        {/* Left — eyebrow, headline, sub, buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* Eyebrow */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--oak)',
              marginBottom: '24px',
            }}
          >
            Vietnam&apos;s Manufacturing Studio
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 1.02,
              color: 'var(--white)',
              marginBottom: '28px',
              textAlign: 'left',
            }}
          >
            Your Full-<br />
            <em style={{ color: '#E8BE6A', fontStyle: 'italic' }}>Service</em><br />
            Partner.
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--grey-3)',
              maxWidth: '420px',
              marginBottom: '40px',
              textAlign: 'left',
            }}
          >
            From first sketch to final shipment — MOQ-flexible, CLO3D-ready, and trusted by Zara, H&amp;M, and Costco.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#inquire"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--black)',
                background: 'var(--white)',
                borderRadius: '0',
                padding: '13px 28px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Start a Project
            </a>
            <a
              href="#capabilities"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                background: 'transparent',
                border: '0.5px solid rgba(245,245,243,0.25)',
                borderRadius: '0',
                padding: '13px 28px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Our Capabilities
            </a>
          </div>
        </div>

        {/* Right — stats */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-end', paddingBottom: '4px' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  fontSize: '28px',
                  color: '#F5F5F3',
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '8.5px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(245,245,243,0.35)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
