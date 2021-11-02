import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img alt="Картинка поста" className={styles.previewImg}
             src="https://cdn.dribbble.com/users/2367860/screenshots/15697262/media/867d8a5d92ef767912b0d5afc5f48251.png?compress=1&resize=1000x750"
        />
      </div>
  );
}
