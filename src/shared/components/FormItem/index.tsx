import { ClassNameProp } from '@shared/types/general';
import classnames from 'classnames';
import styles from './FormItem.module.scss';

interface FormItemProps extends ClassNameProp {
  htmlFor?: string;
  label?: string;
  children: React.ReactNode;
}

export default function FormItem({
  htmlFor, label, children, className,
}: FormItemProps) {
  const labelElem = label ? (
    <label className={styles.FormItem__label} htmlFor={htmlFor}>
      {label}
    </label>
  ) : null;

  return (
    <div className={classnames(styles.FormItem, className)}>
      {labelElem}

      {children}
    </div>
  );
}
