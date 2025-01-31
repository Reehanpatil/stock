import React from 'react';
import styles from '../styles/NetworkInsurers.module.css';

const NetworkInsurers = () => {
  return (
    <div className={styles.container}>
      {/* Insurer Network Section */}
      <section className={styles.networkSection}>
        <h2 className={styles.title}>
          Strong Network Of More Than 20+ Leading Indian Insurers
        </h2>
        <div className={styles.network}>
          <img src='/24.webp' alt='Manipal Cigna' className={styles.logo} />
          <img
            src='/25.webp'
            alt='National Insurance'
            className={styles.logo}
          />
          <img src='/26.webp' alt='Reliance' className={styles.logo} />
          <img src='/27.webp' alt='Royal Sundaram' className={styles.logo} />
          <img
            src='/28.webp'
            alt='SBI General Insurance'
            className={styles.logo}
          />
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <p className={styles.contactText}>
          Maximize your reach in Rural India with our network of local partners
          spread across 8000+ villages in India. If you need assistance, please
          don’t hesitate to reach out to us.
        </p>
        <form className={styles.form}>
          <div className={styles.formField}>
            <input
              type='email'
              placeholder='Enter your email address'
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formField}>
            <select className={styles.select} required>
              <option value='' disabled selected>
                Select Enquiry Type
              </option>
              <option value='general'>General</option>
              <option value='technical'>Technical</option>
              <option value='business'>Business</option>
            </select>
          </div>
          <button type='submit' className={styles.button}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default NetworkInsurers;
