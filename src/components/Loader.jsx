import React from 'react';
import styles from './Loader.module.css';

import { Press_Start_2P } from '@next/font/google';
const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400' });

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={`${styles['loading-text']} ${pressStart.className}`}>
        <span className={styles['loading-text-words']}>F</span>
        <span className={styles['loading-text-words']}>O</span>
        <span className={styles['loading-text-words']}>O</span>
        <span className={styles['loading-text-words']}>T</span>
        <span className={styles['loading-text-words']}>P</span>
        <span className={styles['loading-text-words']}>R</span>
        <span className={styles['loading-text-words']}>I</span>
        <span className={styles['loading-text-words']}>N</span>
        <span className={styles['loading-text-words']}>T</span>
        <span className={styles['loading-text-words']}>S</span>
      </div>
    </div>
  );
};

export default Loader;
