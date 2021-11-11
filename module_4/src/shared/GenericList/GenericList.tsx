import React from 'react';
import styles from './genericlist.css';

interface IItem{
  value: string,
  id: string,
}

interface IMyListProps {
  list: IItem[];
  onClick: (id: string) => void,
}

export function MyList({ list, onClick }: IMyListProps) {
  return (
    <ul>
      {list.map((item, index) => (
          <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
      ))}
    </ul>
  );
}