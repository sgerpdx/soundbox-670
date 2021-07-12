import React from 'react';
import * as Tone from 'tone';
import styles from './keyboard.css';

const synth = new Tone.Synth().toDestination();
const aSynth = new Tone.AMSynth().toDestination();
const fSynth = new Tone.FMSynth().toDestination();
const nSynth = new Tone.NoiseSynth().toDestination();
let now = Tone.now();

const synthArray = [synth, aSynth, fSynth, nSynth];

const handleToneClick = () => {
  const currentSynth = synthArray[Math.round(Math.random() * 4)];
  currentSynth.triggerAttackRelease('C4', now + 1);
  // currentSynth.triggerRelease(now + 1);

  // now = Tone.now();
  // Tone.now gets the current time of AudioContext
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
