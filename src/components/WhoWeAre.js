import React from 'react';
import styles from '../styles/WhoWeAre.module.css';

const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      {/* Left Content Section */}
      <div className={styles.leftContent}>
        <h2 className={styles.title}>Who We Are</h2>
        <p className={styles.description}>
          GramCover is a composite insurance broking firm focused on insurance
          product design and tech-enabled distribution for rural India. We have
          adopted a unique technology-led distribution & servicing model well
          suited for rural setup to minimize the inefficiencies and transaction
          costs involved in the process.
        </p>
      </div>

      {/* Right Icons Section */}
      <div className={styles.rightIcons}>
        <div className={styles.pillar}>
          <img src='/1.webp' alt='Technology' className={styles.icon} />
          <p className={styles.pillarText}>Technology</p>
        </div>
        <div className={styles.pillar}>
          <img
            src='/2.webp'
            alt='Assisted Tech Model'
            className={styles.icon}
          />
          <p className={styles.pillarText}>Assisted Tech Model</p>
        </div>
        <div className={styles.pillar}>
          <img src='/3.webp' alt='Custom Products' className={styles.icon} />
          <p className={styles.pillarText}>Custom Products</p>
        </div>
        <div className={styles.pillar}>
          <img src='/4.webp' alt='POSP Partners' className={styles.icon} />
          <p className={styles.pillarText}>POSP Partners</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
