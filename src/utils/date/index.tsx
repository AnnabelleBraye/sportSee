/**
 * Get the first letter of the day passed in parameters
 * @param dayNumber { Number } day (0 = Sunday, 1 = Monday...)
 * @returns { String }
 */
export const getFirstLetterDay = (dayNumber: number): string => {
  const date = new Date(0, 0, dayNumber);
  
  const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
  const shortDay: string = date.toLocaleDateString('fr-FR', options);

  return shortDay[0].toLocaleUpperCase();
}
