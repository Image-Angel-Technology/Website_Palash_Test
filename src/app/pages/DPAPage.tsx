import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function DPAPage() {
  useEffect(() => {
    document.title = 'Data Processing Addendum — Image Angel';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div
        style={{
          backgroundColor: '#f8f8f7',
          borderBottom: '1px solid #dededb',
          padding: '16px 0',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <nav aria-label="breadcrumb">
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link
                  to="/"
                  style={{
                    color: '#767270',
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: '#767270' }}>/</li>
              <li style={{ color: '#221f1f', fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px' }}>
                Data Processing Addendum
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#221f1f',
              marginBottom: '16px',
            }}
          >
            Data Processing Addendum
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#8f877d',
              marginBottom: '48px',
            }}
          >
            Last updated: February 25, 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.8,
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              1. Definitions
            </h2>
            <p style={{ marginBottom: '24px' }}>
              This Data Processing Addendum ("DPA") forms part of the agreement between Image Angel ("Processor") and you ("Controller") for the provision of forensic watermarking services.
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person</li>
              <li style={{ marginBottom: '12px' }}><strong>"Processing"</strong> means any operation performed on Personal Data</li>
              <li style={{ marginBottom: '12px' }}><strong>"GDPR"</strong> means the General Data Protection Regulation (EU) 2016/679</li>
              <li style={{ marginBottom: '12px' }}><strong>"UK GDPR"</strong> means the GDPR as it forms part of UK law</li>
              <li style={{ marginBottom: '12px' }}><strong>"Data Subject"</strong> means an identified or identifiable natural person</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              2. Scope of Processing
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Image Angel will process Personal Data on behalf of the Controller for the following purposes:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Embedding forensic watermarks in digital content</li>
              <li style={{ marginBottom: '12px' }}>Extracting watermarks from reported leaked content</li>
              <li style={{ marginBottom: '12px' }}>Identifying attribution associated with unauthorized distribution</li>
              <li style={{ marginBottom: '12px' }}>Providing leak investigation reports</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              3. Nature and Categories of Personal Data
            </h2>
            <p style={{ marginBottom: '16px' }}>
              The types of Personal Data processed may include:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Contact information (names, email addresses)</li>
              <li style={{ marginBottom: '12px' }}>Account credentials and user identifiers</li>
              <li style={{ marginBottom: '12px' }}>Digital content (images, videos) uploaded for watermarking</li>
              <li style={{ marginBottom: '12px' }}>Attribution identifiers embedded in watermarks</li>
              <li style={{ marginBottom: '12px' }}>Technical data (IP addresses, device information)</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              4. Data Subjects
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Personal Data may relate to the following categories of Data Subjects:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Account holders and authorized users</li>
              <li style={{ marginBottom: '12px' }}>Content creators and platform users</li>
              <li style={{ marginBottom: '12px' }}>Individuals identified in watermarked content</li>
              <li style={{ marginBottom: '12px' }}>Individuals associated with reported leaks</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              5. Processor's Obligations
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Image Angel shall:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Process Personal Data only on documented instructions from the Controller</li>
              <li style={{ marginBottom: '12px' }}>Ensure that persons authorized to process Personal Data are subject to confidentiality obligations</li>
              <li style={{ marginBottom: '12px' }}>Implement appropriate technical and organizational measures to ensure data security</li>
              <li style={{ marginBottom: '12px' }}>Engage sub-processors only with prior written authorization from the Controller</li>
              <li style={{ marginBottom: '12px' }}>Assist the Controller in responding to Data Subject requests</li>
              <li style={{ marginBottom: '12px' }}>Assist the Controller with data protection impact assessments</li>
              <li style={{ marginBottom: '12px' }}>Delete or return Personal Data upon termination of services</li>
              <li style={{ marginBottom: '12px' }}>Make available all information necessary to demonstrate compliance</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              6. Security Measures
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Image Angel implements the following security measures:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Encryption of data in transit and at rest</li>
              <li style={{ marginBottom: '12px' }}>Access controls and authentication mechanisms</li>
              <li style={{ marginBottom: '12px' }}>Regular security assessments and penetration testing</li>
              <li style={{ marginBottom: '12px' }}>Incident response and data breach notification procedures</li>
              <li style={{ marginBottom: '12px' }}>Employee training on data protection</li>
              <li style={{ marginBottom: '12px' }}>Regular backups and disaster recovery planning</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              7. Sub-Processors
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Image Angel may engage the following sub-processors:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Cloud infrastructure providers (e.g., AWS, Google Cloud)</li>
              <li style={{ marginBottom: '12px' }}>Payment processing services</li>
              <li style={{ marginBottom: '12px' }}>Analytics and monitoring services</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              The Controller authorizes Image Angel to engage these sub-processors. Image Angel will notify the Controller of any changes to sub-processors with at least 30 days' notice, allowing the Controller to object.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              8. International Data Transfers
            </h2>
            <p style={{ marginBottom: '24px' }}>
              If Personal Data is transferred outside the EEA or UK, Image Angel shall ensure that appropriate safeguards are in place, including:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>EU Standard Contractual Clauses</li>
              <li style={{ marginBottom: '12px' }}>UK International Data Transfer Agreement</li>
              <li style={{ marginBottom: '12px' }}>Adequacy decisions by relevant authorities</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              9. Data Subject Rights
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Image Angel will assist the Controller in responding to Data Subject requests to exercise their rights under GDPR/UK GDPR, including:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Right of access</li>
              <li style={{ marginBottom: '12px' }}>Right to rectification</li>
              <li style={{ marginBottom: '12px' }}>Right to erasure ("right to be forgotten")</li>
              <li style={{ marginBottom: '12px' }}>Right to restriction of processing</li>
              <li style={{ marginBottom: '12px' }}>Right to data portability</li>
              <li style={{ marginBottom: '12px' }}>Right to object</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              10. Data Breach Notification
            </h2>
            <p style={{ marginBottom: '24px' }}>
              In the event of a Personal Data breach, Image Angel will:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Notify the Controller without undue delay (within 48 hours of becoming aware)</li>
              <li style={{ marginBottom: '12px' }}>Provide details of the nature of the breach</li>
              <li style={{ marginBottom: '12px' }}>Identify the categories and approximate number of Data Subjects affected</li>
              <li style={{ marginBottom: '12px' }}>Describe the likely consequences of the breach</li>
              <li style={{ marginBottom: '12px' }}>Outline measures taken or proposed to address the breach</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              11. Audits and Inspections
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Image Angel shall allow the Controller (or its appointed auditor) to conduct audits and inspections to verify compliance with this DPA, subject to:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Reasonable advance notice (at least 30 days)</li>
              <li style={{ marginBottom: '12px' }}>Execution of a confidentiality agreement</li>
              <li style={{ marginBottom: '12px' }}>Limitation to one audit per year (unless required by law)</li>
              <li style={{ marginBottom: '12px' }}>Controller bearing the costs of the audit</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              12. Duration and Termination
            </h2>
            <p style={{ marginBottom: '24px' }}>
              This DPA remains in effect for the duration of the service agreement. Upon termination:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Image Angel will delete or return all Personal Data within 30 days</li>
              <li style={{ marginBottom: '12px' }}>Copies of Personal Data may be retained where required by law</li>
              <li style={{ marginBottom: '12px' }}>Image Angel will provide written certification of deletion upon request</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              13. Liability
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Each party's liability under this DPA is subject to the limitation of liability provisions in the main service agreement.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              14. Contact Information
            </h2>
            <p style={{ marginBottom: '24px' }}>
              For questions about data processing, contact our Data Protection Officer:
            </p>
            <p style={{ marginBottom: '48px' }}>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:hello@imageangel.co.uk"
                style={{ color: '#f85838', textDecoration: 'none' }}
              >
                hello@imageangel.co.uk
              </a>
            </p>

            <div
              style={{
                backgroundColor: '#f8f8f7',
                border: '1px solid #dededb',
                borderRadius: '8px',
                padding: '24px',
                marginTop: '48px',
              }}
            >
              <p style={{ fontSize: '14px', color: '#6e6c6a', marginBottom: '16px' }}>
                <strong style={{ color: '#221f1f' }}>Important Note:</strong> This is a template Data Processing Addendum. Before going live, this document must be reviewed and customized by legal counsel specializing in data protection law to ensure full compliance with GDPR, UK GDPR, and other applicable regulations. Enterprise customers may require custom DPA terms.
              </p>
              <Link
                to="/contact"
                style={{
                  color: '#f85838',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                Request a custom DPA for your organization →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
