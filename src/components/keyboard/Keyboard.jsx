import React from 'react';
import styles from './keyboard.css';

export default function Keyboard() {
  return (
    <>
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
