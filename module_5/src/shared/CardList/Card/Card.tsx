import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";
import {Dropdown} from "../../Dropdown";
import {MenuDropdown} from "../Menu";

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
          <Dropdown button={<Menu />}>
              <MenuDropdown />
          </Dropdown>
        <Controls />
      </li>
  );
}
