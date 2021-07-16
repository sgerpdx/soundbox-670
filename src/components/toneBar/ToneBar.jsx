import React from 'react';
import styles from '../app/app.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Keyboard from '../keyboard/Keyboard';

export default function ToneBar() {
  return (
    <section className={styles.bottomRow}>
      <nav className={styles.navLowerLeft}>
        <ArrowBackIosIcon />
      </nav>
      <div className={styles.footnoteArea}>
        <Keyboard />
      </div>
      <nav className={styles.navLowerRight}>
        <ArrowForwardIosIcon />
      </nav>
    </section>
  );
}
