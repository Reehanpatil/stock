import React from 'react';
import styles from '../styles/Achievements.module.css';

const Achievements = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Achievements</h2>
      <p className={styles.subtitle}>
        Disrupting Rural Insurance thru an Assisted Tech Model – Leveraging
        technology and our rural networks
      </p>
      <div className={styles.achievements}>
        {/* Achievement 1 */}
        <div className={styles.achievement}>
          <div className={styles.iconWrapper}>
            <img src='/10.svg' alt='Villages Covered' className={styles.icon} />
          </div>
          <h3 className={styles.value}>22,000+</h3>
          <p className={styles.label}>Villages Covered</p>
        </div>
        {/* Achievement 2 */}
        <div className={styles.achievement}>
          <div className={styles.iconWrapper}>
            <img
              src='/11.svg'
              alt='Customers Enrolled'
              className={styles.icon}
            />
          </div>
          <h3 className={styles.value}>2 million+</h3>
          <p className={styles.label}>Customers Enrolled</p>
        </div>
        {/* Achievement 3 */}
        <div className={styles.achievement}>
          <div className={styles.iconWrapper}>
            <img src='/12.svg' alt='Claim Settled' className={styles.icon} />
          </div>
          <h3 className={styles.value}>1 million+</h3>
          <p className={styles.label}>Claim Settled</p>
        </div>
        {/* Achievement 4 */}
        <div className={styles.achievement}>
          <div className={styles.iconWrapper}>
            <img src='/13.svg' alt='Local Partners' className={styles.icon} />
          </div>
          <h3 className={styles.value}>4,000+</h3>
          <p className={styles.label}>Local Partners</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
