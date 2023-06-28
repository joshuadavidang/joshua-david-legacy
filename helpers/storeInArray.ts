/**
 * Loops through an array and returns the index in a new array
 * @param content: any
 * @returns an array
 */

const storeInArray = (content: any) => {
  const arrayData = [];
  for (let i = 0; i < content.length; i++) {
    arrayData.push(i);
  }
  return arrayData;
};

export { storeInArray };