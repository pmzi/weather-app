export default function forecastDtTextToDate(dtText: string): Date {
  const [dtTextYear, dtTextTime] = dtText.split(' ');
  const [year, month, day] = dtTextYear.split('-').map(Number);
  const [hour, minute, seconds] = dtTextTime.split(':').map(Number);

  return new Date(year, month - 1, day, hour, minute, seconds);
}
