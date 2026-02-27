import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

const enterEasing = [0, 0, 0.2, 1];

type UserType = 'platform' | 'creator' | 'other' | '';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: '' as UserType,
    name: '',
    email: '',
    company: '',
    role: '',
    platformUrl: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    document.title = "Let's Talk — Image Angel";
  }, []);

  const handleUserTypeSelect = (type: UserType) => {
    setFormData({ ...formData, userType: type });
    setStep(2);
  };

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
      
      setStep(3);
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getNextStepSuggestion = () => {
    switch (formData.userType) {
      case 'platform':
        return (
          <p>
            In the meantime, you might want to explore our{' '}
            <Link
              to="/technology"
              style={{ color: '#f85838', textDecoration: 'none', fontWeight: 500 }}
            >
              Technology page
            </Link>
            .
          </p>
        );
      case 'creator':
        return (
          <p>
            Check out our{' '}
            <Link
              to="/solutions#creators"
              style={{ color: '#f85838', textDecoration: 'none', fontWeight: 500 }}
            >
              Solutions for Creators
            </Link>
            .
          </p>
        );
      default:
        return null;
    }
  };

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
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'Contact' }]} />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: enterEasing }}
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
            Get in Touch.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: enterEasing, delay: 0.05 }}
            className="text-center max-w-[700px] mx-auto"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.65,
            }}
          >
            Whether you run a platform, create content, or work in advocacy — we'd like to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[640px] mx-auto px-5 md:px-8">
          {/* Step Indicator */}
          <div className="flex justify-center gap-3 mb-12">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  width: step === s ? '10px' : '8px',
                  height: step === s ? '10px' : '8px',
                  borderRadius: '50%',
                  backgroundColor: step >= s ? '#f85838' : '#dededb',
                  transition: 'all 200ms',
                }}
              />
            ))}
          </div>

          {/* Step 1: User Type Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: enterEasing }}
            >
              <h2
                className="text-center mb-8"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#221f1f',
                }}
              >
                I am a...
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <UserTypeCard
                  title="I run a platform"
                  onClick={() => handleUserTypeSelect('platform')}
                  selected={formData.userType === 'platform'}
                />
                <UserTypeCard
                  title="I'm a creator"
                  onClick={() => handleUserTypeSelect('creator')}
                  selected={formData.userType === 'creator'}
                />
                <UserTypeCard
                  title="Other (advocacy, press, partnerships)"
                  onClick={() => handleUserTypeSelect('other')}
                  selected={formData.userType === 'other'}
                />
              </div>
            </motion.div>
          )}

          {/* Step 2: Form Fields */}
          {step === 2 && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: enterEasing }}
              data-netlify="true"
              name="request-demo"
            >
              <input type="hidden" name="form-name" value="request-demo" />
              <input type="hidden" name="audience_type" value={formData.userType} />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {submitError && (
                  <div
                    style={{
                      backgroundColor: '#fff5f5',
                      border: '1px solid #f85838',
                      borderRadius: '12px',
                      padding: '16px',
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
                
                <FormField
                  label="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(value) => setFormData({ ...formData, name: value })}
                  required
                />

                <FormField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(value) => setFormData({ ...formData, email: value })}
                  required
                />

                {(formData.userType === 'platform' || formData.userType === 'other') && (
                  <FormField
                    label="Company/Organisation"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(value) => setFormData({ ...formData, company: value })}
                  />
                )}

                {formData.userType === 'platform' && (
                  <>
                    <FormField
                      label="Role/Title"
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={(value) => setFormData({ ...formData, role: value })}
                    />
                    <FormField
                      label="Platform URL (optional)"
                      type="url"
                      name="platform_url"
                      value={formData.platformUrl}
                      onChange={(value) => setFormData({ ...formData, platformUrl: value })}
                    />
                  </>
                )}

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
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                      minHeight: '120px',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#f85838';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(248,88,56,0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#d6d2cd';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full transition-all duration-300"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#ffffff',
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: isSubmitting ? '#b5aea6' : '#f85838',
                    border: 'none',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    height: '52px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#ff6a4d';
                      e.currentTarget.style.boxShadow = '0 0 32px rgba(248,88,56,0.35)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#f85838';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </motion.form>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: enterEasing }}
              className="text-center"
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#e6f0ec',
                  borderRadius: '50%',
                  marginBottom: '24px',
                }}
              >
                <Check size={40} color="#5e8c7b" strokeWidth={2.5} />
              </div>

              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#221f1f',
                }}
              >
                Thank you. We've received your message.
              </h2>

              <p
                className="mb-4"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#6e6c6a',
                  lineHeight: 1.6,
                }}
              >
                Thank you. We'll respond within one working day. If you're a platform evaluating forensic watermarking, expect to hear from our technical team directly.
              </p>

              <div
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#6e6c6a',
                  lineHeight: 1.6,
                }}
              >
                {getNextStepSuggestion()}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <ContactCard title="Contact" email="hello@imageangel.co.uk" />
            <ContactCard title="Technical Enquiries" email="tech@imageangel.co.uk" />
            <ContactCard title="For Survivors" email="support@imageangel.co.uk" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            Start With a Conversation.
          </h2>
          <p
            className="mb-8 max-w-[600px] mx-auto"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '18px',
              fontWeight: 400,
              color: '#b5aea6',
              lineHeight: 1.6,
            }}
          >
            30 minutes. No slides. We'll answer every question you have and show you how it works.
          </p>
          <Link to="/contact">
            <button
              className="transition-all duration-300"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#ffffff',
                padding: '16px 48px',
                borderRadius: '12px',
                backgroundColor: '#f85838',
                border: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6a4d';
                e.currentTarget.style.boxShadow = '0 0 32px rgba(248,88,56,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f85838';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              BOOK A CALL
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

function UserTypeCard({
  title,
  onClick,
  selected,
}: {
  title: string;
  onClick: () => void;
  selected: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        padding: '16px',
        borderRadius: '12px',
        border: `1px solid ${
          selected || isHovered ? '#f85838' : '#dededb'
        }`,
        backgroundColor: '#ffffff',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 200ms',
        position: 'relative',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            color: '#221f1f',
          }}
        >
          {title}
        </span>
        {selected && (
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: '#f85838',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Check size={14} color="#ffffff" strokeWidth={3} />
          </div>
        )}
      </div>
    </button>
  );
}

function FormField({
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
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#f85838';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(248,88,56,0.15)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = '#d6d2cd';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}

function ContactCard({ title, email }: { title: string; email: string }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 700,
          color: '#8f877d',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        {title}
      </h3>
      <a
        href={`mailto:${email}`}
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '16px',
          fontWeight: 500,
          color: '#f85838',
          textDecoration: 'none',
          wordBreak: 'break-word',
        }}
      >
        {email}
      </a>
    </div>
  );
}