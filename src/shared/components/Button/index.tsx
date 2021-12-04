import type { ChildrenProp } from '@shared/types/general';
import Image from 'next/image';

import classNames from 'classnames';
import loadingIcon from '@/assets/icons/loading.svg';

import styles from './Button.module.scss';

interface ButtonProps extends ChildrenProp {
  onClick?: () => void;
  isSubmit?: boolean;
  isLoading?: boolean;
}

const IMAGE_SIZE = 15;

export default function Button({
  children, onClick, isSubmit = false, isLoading = false,
}: ButtonProps) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  const loadingElem = isLoading ? <Image width={IMAGE_SIZE} height={IMAGE_SIZE} src={loadingIcon} alt="Loading" /> : null;

  return (
    <button
      className={classNames(styles.Button, {
        [styles['Button--loading']]: isLoading,
      })}
      type={isSubmit ? 'submit' : 'button'}
      onClick={handleClick}
    >
      {loadingElem}
      {children}
    </button>
  );
}
