import React from 'react';
import styles from './app.css';
import Keyboard from '../keyboard/Keyboard';
import BlueSaturn from '../../assets/blue-saturn_500.jpg';
// import AcUnitIcon from '@material-ui/icons/AcUnit';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function App() {
  return (
    <main className={styles.mainArea}>
      <section className={styles.topRow}>
        <nav className={styles.navUpperLeft}>
          <PowerSettingsNewIcon />
        </nav>
        <div className={styles.titleArea}>Soundbox 670</div>
        <nav className={styles.navUpperRight}>
          <div className={styles.powerLED}></div>
        </nav>
      </section>
      <section className={styles.middleRow}>
        <div className={styles.leftColumn}>Left</div>
        <div className={styles.middleColumn}>
          {' '}
          <figure className={styles.contentWrapper}>
            <img src={BlueSaturn} height="100" />
          </figure>
          <nav className={styles.soundControls}>
            {' '}
            <p>select mode:</p>
            <button>mode 1</button>
            <button>mode 2</button>
            <button>mode 3</button>
          </nav>
        </div>

        <div className={styles.rightColumn}>Right</div>
      </section>
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
    </main>
  );
}

export default App;
