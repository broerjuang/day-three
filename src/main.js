// @flow

import findProduct from './findProduct';
import createProduct from './createProduct';
import type Product from './createProduct';
import compare from './compare';

let tempDB = [];

function saveToDB(db: Array<Product>, name: string, price: number) {
  let newProduct: Product = createProduct(name, price);
  db.push(newProduct);

  if (tempDB.length < db.length) {
    console.log(`${name} has failed to save to database`);
  }
  console.log(`${name} with the price of ${price} has been inserted to the database`);
}



// TESTING

console.log(
  'find product of unexist object name >> ',
  compare(findProduct(tempDB, 'sepatu'), {}) === false
);

saveToDB(tempDB, 'sepatu', 12000);

// console.log(tempDB)
console.log(
  'find product of saved object object name >> ',
  compare(findProduct(tempDB, 'sepatu'), tempDB[0]) === true
);






/*
type User = {
  name: string;
  profession: string;
};

function getGreeting(time: Date, name: string) {
  if (time.getHour) {
    return name;
  }
}

getGreeting(new Date(), 'juang');

function createPerson(name: string, profession: string): User {
  return {
    name,
    profession,
  };
}

function sayHello(person: User) {
  let {name, profession} = person;
  console.log(`Hello ${name}. You are a ${profession}`);
}

let yoan = createPerson('Yoan', 'Coder');


sayHello(yoan);

*/
