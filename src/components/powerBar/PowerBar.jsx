import React from 'react';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import styles from '../app/app.css';

export default function PowerBar() {
  return (
    <section className={styles.topRow}>
      <nav className={styles.navUpperLeft}>
        <PowerSettingsNewIcon />
      </nav>
      <div className={styles.titleArea}>Soundbox 670</div>
      <nav className={styles.navUpperRight}>
        <div className={styles.powerLED}></div>
      </nav>
    </section>
  );
}
