import React from 'react';
import * as Tone from 'tone';
import styles from './keyboard.css';

const synth = new Tone.Synth().toDestination();
let now = Tone.now();

const handleToneClick = () => {
  synth.triggerAttack('C4', now);
  synth.triggerRelease(now + 1);

  now = Tone.now();
};

export default function Keyboard() {
  return (
    <>
      <div className={styles.toneTestWrapper}>
        <button className={styles.tone} onClick={handleToneClick}>
          tone
        </button>
      </div>
      <section className={styles.keyboardWrapper}>
        <button className={styles.key}>C</button>
        <button className={styles.key}>D</button>
        <button className={styles.key}>E</button>
        <button className={styles.key}>F</button>
        <button className={styles.key}>G</button>
        <button className={styles.key}>A</button>
        <button className={styles.key}>B</button>
        <button className={styles.key}>C</button>
      </section>
    </>
  );
}
