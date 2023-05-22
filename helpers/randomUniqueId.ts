/**
 * Generates a random uniqueId and returns a unique combination of current timestamp and a random string
 * 
 * @returns a string
 */

const randomUniqueId = () => {
  const timeStamp = Date.now().toString(36);
  const randomString = Math.random().toString(36);
  return timeStamp + randomString;
};

export { randomUniqueId };