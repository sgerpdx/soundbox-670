import React from 'react';
import styles from './app.css';
import ReactLogo from '../../assets/1280px-React-icon.svg.png';

function App() {
  return (
    <main className={styles.mainArea}>
      <section className={styles.topRow}>
        <nav className={styles.navUpperLeft}>Left</nav>
        <div className={styles.titleArea}>App Name</div>
        <nav className={styles.navUpperRight}>Right</nav>
      </section>
      <section className={styles.middleRow}>
        <div className={styles.leftColumn}>Left</div>
        <div className={styles.middleColumn}>
          {' '}
          <figure className={styles.contentWrapper}>
            <img src={ReactLogo} height="100" />
          </figure>
          <p>Basic App Functioning</p>
        </div>

        <div className={styles.rightColumn}>Right</div>
      </section>
      <section className={styles.bottomRow}>
        <nav className={styles.navLowerLeft}>Left</nav>
        <div className={styles.footnoteArea}>Lower Middle</div>
        <nav className={styles.navLowerRight}>Right</nav>
      </section>
    </main>
  );
}

export default App;
