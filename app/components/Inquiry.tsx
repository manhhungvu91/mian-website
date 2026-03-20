'use client'
import { useState } from 'react'

export default function Inquiry() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1600)
  }

  const fields = [
    { id: 'name',   label: 'FULL NAME',        type: 'text', placeholder: '' },
    { id: 'brand',  label: 'BRAND / COMPANY',  type: 'text', placeholder: '' },
    { id: 'type',   label: 'PRODUCT CATEGORY', type: 'text', placeholder: 'e.g. Outerwear, Denim, Knitwear' },
    { id: 'moq',    label: 'ESTIMATED MOQ',    type: 'text', placeholder: 'e.g. 500 / 5,000 / 50,000 pcs' },
    { id: 'market', label: 'TARGET MARKET',    type: 'text', placeholder: 'e.g. USA, EU, UK' },
  ]

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '14px',
    color: '#0F0F0F', background: 'transparent',
    border: 'none', borderBottom: '1px solid #E8E8E4',
    padding: '12px 0', outline: 'none',
    transition: 'border-color 150ms',
  }

  return (
    <section id="inquire" style={{
      background: '#FFFFFF',
      padding: '160px 80px',
      borderTop: '1px solid #E8E8E4',
    }}>
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '120px',
        alignItems: 'start',
      }}>

        {/* Left */}
        <div>
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 400, fontSize: '9px',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#9A9A96', display: 'block', marginBottom: '16px',
          }}>START HERE</span>
          <h2 style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 400, fontSize: 'clamp(48px, 5.5vw, 72px)',
            lineHeight: 0.88, textTransform: 'uppercase', color: '#0F0F0F',
            marginBottom: '28px',
          }}>WORK<br />WITH<br />MIAN.</h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            fontSize: '14px', lineHeight: 1.85, color: '#5A5A56',
            marginBottom: '16px',
          }}>Fill in the form. Direct response within 24 hours. No agents between you and the people doing the work.</p>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 300, fontSize: '9px',
            letterSpacing: '0.12em', color: '#9A9A96',
          }}>Or reach us directly:<br />sourcing@mianapparel.com</p>
        </div>

        {/* Right — form */}
        <div>
          {sent ? (
            <div style={{ padding: '80px 0' }}>
              <h3 style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontWeight: 400, fontSize: '42px',
                fontStyle: 'italic', color: '#0F0F0F',
                marginBottom: '16px',
              }}>Thank you.</h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '14px', color: '#9A9A96',
              }}>We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {fields.map(f => (
                <div key={f.id} style={{ marginBottom: '32px' }}>
                  <label htmlFor={f.id} style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 400, fontSize: '8px',
                    letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: '#9A9A96', display: 'block', marginBottom: '8px',
                  }}>{f.label}</label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required={f.id === 'name' || f.id === 'brand'}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderBottomColor = '#0F0F0F' }}
                    onBlur={e => { e.currentTarget.style.borderBottomColor = '#E8E8E4' }}
                  />
                </div>
              ))}

              {/* Project brief textarea */}
              <div style={{ marginBottom: '40px' }}>
                <label htmlFor="brief" style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 400, fontSize: '8px',
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: '#9A9A96', display: 'block', marginBottom: '8px',
                }}>PROJECT BRIEF</label>
                <textarea
                  id="brief"
                  rows={4}
                  placeholder="Tell us about your project, timeline, and any specific requirements."
                  style={{
                    ...inputStyle,
                    resize: 'none',
                  }}
                  onFocus={e => { e.currentTarget.style.borderBottomColor = '#0F0F0F' }}
                  onBlur={e => { e.currentTarget.style.borderBottomColor = '#E8E8E4' }}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 500, fontSize: '10px',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  background: loading ? '#9A9A96' : '#4A6FA5',
                  color: '#FFFFFF',
                  border: 'none', padding: '18px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 200ms ease-out',
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#0F0F0F' }}
                onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#4A6FA5' }}
              >
                {loading ? 'SENDING...' : 'SEND INQUIRY'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
