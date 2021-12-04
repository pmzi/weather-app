import strings from '@shared/constants/strings';

export default function pageTitle(title: string) {
  return `${title} | ${strings.APPEND_STRING}`;
}
