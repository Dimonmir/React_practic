import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src="https://www.pinclipart.com/picdir/big/38-388919_computer-icons-user-profile-clip-art-avatar-user.png" alt="avatar"/>
            <a href="#user-url" className={styles.username}> Лаврентьев Дмитрий </a>
          </div>
          <span className={styles.createdAt}>
                <span className={styles.publishLabel}> опубликовано </span>
                4 часа назад
            </span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Следует отметить, что новая модель организационной деятельности следует
          </a>
        </h2>
      </div>
  );
}
