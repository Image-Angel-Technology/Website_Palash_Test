import { useEffect, useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    email: '',
    platform: '',
    description: '',
    url: '',
    hasFiledReport: false,
    hasImageAngelProtection: false,
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    document.title = 'Report a Leak — Image Angel Forensic Watermarking';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const form = e.target as HTMLFormElement;
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as any).toString(),
      });

      if (!response.ok) throw new Error('Form submission failed');

      // Generate reference number
      const refNum = `REF-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
      setReferenceNumber(refNum);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportResources = [
    {
      name: 'Revenge Porn Helpline',
      description: 'Support for victims of intimate image abuse',
      url: 'https://revengepornhelpline.org.uk',
    },
    {
      name: 'StopNCII',
      description: 'Hash-matching tool to prevent sharing of intimate images',
      url: 'https://stopncii.org',
    },
    {
      name: 'SafetyNet',
      description: 'Technology safety resources for survivors',
      url: 'https://www.techsafety.org',
    },
    {
      name: 'NNEDV',
      description: 'National Network to End Domestic Violence',
      url: 'https://nnedv.org',
    },
    {
      name: 'Our Wave',
      description: 'Online resource for sexual assault survivors',
      url: 'https://www.ourwave.org',
    },
    {
      name: 'Cyber Civil Rights Initiative',
      description: 'Fighting for civil rights in the digital age',
      url: 'https://cybercivilrights.org',
    },
  ];

  if (submitted) {
    return (
      <>
        {/* Hero */}
        <section
          style={{
            backgroundColor: '#f7f6f5',
            padding: 'var(--hero-pad-top) 0 var(--section-pad-y)',
            marginTop: 'var(--nav-height)',
          }}
        >
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <h1
              className="text-center mb-6"
              style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 900,
                color: '#221f1f',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              Report Received.
            </h1>
          </div>
        </section>

        {/* Confirmation */}
        <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
          <div className="max-w-[640px] mx-auto px-5 md:px-8">
            <div
              style={{
                backgroundColor: '#2a2727',
                borderRadius: '12px',
                padding: '32px',
                color: '#ffffff',
                marginBottom: '48px',
              }}
            >
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '24px',
                }}
              >
                Thank you. Your report has been received.
              </p>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#5e8c7b',
                  marginBottom: '24px',
                }}
              >
                Your reference number is {referenceNumber}
              </p>
              <p
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#b5aea6',
                  lineHeight: 1.6,
                }}
              >
                You'll receive a confirmation email with next steps within 24 hours. If
                you need immediate support, the resources below can help.
              </p>
            </div>

            {/* Support Resources */}
            <SupportResources resources={supportResources} />

            {/* Direct Contact */}
            <DirectContact />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#f7f6f5',
          padding: 'var(--hero-pad-top) 0 var(--hero-pad-bottom)',
          marginTop: 'var(--nav-height)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <Breadcrumb items={[{ label: 'Report a Leak' }]} />
          
          <h1
            className="text-center mb-6"
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#221f1f',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Report a Leak.
          </h1>

          <p
            className="text-center max-w-[700px] mx-auto"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.65,
            }}
          >
            If your protected content has appeared somewhere it shouldn't, we're here to help you trace it.
          </p>
        </div>
      </section>

      {/* How Reporting Works */}
      <section style={{ backgroundColor: '#ffffff', padding: 'calc(var(--hero-pad-bottom) * 0.5) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3.5vw, 32px)',
              fontWeight: 800,
              color: '#221f1f',
            }}
          >
            What Happens Next.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto">
            <Step
              number="1"
              title="Tell Us What Happened"
              description="Let us know where the content appeared and share whatever details you have. You don't need to have all the answers — just start with what you know."
            />
            <Step
              number="2"
              title="We Analyse the Leak"
              description="Our team analyses the leaked file using the embedded forensic watermark. This identifies who accessed the content before it was shared."
            />
            <Step
              number="3"
              title="You Receive a Forensic Report"
              description="We provide a forensic report with the session ID, timestamp, and platform of origin. This report can support platform enforcement, legal proceedings, or regulatory complaints."
            />
          </div>
        </div>
      </section>

      {/* Form */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--hero-pad-bottom) 0 var(--section-pad-y)' }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-8">
          <form onSubmit={handleSubmit} data-netlify="true" name="report-a-leak">
            <input type="hidden" name="form-name" value="report-a-leak" />
            
            {submitError && (
              <div
                style={{
                  backgroundColor: '#fff5f5',
                  border: '1px solid #f85838',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '32px',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#221f1f',
                    marginBottom: '8px',
                  }}
                >
                  Something went wrong. Please email us directly at{' '}
                  <a
                    href="mailto:hello@imageangel.co.uk"
                    style={{ color: '#f85838', textDecoration: 'none', fontWeight: 600 }}
                  >
                    hello@imageangel.co.uk
                  </a>
                </p>
              </div>
            )}
            
            {/* Section 1 */}
            <div style={{ marginBottom: '48px' }}>
              <h3
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                }}
              >
                Who are you?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  "I'm a content creator",
                  'I represent a platform',
                  "I'm a legal representative",
                  "I'm a private individual",
                  "I'm from law enforcement",
                  'Other',
                ].map((option) => (
                  <label
                    key={option}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="userType"
                      value={option}
                      checked={formData.userType === option}
                      onChange={(e) =>
                        setFormData({ ...formData, userType: e.target.value })
                      }
                      required
                      style={{
                        width: '20px',
                        height: '20px',
                        accentColor: '#5e8c7b',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#221f1f',
                      }}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: '48px' }}>
              <h3
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                }}
              >
                What happened?
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <FormInput
                  label="Your name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(value) => setFormData({ ...formData, name: value })}
                  required
                />

                <div>
                  <FormInput
                    label="Email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(value) => setFormData({ ...formData, email: value })}
                    required
                  />
                  <p
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#8f877d',
                      marginTop: '8px',
                    }}
                  >
                    (encrypted at rest)
                  </p>
                </div>

                <FormInput
                  label="Platform where content was originally published (optional)"
                  type="text"
                  name="platform"
                  value={formData.platform}
                  onChange={(value) => setFormData({ ...formData, platform: value })}
                />

                <div>
                  <label
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#221f1f',
                      marginBottom: '8px',
                      display: 'block',
                    }}
                  >
                    Describe the leak
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      padding: '12px',
                      borderRadius: '12px',
                      border: '1px solid #d6d2cd',
                      backgroundColor: '#ffffff',
                      color: '#221f1f',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#5e8c7b';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(94,140,123,0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d6d2cd';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <FormInput
                  label="URL where leaked content was found (optional)"
                  type="url"
                  name="leak_url"
                  value={formData.url}
                  onChange={(value) => setFormData({ ...formData, url: value })}
                />

                <p style={{ fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px', fontWeight: 400, color: '#6e6c6a', lineHeight: 1.6, marginBottom: '16px' }}>
                  If you have a screenshot or URL of the leaked content, paste the URL in the message field above. You can also email files directly to{' '}
                  <a href="mailto:hello@imageangel.co.uk" style={{ color: '#5e8c7b', textDecoration: 'none', fontWeight: 500 }}>hello@imageangel.co.uk</a>.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: '48px' }}>
              <h3
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#221f1f',
                  marginBottom: '24px',
                }}
              >
                Additional context
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.hasFiledReport}
                    onChange={(e) =>
                      setFormData({ ...formData, hasFiledReport: e.target.checked })
                    }
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      accentColor: '#5e8c7b',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#221f1f',
                    }}
                  >
                    I have filed or intend to file a police report (optional)
                  </span>
                </label>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.hasImageAngelProtection}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        hasImageAngelProtection: e.target.checked,
                      })
                    }
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      accentColor: '#5e8c7b',
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 400,
                        color: '#221f1f',
                      }}
                    >
                      The content was on a platform with Image Angel protection
                    </span>
                    {formData.hasImageAngelProtection && (
                      <p
                        style={{
                          fontFamily: "'Aktiv Grotesk', sans-serif",
                          fontSize: '13px',
                          fontWeight: 400,
                          color: '#8f877d',
                          marginTop: '8px',
                        }}
                      >
                        This means we may be able to extract forensic watermark data to
                        identify the source.
                      </p>
                    )}
                  </div>
                </label>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    required
                    aria-required="true"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginTop: '2px',
                      accentColor: '#5e8c7b',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#221f1f',
                    }}
                  >
                    I consent to Image Angel processing this information to investigate the
                    reported leak. <span style={{ color: '#f85838' }}>*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full transition-all duration-300"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#ffffff',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: '#5e8c7b',
                border: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                height: '52px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4a7060';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5e8c7b';
              }}
            >
              SUBMIT REPORT
            </button>
          </form>
        </div>
      </section>

      {/* Support Resources */}
      <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-8">
          <SupportResources resources={supportResources} />
        </div>
      </section>

      {/* Direct Contact */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-8">
          <DirectContact />
        </div>
      </section>
    </>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          backgroundColor: '#f85838',
          borderRadius: '50%',
          marginBottom: '16px',
        }}
      >
        <span
          style={{
            fontFamily: "'Aktiv Grotesk Extended', sans-serif",
            fontSize: '24px',
            fontWeight: 900,
            color: '#ffffff',
          }}
        >
          {number}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '20px',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#6e6c6a',
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function FormInput({
  label,
  type,
  value,
  onChange,
  required = false,
  name,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  name?: string;
}) {
  return (
    <div>
      <label
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          color: '#221f1f',
          marginBottom: '8px',
          display: 'block',
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          width: '100%',
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          padding: '12px',
          borderRadius: '12px',
          border: '1px solid #d6d2cd',
          backgroundColor: '#ffffff',
          color: '#221f1f',
          height: '44px',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#5e8c7b';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(94,140,123,0.15)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#d6d2cd';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}

function SupportResources({ resources }: { resources: any[] }) {
  return (
    <div
      style={{
        backgroundColor: '#e6f0ec',
        borderLeft: '3px solid #5e8c7b',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '48px',
      }}
    >
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '20px',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '16px',
        }}
      >
        You Don't Have to Go Through This Alone.
      </h3>

      <p
        className="mb-4"
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '16px',
          fontWeight: 400,
          color: '#4a7060',
          lineHeight: 1.6,
        }}
      >
        These organisations provide free, confidential support for people affected by image-based abuse:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {resources.map((resource) => (
          <div key={resource.name}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: '#5e8c7b',
                textDecoration: 'none',
              }}
            >
              {resource.name} →
            </a>
            <p
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '14px',
                fontWeight: 400,
                color: '#4a7060',
                marginTop: '4px',
              }}
            >
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DirectContact() {
  return (
    <div className="text-center">
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '16px',
          fontWeight: 400,
          color: '#6e6c6a',
        }}
      >
        Prefer to reach us directly? Email{' '}
        <a
          href="mailto:hello@imageangel.co.uk"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            color: '#5e8c7b',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          hello@imageangel.co.uk
        </a>
        . All reports are treated as confidential.
      </p>
    </div>
  );
}