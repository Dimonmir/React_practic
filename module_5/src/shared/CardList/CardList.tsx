import React from 'react';
import styles from './cardlist.css';
import {Card} from "./Card";


export function CardList() {
  return (
      <ul className={styles.cardList}>
          <Card textContent={
              {
                  text: 'Противоположная точка зрения на данную проблему',
                  postUrl: 'post_url',
                  user: {
                      name: 'Лаврентьев Дмитрий',
                      avatarUrl: 'https://www.pinclipart.com/picdir/big/38-388919_computer-icons-user-profile-clip-art-avatar-user.png',
                      userUrl: 'user_url',
                      postDate: '05.01.2020',
                  }
              }}
              img = {{
                  src: 'https://cdn.dribbble.com/users/2367860/screenshots/15697262/media/867d8a5d92ef767912b0d5afc5f48251.png?compress=1&resize=1000x750',
                  alt: 'Картинка поста'
              }}
          />
      </ul>
  );
}