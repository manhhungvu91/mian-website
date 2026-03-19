'use client';

import { useEffect, useState } from 'react';

export default function SourcingForm() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const fields: { label: string; placeholder: string; multiline: boolean; id: string }[] = [
    { id: 'name', label: 'Your Name', placeholder: 'Full name', multiline: false },
    { id: 'company', label: 'Brand or Company', placeholder: 'Brand or company name', multiline: false },
    { id: 'category', label: 'Product Category', placeholder: 'e.g. Denim, Knitwear, Active', multiline: false },
    { id: 'moq', label: 'Estimated MOQ', placeholder: 'e.g. 500 pcs per style', multiline: false },
    { id: 'country', label: 'Country of Origin of Buyer', placeholder: 'Your country', multiline: false },
    { id: 'project', label: 'Tell us about your project', placeholder: 'Brief description of your project, timeline, and any special requirements...', multiline: true },
  ];

  const baseInputStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    fontWeight: 300,
    letterSpacing: '0.01em',
    color: 'var(--ink)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
    resize: 'none',
    padding: 0,
    lineHeight: 1.8,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <section
      id="inquire"
      style={{
        width: '100%',
        background: 'var(--parchment)',
        padding: isMobile ? '140px 32px' : '140px 80px',
      }}
    >
      <style>{`
        .mian-input::placeholder { color: rgba(26,23,20,0.3); font-family: 'Inter', sans-serif; font-weight: 300; }
        .mian-input:focus { outline: none; }
        .mian-submit { transition: opacity 200ms ease-out; }
        .mian-submit:hover { opacity: 0.6; }
      `}</style>

      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '64px' : '96px',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: '8px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--stone-3)',
                marginBottom: '20px',
              }}
            >
              Start a Sourcing Inquiry
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: '36px',
                color: 'var(--ink)',
                marginBottom: '20px',
                lineHeight: 1.05,
              }}
            >
              Tell us about your project.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.01em',
                color: 'var(--stone-2)',
                lineHeight: 1.8,
                maxWidth: '320px',
              }}
            >
              Fill in the form and our sourcing team responds within 24 hours.
            </p>
          </div>

          {/* Right column — form */}
          <div>
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '320px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontWeight: 400,
                    fontSize: isMobile ? '22px' : '26px',
                    color: 'var(--ink)',
                    lineHeight: 1.4,
                  }}
                >
                  Thank you. Our sourcing team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {fields.map((field) => (
                  <div
                    key={field.id}
                    style={{
                      background: 'var(--parchment-2)',
                      border: '0.5px solid rgba(26,23,20,0.10)',
                      padding: '14px 16px',
                    }}
                  >
                    <label
                      htmlFor={field.id}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: '8px',
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                        color: 'var(--stone-3)',
                        marginBottom: '6px',
                        display: 'block',
                      }}
                    >
                      {field.label}
                    </label>
                    {field.multiline ? (
                      <textarea
                        id={field.id}
                        placeholder={field.placeholder}
                        className="mian-input"
                        style={{ ...baseInputStyle, minHeight: '80px' }}
                      />
                    ) : (
                      <input
                        id={field.id}
                        type="text"
                        placeholder={field.placeholder}
                        className="mian-input"
                        style={baseInputStyle}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="mian-submit"
                  style={{
                    width: '100%',
                    background: 'var(--camel)',
                    color: 'var(--ink)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '16px',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginTop: '2px',
                    opacity: loading ? 0.6 : 1,
                  }}
                >
                  {loading ? 'Sending...' : 'Submit Sourcing Inquiry'}
                </button>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: '11px',
                    letterSpacing: '0.01em',
                    color: 'var(--stone-3)',
                    textAlign: 'center',
                    marginTop: '16px',
                  }}
                >
                  Or reach us directly at sourcing@mianapparel.com
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
