import { ClassNameProp } from '@shared/types/general';
import onKeyDownEnter from '@shared/utilities/onKeyDownEnter';
import weatherIconURL from '@shared/utilities/weatherIconURL';
import classNames from 'classnames';
import Image from 'next/image';

import styles from './forecastDaysHoursItem.module.scss';

interface ForecastDaysHoursItemProps extends ClassNameProp {
  isActive?: boolean;
  hour: string;
  icon: string;
  degree: number;
  onSelect: () => void;
}

export default function ForecastDaysHoursItem(
  {
    isActive = false, hour, degree, icon, onSelect, className,
  } :ForecastDaysHoursItemProps,
) {
  return (
    <div
      onClick={onSelect}
      onKeyDown={(e) => onKeyDownEnter(e, onSelect)}
      tabIndex={0}
      role="button"
      className={classNames(styles.ForecastDaysHoursItem, {
        [styles['ForecastDaysHoursItem--active']]: isActive,
      }, className)}
    >
      <span>
        {hour}
      </span>
      <div className={styles.ForecastDaysHoursItem__imageWrapper}>
        <Image alt="Weather Icon" width="30" height="30" src={weatherIconURL(icon)} />
      </div>
      <span>
        {degree}
        °C
      </span>
    </div>
  );
}
