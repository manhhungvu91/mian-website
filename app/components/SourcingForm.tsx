'use client';

import { useEffect, useState } from 'react';

export default function SourcingForm() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const trustLines = [
    'Response within 24 hours',
    'Direct to our sourcing team — no agents',
    'All communications confidential',
  ];

  const fields = [
    { label: 'Your Name', placeholder: 'Full name', multiline: false },
    { label: 'Brand or Company', placeholder: 'Brand or company name', multiline: false },
    { label: 'Product Category', placeholder: 'e.g. Denim, Knitwear, Active', multiline: false },
    { label: 'Estimated MOQ', placeholder: 'e.g. 500 pcs per style', multiline: false },
    { label: 'Country of Origin of Buyer', placeholder: 'Your country', multiline: false },
    { label: 'Tell us about your project', placeholder: 'Brief description of your project, timeline, and any special requirements...', multiline: true },
  ];

  const inputStyle: React.CSSProperties = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 300,
    fontSize: '13px',
    color: 'rgba(13,13,11,0.7)',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
    resize: 'none',
  };

  return (
    <section
      id="inquire"
      style={{
        width: '100%',
        background: '#F5F5F3',
        padding: isMobile ? '64px 24px' : '96px 64px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '96px',
          alignItems: 'start',
        }}
      >
        {/* Left column */}
        <div>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '9px',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: '#C8941A',
              marginBottom: '16px',
            }}
          >
            Start a Sourcing Inquiry
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: '34px',
              color: '#0D0D0B',
              marginBottom: '16px',
              lineHeight: 1.05,
            }}
          >
            Tell us about your project.
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 300,
              fontSize: '13px',
              color: '#6E6E6A',
              lineHeight: 1.75,
            }}
          >
            Whether you are placing your first 300-piece order or scaling to 500,000 — fill in the form and our sourcing team responds within 24 hours.
          </p>

          {/* Trust bullets */}
          <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trustLines.map((line) => (
              <div key={line} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#C8941A',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '13px',
                    color: '#4A4A47',
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — form */}
        <div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {fields.map((field) => (
              <div
                key={field.label}
                style={{
                  background: '#FFFFFF',
                  border: '0.5px solid rgba(13,13,11,0.10)',
                  padding: '14px 16px',
                  borderRadius: 0,
                }}
              >
                <label
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: '8px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#8A8A86',
                    marginBottom: '4px',
                    display: 'block',
                  }}
                >
                  {field.label}
                </label>
                {field.multiline ? (
                  <textarea
                    placeholder={field.placeholder}
                    style={{ ...inputStyle, minHeight: '80px' }}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    style={inputStyle}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#0D0D0B',
                color: '#F5F5F3',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500,
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '14px',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 0,
                marginTop: '2px',
              }}
            >
              Submit Sourcing Inquiry →
            </button>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '10px',
                color: '#8A8A86',
                textAlign: 'center',
                marginTop: '10px',
              }}
            >
              Response within 24 hours · All communications confidential
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
