export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: 'var(--black)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 24px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '11px',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--oak)',
          marginBottom: '28px',
        }}
      >
        Vietnam&apos;s Full-Service Manufacturing Partner
      </p>

      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 400,
          fontSize: 'clamp(52px, 8vw, 104px)',
          lineHeight: 1.0,
          color: 'var(--white)',
          marginBottom: '32px',
          maxWidth: '900px',
        }}
      >
        Where Vision Becomes Garment
      </h1>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'var(--grey-3)',
          maxWidth: '480px',
          marginBottom: '52px',
        }}
      >
        MOQ-flexible. CLO3D-ready. Trusted by Zara, H&amp;M, and Costco.
        Full-service from concept to delivery.
      </p>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
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
            borderRadius: '100px',
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
            borderRadius: '100px',
            padding: '13px 28px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Our Capabilities
        </a>
      </div>
    </section>
  );
}
