import React from 'react';
import * as Tone from 'tone';
import styles from './keyboard.css';

const synth = new Tone.Synth().toDestination();
const aSynth = new Tone.AMSynth().toDestination();
const fSynth = new Tone.FMSynth().toDestination();
const nSynth = new Tone.NoiseSynth().toDestination();
let now = Tone.now();

const loopA = new Tone.Loop((time) => {
  aSynth.triggerAttackRelease('C2', '8n', time);
}, '4n').start(0);

const loopB = new Tone.Loop((time) => {
  fSynth.triggerAttackRelease('C4', '8n', time);
}, '4n').start(now + 4);

const synthArray = [synth, aSynth, fSynth, nSynth];

const handleToneClick = () => {
  // const currentSynth = synthArray[Math.round(Math.random() * 4)];
  // currentSynth.triggerAttackRelease('C4', now + 1);

  Tone.Transport.start();
  Tone.Transport.bpm.rampTo(120, 10);

  // now = Tone.now();
  // Tone.now gets the current time of AudioContext
};

const handleMuteClick = () => {
  Tone.Transport.stop();
};

export default function Keyboard() {
  return (
    <>
      <div className={styles.toneTestWrapper}>
        <button className={styles.tone} onClick={handleToneClick}>
          tone
        </button>
        <button className={styles.tone} onClick={handleMuteClick}>
          kill
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
