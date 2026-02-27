import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — Image Angel';
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
                Privacy Policy
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
            Privacy Policy
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
            Last updated: 28 October 2024
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
            <p style={{ marginBottom: '24px' }}>
              Image Angel Technology Limited, a company registered in England and Wales, with company number, 16031209 (we, us or our), understands that protecting your personal data is important. This Privacy Policy sets out our commitment to protecting the privacy of personal data provided to us, or otherwise collected by us when providing our website, consulting services and 'Image Angel' product (Services) or when otherwise interacting with you.
            </p>
            <p style={{ marginBottom: '24px' }}>
              It is important that you read this Privacy Policy together with any other detailed privacy notices we may provide when we are collecting or processing personal data about you so that you understand our privacy practices in relation to your data.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              The Information We Collect
            </h2>
            <p style={{ marginBottom: '24px' }}>
              <strong>Personal data:</strong> is information that relates to an identified or identifiable individual.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We may collect, use, store and disclose different kinds of personal data about you which we have listed below:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Identity Data</strong> including first name, last name and social media or OnlyFans profile (if applicable).</li>
              <li style={{ marginBottom: '12px' }}><strong>Contact Data</strong> including email address and telephone number.</li>
              <li style={{ marginBottom: '12px' }}><strong>Transaction Data</strong> including details about payments from you to us and other details of services you have purchased from us.</li>
              <li style={{ marginBottom: '12px' }}><strong>Marketing and Communications Data</strong> including your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              <li style={{ marginBottom: '12px' }}><strong>Special Categories of Personal Data</strong> is a special category of personal data that includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data. We may require you to send us the photograph you would like us to investigate as part of our Services (which may infer information about your sex life and/or sexual orientation). If at any time we need to collect special categories of data about you, we will only collect it and use it as required or authorised by law.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              How We Collect Personal Data
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We collect personal data in a variety of ways, including:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Directly:</strong> We collect personal data which you directly provide to us, including through the 'contact us' form on our website.</li>
              <li style={{ marginBottom: '12px' }}><strong>Indirectly:</strong> We may collect personal data which you indirectly provide to us while interacting with us, such as when you use our website and in your online enquiries.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Purposes and Legal Bases for Processing
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We collect and process personal data about you only where we have legal bases for doing so under applicable laws. We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate. Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please reach out to us if you need further details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dededb' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f8f7' }}>
                    <th style={{ border: '1px solid #dededb', padding: '12px', textAlign: 'left', fontWeight: 700, color: '#221f1f' }}>Purpose of use / disclosure</th>
                    <th style={{ border: '1px solid #dededb', padding: '12px', textAlign: 'left', fontWeight: 700, color: '#221f1f' }}>Type of Data</th>
                    <th style={{ border: '1px solid #dededb', padding: '12px', textAlign: 'left', fontWeight: 700, color: '#221f1f' }}>Legal Basis for processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>To provide our Services to you.</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Identity Data<br />Contact Data<br />Special categories of personal data (if applicable).</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Performance of a contract with you</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8f8f7' }}>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>To contact and communicate with you about any enquiries you make with us via our website.</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Identity Data<br />Contact Data</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Legitimate interests: to ensure we provide the best client experience we can offer by answering all of your questions.</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>For internal record keeping and administrative, invoicing and billing purposes.</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Identity Data<br />Contact Data<br />Transaction Data</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Performance of a contract with you<br />To comply with a legal obligation<br />Legitimate interests: to recover debts due to us and ensure we can notify you about changes to our terms of business and any other administrative points.</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f8f8f7' }}>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>For advertising and marketing, including to send you promotional information about our events and experiences and information that we consider may be of interest to you.</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Identity Data<br />Contact Data<br />Marketing and communications Data</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>Legitimate interests: to develop our Services and grow our business</td>
                  </tr>
                  <tr>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>To comply with our legal obligations or if otherwise required or authorised by law.</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>All relevant Personal Data</td>
                    <td style={{ border: '1px solid #dededb', padding: '12px' }}>To comply with a legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={{ marginBottom: '24px' }}>
              If you have consented to our use of data about you for a specific purpose, you have the right to change your mind at any time, but this will not affect any processing that has already taken place. Where we are using your data because we or a third party have a legitimate interest to do so, you have the right to object to that use though, in some cases, this may mean no longer using our services. Further information about your rights is available below.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Our Disclosures of Personal Data to Third Parties
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We may disclose personal data to:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>OnlyFans and/or other content creation platforms, where you direct us to provide your personal data;</li>
              <li style={{ marginBottom: '12px' }}>our employees, contractors and/or related entities;</li>
              <li style={{ marginBottom: '12px' }}>IT service providers, data storage, web-hosting and server providers such as Amazon Web Services;</li>
              <li style={{ marginBottom: '12px' }}>marketing or advertising providers such as MailChimp;</li>
              <li style={{ marginBottom: '12px' }}>professional advisors, bankers, auditors, our insurers and insurance brokers;</li>
              <li style={{ marginBottom: '12px' }}>our existing or potential agents or business partners;</li>
              <li style={{ marginBottom: '12px' }}>anyone to whom our business or assets (or any part of them) are, or may (in good faith) be, transferred;</li>
              <li style={{ marginBottom: '12px' }}>courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you;</li>
              <li style={{ marginBottom: '12px' }}>courts, tribunals, regulatory authorities and law enforcement officers, as required or authorised by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights; and</li>
              <li style={{ marginBottom: '12px' }}>any other third parties as required or permitted by law, such as where we receive a summons.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Overseas Transfers
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Where we disclose personal data to the third parties listed above, these third parties may store, transfer or access personal data outside of the United Kingdom. The level of data protection in countries outside of the United Kingdom may be less comprehensive than what is offered in the United Kingdom. Where we transfer your personal data outside of the United Kingdom, we will perform those transfers using appropriate safeguards in accordance with the requirements of applicable data protection laws and we will protect the transferred personal data in accordance with this Privacy Policy. This includes:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>only transferring your personal data to countries that have been deemed by applicable data protection laws to provide an adequate level of protection for personal data; or</li>
              <li style={{ marginBottom: '12px' }}>including standard contractual clauses in our agreements with third parties that are overseas.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Data Retention
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
            </p>
            <p style={{ marginBottom: '24px' }}>
              To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Your Rights and Controlling Your Personal Data
            </h2>
            <p style={{ marginBottom: '24px' }}>
              <strong>Your choice:</strong> Please read this Privacy Policy carefully. If you provide personal data to us, you understand we will collect, hold, use and disclose your personal data in accordance with this Privacy Policy. You do not have to provide personal data to us, however, if you do not, it may affect our ability to provide our Services to you and your use of our Services.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Information from third parties:</strong> If we receive personal data about you from a third party, we will protect it as set out in this Privacy Policy. If you are a third party providing personal data about somebody else, you represent and warrant that you have such person's consent to provide the personal data to us.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Access, correction, processing and portability:</strong> You may request details of the personal data that we hold about you and how we process it (commonly known as a "data subject request"). You may also have a right in accordance with applicable data protection law to have your personal data rectified or deleted, to restrict our processing of that information, to object to decisions being made based on automated processing where the decision will produce a legal effect or a similarly significant effect on you, to stop unauthorised transfers of your personal data to a third party and, in some circumstances, to have personal data relating to you transferred to you or another organisation.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Unsubscribe:</strong> To unsubscribe from our e-mail database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Withdraw consent:</strong> Where we are relying on consent to process your personal data, you have the right to withdraw your consent at any time. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Complaints:</strong> If you wish to make a complaint, please contact us using the details below and provide us with full details of the complaint. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK regulator for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Storage and Security
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We are committed to ensuring that the personal data we collect is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures, to safeguard and secure personal data and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.
            </p>
            <p style={{ marginBottom: '24px' }}>
              While we are committed to security, we cannot guarantee the security of any information that is transmitted to or by us over the Internet. The transmission and exchange of information is carried out at your own risk.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Cookies
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We may use cookies on our website from time to time. Cookies are text files placed in your computer's browser to store your preferences and to provide a better user experience. Cookies, by themselves, do not tell us your email address or other personally identifiable information. If you choose to provide our online services with personal data, this data may be linked to the data stored in the cookie. Where required by law, we will always seek your consent before placing any non-essential cookies on your device. For more information about the cookies we use, or to update your consent preferences, please see our{' '}
              <Link to="/cookie-policy" style={{ color: '#f85838', textDecoration: 'none' }}>
                Cookie Policy
              </Link>.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Links to Other Websites
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Our website may contain links to other party's websites. We do not have any control over those websites and we are not responsible for the protection and privacy of any personal data which you provide whilst visiting those websites. Those websites are not governed by this Privacy Policy.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Amendments
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We may change this Privacy Notice from time to time. We will notify you if we make a significant change to this Privacy Notice, by contacting you through the contact details you have provided to us and by publishing an updated version on our website.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Contact Information
            </h2>
            <p style={{ marginBottom: '24px' }}>
              For any questions or notices, please contact us at:
            </p>
            <p style={{ marginBottom: '8px' }}>
              Image Angel Technology Limited, a company registered in England and Wales, with company number, 16031209
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

            <p style={{ fontSize: '14px', color: '#8f877d', fontStyle: 'italic' }}>
              © LegalVision Law UK Ltd
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
