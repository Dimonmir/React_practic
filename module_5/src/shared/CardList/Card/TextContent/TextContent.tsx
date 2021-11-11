import React from 'react';
import styles from './textcontent.css';

interface ITextContent{
    Content: {
        text: string,
        postUrl: string,
        user: {
            name: string,
            avatarUrl: string,
            userUrl: string,
            postDate: string,
        }
    }
}

export function TextContent({Content}:ITextContent) {
  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src={Content.user.avatarUrl} alt="avatar"/>
            <a href={Content.user.userUrl} className={styles.username}> {Content.user.name}</a>
          </div>
          <span className={styles.createdAt}>
                <span className={styles.publishLabel}> опубликовано </span>
              {Content.user.postDate}
            </span>
        </div>
        <h2 className={styles.title}>
          <a href={Content.postUrl} className={styles.postLink}>
              {Content.text}
          </a>
        </h2>
      </div>
  );
}
