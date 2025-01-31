import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* Main Content Section */}
      <div className={styles.mainContent}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            De-Risking <br /> Rural India
          </h1>
          <div className={styles.scarecrowContainer}>
            <img
              src='/footer3.png'
              alt='Scarecrow'
              className={styles.scarecrowImage}
            />
          </div>
        </div>

        {/* Center Section */}
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>MOTOR INSURANCE</li>
            <li>CROP INSURANCE</li>
            <li>SELL INSURANCE</li>
            <li>REINSURANCE</li>
            <li>CONTACT</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2 className={styles.contactTitle}>GET IN TOUCH</h2>
          <p className={styles.contactText}>
            We are looking forward to hear from you!
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.contactRow}>
              <img src='/29.webp' alt='Address' className={styles.icon} />
              <p>
                Address: GramCover Insurance Brokers Private Limited, Plot No.
                10 & 11, Prius Heights, Sector 125, Noida - 201301
              </p>
            </div>
            <div className={styles.contactRow}>
              <img src='/30.webp' alt='Phone' className={styles.icon} />
              <p>Phone: +91 9311672463</p>
            </div>
            <div className={styles.contactRow}>
              <img src='/31.webp' alt='Email' className={styles.icon} />
              <p>General Queries: info@gramcover.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p className={styles.licenseInfo}>
          License No. 634, IRDA Composite Broker Code: IRDA/ CB 691/17, Valid
          till: 10/12/2023, CIN: U66000DL2016PTC292037, Principal Officer: PK
          Bhagat
        </p>
        <p className={styles.disclaimer}>
          Disclaimer: Insurance is the Subject matter of Solicitation. For more
          details on risk factors, Terms & Conditions please read the sales
          brochure carefully before purchasing the policy. To get an NOC
          certificate <a href='/'>click here</a>.
        </p>
        <p className={styles.copyright}>
          © GramCover Insurance Brokers Pvt Ltd 2016–2023. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
