import React, { useState, useEffect } from 'react';
import styles from './app.css';
import ToneBar from '../toneBar/ToneBar';
import PowerBar from '../powerBar/PowerBar';
import BlueSaturn from '../../assets/blue-saturn_500.jpg';

function App() {
  return (
    <main className={styles.mainArea}>
      <PowerBar />
      <section className={styles.middleRow}>
        <div className={styles.leftColumn}>Left</div>
        <div className={styles.middleColumn}>
          <figure className={styles.contentWrapper}>
            <img src={BlueSaturn} height="100" />
          </figure>
          <nav className={styles.soundControls}>
            <button>mode 1</button>
            <button>mode 2</button>
            <button>mode 3</button>
          </nav>
        </div>

        <div className={styles.rightColumn}>Right</div>
      </section>
      <ToneBar />
    </main>
  );
}

export default App;
