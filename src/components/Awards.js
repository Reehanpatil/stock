import React from 'react';
import styles from '../styles/Awards.module.css';

const Awards = () => {
  return (
    <div className={styles.container}>
      {/* Awards & Recognitions Section */}
      <section className={styles.awardsSection}>
        <h2 className={styles.title}>Awards & Recognitions</h2>
        <div className={styles.awards}>
          {/* Award 1 */}
          <div className={styles.award}>
            <img
              src='/14.webp'
              alt='Bharat Inclusion Initiative'
              className={styles.logo}
            />
            <p>First cohort at Financial Inclusion Lab – CIIE (IIMA).</p>
          </div>
          {/* Award 2 */}
          <div className={styles.award}>
            <img src='/15.webp' alt='InFinite 20' className={styles.logo} />
            <p>
              Among the top 20 startups selected for StartupIndia initiative of
              government and RBL bank.
            </p>
          </div>
          {/* Award 3 */}
          <div className={styles.award}>
            <img src='/16.webp' alt='Inc42 & IAMAI' className={styles.logo} />
            <p>
              Featured in the list of top 30 merging fintech companies in India,
              released by Inc42 and IAMAI.
            </p>
          </div>
          {/* Award 4 */}
          <div className={styles.award}>
            <img src='/17.webp' alt='InsurTech 100' className={styles.logo} />
            <p>InsurTech 100 list – Fintech Global (2018).</p>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className={styles.investorsSection}>
        <h2 className={styles.title}>Investors</h2>
        <div className={styles.investors}>
          <img src='/18.webp' alt='EMVC' className={styles.investorLogo} />
          <img src='/19.webp' alt='Flourish' className={styles.investorLogo} />
          <img src='/20.webp' alt='Inflexor' className={styles.investorLogo} />
          <img
            src='/21.webp'
            alt='Omidyar Network'
            className={styles.investorLogo}
          />
          <img src='/22.webp' alt='Omnivore' className={styles.investorLogo} />
          <img
            src='/23.webp'
            alt='Siana Capital'
            className={styles.investorLogo}
          />
        </div>
      </section>
    </div>
  );
};

export default Awards;
