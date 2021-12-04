import strings from '@shared/constants/strings';
import {
  getDayName, getHourWithUnit, getDayRelativeName, getDateMonthDayString,
} from '@shared/utilities/date';

describe('shared/utilities/date', () => {
  describe('getDayName', () => {
    it.each([
      ['Sunday', new Date(2000, 10, 5)],
      ['Tuesday', new Date(1998, 1, 3)],
    ])('should return %s', (expected, input) => {
      const dayName = getDayName(input);
      expect(dayName).toBe(expected);
    });
  });

  describe('getHourWithUnit', () => {
    it.each([
      ['10 PM', new Date(2000, 10, 5, 22)],
      ['9 AM', new Date(1998, 1, 3, 9)],
    ])('should return %s', (expected, input) => {
      const hourWithDigit = getHourWithUnit(input);
      expect(hourWithDigit).toBe(expected);
    });
  });

  describe('getDayRelativeName', () => {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    it.each([
      [strings.date.TODAY, new Date()],
      [strings.date.TOMORROW, tomorrowDate],
      ['Monday', new Date(2025, 1, 3, 9)],
      ['Tuesday', new Date(1998, 1, 3, 9)],
    ])('should return %s', (expected, input) => {
      const relativeDayName = getDayRelativeName(input);
      expect(relativeDayName).toBe(expected);
    });
  });

  describe('getDateMonthDayString', () => {
    it.each([
      ['Monday, March 3, 6 PM', new Date(2025, 2, 3, 18)],
      ['Tuesday, February 3, 9 AM', new Date(1998, 1, 3, 9)],
    ])('should return %s', (expected, input) => {
      const monthDayString = getDateMonthDayString(input);
      expect(monthDayString).toBe(expected);
    });
  });
});
