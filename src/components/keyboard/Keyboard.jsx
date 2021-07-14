import React from 'react';
import * as Tone from 'tone';
import ToneTest from './ToneTest';
import styles from './keyboard.css';

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
//const nSynth = new Tone.NoiseSynth().toDestination();
let now = Tone.now();

const handleKeyClick = () => {
  synth.triggerAttack('D4', now);
  synth.triggerAttack('F4', now + 0.5);
  synth.triggerAttack('A4', now + 1);
  synth.triggerRelease(['D4', 'F4', 'A4'], now + 3);
};

export default function Keyboard() {
  return (
    <>
      <ToneTest />
      <section className={styles.keyboardWrapper}>
        <button className={styles.key} onClick={handleKeyClick}>
          C
        </button>
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
