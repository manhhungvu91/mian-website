export default function PullQuote() {
  return (
    <section style={{ width: '100%', background: '#0D0D0B', padding: '96px 64px' }}>
      <blockquote
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(22px, 3.5vw, 38px)',
          fontWeight: 400,
          fontStyle: 'italic',
          lineHeight: 1.15,
          color: '#F5F5F3',
          maxWidth: '720px',
          margin: 0,
        }}
      >
        &ldquo;Most manufacturers execute your specs. We help you{' '}
        <span style={{ color: '#E8BE6A' }}>build them</span> — at any scale,
        from any starting point.&rdquo;
      </blockquote>

      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 300,
          fontSize: '9px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#8A8A86',
          marginTop: '24px',
        }}
      >
        MIAN Apparel · Full-Service Manufacturing
      </p>
    </section>
  );
}
