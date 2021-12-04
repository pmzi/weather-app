import strings from '@shared/constants/strings';
import { ChildrenProp } from '@shared/types/general';

import styles from './layout.module.scss';

export default function Layout({ children }: ChildrenProp) {
  return (
    <div className={styles.Layout}>
      <div className={styles.Layout__content}>
        <header>
          <h1 className={styles.Layout__title}>
            {strings.TITLE}
          </h1>
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
