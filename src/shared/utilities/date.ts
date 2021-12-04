import strings from '@shared/constants/strings';

const LOCALE = 'en-US';

export function isToday(date: Date) {
  const today = new Date();
  return date.getDate() === today.getDate()
    && date.getMonth() === today.getMonth()
    && date.getFullYear() === today.getFullYear();
}

function isTomorrow(date: Date) {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return date.getDate() === tomorrow.getDate()
    && date.getMonth() === tomorrow.getMonth()
    && date.getFullYear() === tomorrow.getFullYear();
}

export function getDayName(date: Date) {
  return date.toLocaleDateString(LOCALE, { weekday: 'long' });
}

export function getHourWithUnit(date: Date) {
  return date.toLocaleString(LOCALE, { hour: 'numeric', hour12: true });
}

export function getDayRelativeName(date: Date) {
  if (isToday(date)) {
    return strings.date.TODAY;
  }
  if (isTomorrow(date)) {
    return strings.date.TOMORROW;
  }
  return getDayName(date);
}

export function getDateMonthDayString(date: Date) {
  return date.toLocaleDateString(LOCALE, {
    weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric',
  });
}
