import React from 'react';
import styles from '../styles/HybridBusinessModel.module.css';

const HybridBusinessModel = () => {
  return (
    <>
      <div className={styles.content}>
        <h2 className={styles.heading}>Hybrid Business Model</h2>
        <p className={styles.description}>
          GramCover is on the path of bringing an innovative approach for
          insurance distribution in rural India with the effective use of
          technology.
        </p>
      </div>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <img
            src='/5.webp'
            alt='Hybrid Business Model Illustration'
            className={styles.leftImage}
          />
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.point}>
            <img
              src='/6.webp'
              alt='Mobile Enrollment'
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3>Mobile Enrollment</h3>
              <p>
                Customer onboarding | Policy download | Payment collection |
                Claim processing | SMS notification
              </p>
            </div>
          </div>

          <div className={styles.point}>
            <img src='/7.webp' alt='Partnership' className={styles.icon} />
            <div className={styles.content}>
              <h3>Partnership</h3>
              <p>
                Village-level entrepreneurs | Social impact organizations |
                Financial inclusion agencies | Not-for-profit organizations |
                Government bodies
              </p>
            </div>
          </div>

          <div className={styles.point}>
            <img
              src='/8.webp'
              alt='Back-to-Back Integration'
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3>Back to Back Integration</h3>
              <p>
                Direct document upload & processing API integration with
                Insurance companies
              </p>
            </div>
          </div>

          <div className={styles.point}>
            <img
              src='/9.webp'
              alt='Comprehensive Dashboards'
              className={styles.icon}
            />
            <div className={styles.content}>
              <h3>Comprehensive Dashboards</h3>
              <p>
                Interactive dashboard for insurance companies | Real-time
                updates, reports & insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HybridBusinessModel;
