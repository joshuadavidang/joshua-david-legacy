/**
 * Generates a random uniqueId and returns a unique combination of current timestamp and a random string
 *
 * @returns a string
 */

const randomUniqueId = (): string => {
  const timeStamp = Date.now().toString(36);
  const randomString = Math.random().toString(36);
  return timeStamp + randomString + Math.floor(Math.random() * 999);
};

export { randomUniqueId };
