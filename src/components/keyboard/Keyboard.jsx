import React from 'react';
import * as Tone from 'tone';
import ToneTest from './ToneTest';
import styles from './keyboard.css';

//const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const synth = new Tone.Synth().toDestination();
let now = Tone.now();

// const handlePolyphonyClick = () => {
//   synth.triggerAttack('D4', now);
//   synth.triggerAttack('F4', now + 0.5);
//   synth.triggerAttack('A4', now + 1);
//   synth.triggerRelease(['D4', 'F4', 'A4'], now + 3);
// };

const handleCClickLow = () => {
  synth.triggerAttackRelease('C4', now + 0.5);
};

const handleDClick = () => {
  synth.triggerAttackRelease('D4', now + 0.5);
};

const handleEClick = () => {
  synth.triggerAttackRelease('E4', now + 0.5);
};

const handleFClick = () => {
  synth.triggerAttackRelease('F4', now + 0.5);
};

const handleGClick = () => {
  synth.triggerAttackRelease('G4', now + 0.5);
};

const handleAClick = () => {
  synth.triggerAttackRelease('A4', now + 0.5);
};

const handleBClick = () => {
  synth.triggerAttackRelease('B4', now + 0.5);
};

const handleCClickHi = () => {
  synth.triggerAttackRelease('C5', now + 0.5);
};

export default function Keyboard() {
  return (
    <>
      <ToneTest />
      <section className={styles.keyboardWrapper}>
        <button className={styles.key} onClick={handleCClickLow}>
          C
        </button>
        <button className={styles.key} onClick={handleDClick}>
          D
        </button>
        <button className={styles.key} onClick={handleEClick}>
          E
        </button>
        <button className={styles.key} onClick={handleFClick}>
          F
        </button>
        <button className={styles.key} onClick={handleGClick}>
          G
        </button>
        <button className={styles.key} onClick={handleAClick}>
          A
        </button>
        <button className={styles.key} onClick={handleBClick}>
          B
        </button>
        <button className={styles.key} onClick={handleCClickHi}>
          C
        </button>
      </section>
    </>
  );
}
