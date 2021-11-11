import React from 'react';
import styles from '../../../../module_5/src/shared/Content/content.css';

class IContentProps {
  children?: React.ReactNode;
}

export function Content({ children }: IContentProps) {
  return (
      <main className={styles.content}>
        {children}
      </main>
  );
}
