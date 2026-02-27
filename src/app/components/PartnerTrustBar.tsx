import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import enoughLogo from 'figma:asset/bd933f227eec97abf1303dcd3e9116afdba4ba6b.png';
import nnedvLogo from 'figma:asset/fde8b33ad9cb93eebc39073a4739d3b5bb2dec2b.png';
import safetyNetLogo from 'figma:asset/2c75d09f8c22673c73192ff33859cb2624ffe81e.png';
import ourWaveLogo from 'figma:asset/8fde8b66cb9003bd399872f226514823c57fa520.png';
import ofcomLogo from 'figma:asset/54a6fcd318172f755dc863bc9d8534eb024a00b0.png';
import dicLogo from 'figma:asset/7b4d5207f291b44e677bf1299278762414161820.png';
import dsitLogo from 'figma:asset/5d85e4a96d74ce786fe90ce049d082c96f8221a4.png';
import notYourPornLogo from 'figma:asset/50b2b7d8f3c4fd7b371f89b72c7dcd7d32a7c58b.png';
import josephineButlerLogo from 'figma:asset/ead1e21aaa5921962428e158345fecc1c53a148a.png';
import revengePornHelplineLogo from 'figma:asset/964ba167ed316f9c3a7197f4b2dd766628e32cef.png';
import plaiirLogo from '../../imports/Plaiir_Logo_Black.svg';

const enterEasing = [0, 0, 0.2, 1];

const partners = [
  { name: 'Ofcom', logo: ofcomLogo, url: 'https://www.ofcom.org.uk/' },
  { name: 'DSIT', logo: dsitLogo, url: null },
  { name: 'Not Your Porn', logo: notYourPornLogo, url: 'https://notyourporn.com' },
  { name: 'The Josephine Butler Society', logo: josephineButlerLogo, url: 'https://www.josephinebutlersociety.org' },
  { name: 'Plaiir', logo: plaiirLogo, url: 'https://www.plaiir.com' },
  { name: 'Revenge Porn Helpline', logo: revengePornHelplineLogo, url: 'https://revengepornhelpline.org.uk' },
  { name: 'SafetyNet', logo: safetyNetLogo, url: 'https://www.techsafety.org' },
  { name: 'NNEDV', logo: nnedvLogo, url: 'https://nnedv.org' },
  { name: 'Our Wave', logo: ourWaveLogo, url: 'https://www.ourwave.org/en' },
  { name: 'Enough', logo: enoughLogo, url: 'https://enough.campaign.gov.uk' },
  { name: 'Digital Intimacy Coalition', logo: dicLogo, url: null },
];

export function PartnerTrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.h2
          className="text-center mb-10 md:mb-16 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: 'clamp(26px, 3.5vw, 32px)',
            fontWeight: 800,
            color: '#221f1f',
          }}
        >
          Trusted By.
        </motion.h2>

        {/* Logo Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center max-w-[1200px] mx-auto"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                ease: enterEasing,
                delay: i * 0.05,
              }}
              className="transition-all duration-350"
              style={{
                filter: 'grayscale(1) opacity(0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60px',
                padding: '0 8px',
                width: '100%',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0) opacity(1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(1) opacity(0.6)';
              }}
            >
              {partner.url ? (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '100%',
                    textDecoration: 'none'
                  }}
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '48px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#8f877d',
                        textAlign: 'center',
                      }}
                    >
                      {partner.name}
                    </div>
                  )}
                </a>
              ) : (
                <>
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '48px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        fontFamily: "'Aktiv Grotesk', sans-serif",
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#8f877d',
                        textAlign: 'center',
                      }}
                    >
                      {partner.name}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}