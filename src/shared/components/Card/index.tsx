import { ChildrenProp, ClassNameProp } from '@shared/types/general';
import classNames from 'classnames';

import styles from './card.module.scss';

interface CardProps extends ChildrenProp, ClassNameProp {}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={classNames(styles.Card, className)}>
      {children}
    </div>
  );
}
