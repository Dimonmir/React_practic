import React from 'react';
import styles from './preview.css';

interface IPreview {
    src: string,
    alt: string,
}

export function Preview(imgInfo: IPreview) {
  return (
      <div className={styles.preview}>
        <img alt={imgInfo.alt} className={styles.previewImg}
             src={imgInfo.src}
        />
      </div>
  );
}
