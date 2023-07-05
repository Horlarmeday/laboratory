export function generateRandomNumbers(num) {
  const randomNumbers = Math.floor(
    // eslint-disable-next-line no-restricted-properties
    Math.pow(10, num - 1) + Math.random() * 9 * Math.pow(10, num - 1)
  );
  return `${randomNumbers}`;
}
