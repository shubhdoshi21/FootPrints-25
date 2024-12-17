import React from 'react';
import styles from './Loader.module.css';

import { Ranchers } from "@next/font/google";
const ranchers = Ranchers({ subsets: ["latin"], weight: "400" });

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div className={styles['loading-text']}>
        <span className={styles['loading-text-words']}>F</span>
        <span className={styles['loading-text-words']}>o</span>
        <span className={styles['loading-text-words']}>o</span>
        <span className={styles['loading-text-words']}>t</span>
        <span className={styles['loading-text-words']}>P</span>
        <span className={styles['loading-text-words']}>r</span>
        <span className={styles['loading-text-words']}>i</span>
        <span className={styles['loading-text-words']}>n</span>
        <span className={styles['loading-text-words']}>t</span>
        <span className={styles['loading-text-words']}>s</span>
        {/* <span className={styles['loading-text-words']}>'</span>
        <span className={styles['loading-text-words']}>2</span>
        <span className={styles['loading-text-words']}>5</span> */}
      </div>
    </div>
  );
};

export default Loader;
