import React from 'react';
import styles from '../../../../../module_5/src/shared/CardList/Card/card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

interface ICard {
    textContent: {
        text: string,
        postUrl: string,
        user: {
            name: string,
            avatarUrl: string,
            userUrl: string,
            postDate: string,
       }
    }
    img: {
        src: string,
        alt: string
    }
}

export function Card({textContent, img}:ICard) {
  return (
      <li className={styles.card}>
        <TextContent Content={textContent}/>
        <Preview src={img.src} alt={img.alt}/>
        <Menu />
        <Controls />
      </li>
  );
}
