import React from 'react';
import styles from '../../../../module_5/src/shared/Header/header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";

export function Header() {
  return (
    <header className={styles.header}>
        <SearchBlock />
        <ThreadTitle />
        <SortBlock />
    </header>
  );
}
