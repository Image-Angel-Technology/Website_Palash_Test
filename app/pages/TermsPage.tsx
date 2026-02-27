import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Website Terms of Use — Image Angel';
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
                Website Terms of Use
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
            Website Terms of Use
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
            Last updated: 6 November 2024
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
              This website (Site) is operated by Image Angel Technology Limited, a company registered in England and Wales, with company registration number 07195559 (we, our or us). These website terms of use (Terms) apply to your use of, and access to, the Site.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Information and Availability
            </h2>
            <p style={{ marginBottom: '24px' }}>
              While we use reasonable attempts to ensure the accuracy and completeness of the content and materials on the Site (Content), to the extent permitted by law (including the Consumer Rights Act 2015), we do not warrant the accuracy, completeness or suitability of any of the Content. The Content may be subject to change without notice and we do not undertake to keep the Site up-to-date. The Content is factual information only, is not comprehensive and is for general information purposes only. We also do not warrant that access to the Site will be uninterrupted, error-free or free from viruses.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Intellectual Property Rights
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Unless otherwise indicated, we own or license the Content and all intellectual property rights (including any copyright, registered or unregistered designs, illustrations, artwork, patents or trade mark or logo rights and domain names) displayed or used on the Site (Our Intellectual Property).
            </p>
            <p style={{ marginBottom: '24px' }}>
              We authorise you to access and use the Site solely for your own personal, non-commercial use and to display, print and download the Content onto your personal device provided that you do not remove any copyright notice included in Our Intellectual Property.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Subject to the above, your use of, and access to, the Site and the Content does not grant or transfer to you any rights, title or interest to Our Intellectual Property. Unless otherwise permitted in these Terms, you must not:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>copy or use, in whole or in part, any of Our Intellectual Property;</li>
              <li style={{ marginBottom: '12px' }}>reproduce, retransmit, distribute, display, disseminate, sell, publish, broadcast or circulate any of Our Intellectual Property; or</li>
              <li style={{ marginBottom: '12px' }}>breach any intellectual property rights connected with Our Intellectual Property, including altering or modifying any of Our Intellectual Property, causing any of Our Intellectual Property to be framed or embedded in another website or platform, or creating derivative works from Our Intellectual Property.</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              Nothing in the above clause restricts your ability to publish, post or repost Content or Our Intellectual Property on your social media page or blog, provided that:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>you do not assert that you are the owner of the Content or Our Intellectual Property;</li>
              <li style={{ marginBottom: '12px' }}>unless explicitly agreed by us in writing, you do not assert that you are endorsed or approved by us;</li>
              <li style={{ marginBottom: '12px' }}>you do not damage or take advantage of our reputation, including in a manner that is illegal, unfair, misleading or deceptive; and</li>
              <li style={{ marginBottom: '12px' }}>you comply with all other terms of these Terms.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Conduct We Don't Accept
            </h2>
            <p style={{ marginBottom: '24px' }}>
              You must not do or attempt to do anything that is unlawful, which is prohibited by applicable law, which we would consider inappropriate or which might bring us or the Site into disrepute. This includes:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>anything that would constitute a breach of an individual's privacy (including uploading private or personal data without an individual's consent) or any other legal rights;</li>
              <li style={{ marginBottom: '12px' }}>using the Site to defame, harass, threaten, menace or offend any person;</li>
              <li style={{ marginBottom: '12px' }}>using the Site for unlawful purposes;</li>
              <li style={{ marginBottom: '12px' }}>interfering with any user of the Site;</li>
              <li style={{ marginBottom: '12px' }}>tampering with or modifying the Site, knowingly transmitting viruses or other disabling features, or damaging or interfering with the Site, including using trojan horses, viruses or piracy or programming routines that may damage or interfere with the Site;</li>
              <li style={{ marginBottom: '12px' }}>using the Site to send unsolicited electronic messages;</li>
              <li style={{ marginBottom: '12px' }}>using data mining, robots, screen scraping or similar data gathering and extraction tools on the Site; or</li>
              <li style={{ marginBottom: '12px' }}>facilitating or assisting a third party to do any of the above acts.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              User Content
            </h2>
            <p style={{ marginBottom: '24px' }}>
              <strong>Posting Content:</strong> Users may have the opportunity to upload or post content, including text, images, videos, and other multimedia files to the Site (User Content), subject to our approval and these Terms. We reserve the right, at our sole discretion, to allow or prohibit the posting and hosting of User Content on our Site.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Licence to Use User Content:</strong> By uploading or posting User Content on this Site, you grant us a worldwide, non-exclusive, royalty-free, sublicensable, and transferable licence to use, reproduce, distribute, display, and perform the User Content in connection with the Site and our (and our successors' and affiliates') business, including without limitation for promoting and redistributing part or all of the Site (and derivative works thereof) in any media formats and through any media channels.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>User Responsibilities:</strong> You are solely responsible for your User Content and the consequences of posting or publishing it. You confirm that you own or have the necessary licences, rights, consents, and permissions to publish the User Content you submit.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Content Accuracy and Compliance:</strong> You agree that any User Content you provide does not and will not breach any law or infringe the rights of any third party, including copyright, trade mark, privacy, and data protection laws.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>Removal Rights:</strong> We reserve the right to edit or remove any User Content at any time without prior notice, for any reason, and without liability to you or any other party. This can include User Content that we believe violates these Terms or our policies, or which we find otherwise objectionable or inappropriate.
            </p>
            <p style={{ marginBottom: '24px' }}>
              <strong>No Obligation to Publish:</strong> We are not obligated to publish any User Content on our Site and can remove it in our discretion, without notice.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Third Party Sites
            </h2>
            <p style={{ marginBottom: '24px' }}>
              The Site may contain links to websites operated by third parties. Unless we tell you otherwise, we do not control, endorse or approve, and are not responsible for, the content on those websites. We recommend that you make your own investigations with respect to the suitability of those websites. If you purchase goods or services from a third party website linked from the Site, such third party provides the goods and services to you, not us.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              When Our Liability is Not Limited
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Nothing in these Terms is intended or operates to limit or exclude our liability in respect of which it would be unlawful for us to do so, including for:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>death or personal injury caused by our negligence; and</li>
              <li style={{ marginBottom: '12px' }}>fraud or fraudulent misrepresentation.</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              When Our Liability is Limited
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Where you purchase products or services from us, different limitations and exclusions of liability will apply to liability arising as a result of the supply of any products or services to you, which will be set out in our Terms and Conditions.
            </p>
            <p style={{ marginBottom: '24px' }}>
              If you are a business user of our Site, then we exclude all implied conditions, warranties, representations or other terms that may apply to the Site or the Content. Subject to the above clause ("When our liability is not limited"), but despite anything else to the contrary, to the maximum extent permitted by law, we exclude all liability for any loss or damage of any kind (including consequential loss, indirect loss, loss of profit, loss of benefit, loss of opportunity or loss of reputation) whether under statute, contract, equity, tort (including negligence), indemnity or otherwise arising out of or in connection with the Site or the Content, including in connection with your use of, or inability to use, the Site, or your use of or reliance on any Content.
            </p>
            <p style={{ marginBottom: '24px' }}>
              If you are a consumer under the Consumer Rights Act 2015 and any defective digital Content that we have supplied to you damages a device or digital content belonging to you, and this is caused by our failure to use reasonable care and skill, we will either repair the damage (within a reasonable period of time) or pay you compensation. Our total liability for such damage will be limited to us repairing the damage or pay you the compensation. However, we will not be liable for damage that was caused by you failing to have in place the minimum system requirements advised by us.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Privacy
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We respect your privacy and understand protecting your personal information is important. Our Privacy Policy (available on the Site) sets out how we will collect and handle your personal information.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              What Happens if We Discontinue the Site
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We may, at any time and without notice, discontinue the Site (in whole or in part), or exclude any person from using our Site.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Which Laws Govern These Terms
            </h2>
            <p style={{ marginBottom: '24px' }}>
              These Terms are governed by the laws of England and Wales. Each party irrevocably and unconditionally submits to the exclusive jurisdiction of the courts operating in England and Wales and any courts entitled to hear appeals from those courts and waives any right to object to proceedings being brought in those courts, except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Changes to These Terms
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We may, at any time and at our discretion, vary these Terms by publishing the varied terms on the Site. We recommend you check the Site regularly to ensure you are aware of our current terms.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Contact Information
            </h2>
            <p style={{ marginBottom: '24px' }}>
              For any questions and notices, please contact us at:
            </p>
            <p style={{ marginBottom: '8px' }}>
              Image Angel Technology Limited, a company registered in England and Wales. Our company registration number is 07195559.
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
