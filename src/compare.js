// @flow


export default function compare(one: any, two: any): boolean {
  if (one == null || two == null) {
    return one === two;
  }
  if (Array.isArray(one) && Array.isArray(two)) {
    return compareArray(one, two);
  }
  if (typeof one === 'object' && typeof two === 'object') {
    return compareObject(one, two);
  }
  return (one === two);
}

function compareObject(one: Object, two: Object): boolean {
  let keysOne = Object.keys(one);
  let keysTwo = Object.keys(two);
  if (keysOne.length !== keysTwo.length) {
    return false;
  }
  for (let key of keysOne) {
    if (!two.hasOwnProperty(key)) {
      return false;
    }
    let isEqual = compare(one[key], two[key]);
    if (!isEqual) {
      return false;
    }
  }
  return true;
}

function compareArray(arrayOne: Array<any>, arrayTwo: Array<any>): boolean {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  let index = 0;
  for (let valueOne: any of arrayOne) {
    let valueTwo = arrayTwo[index];
    let isEqual = compare(valueOne, valueTwo);
    if (!isEqual) {
      return false;
    }
    index = index + 1;
  }
  return true;
}
