export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export function devide(a, b) {
  return a/b;
}

// user.js

export default function greet() {
  console.log("Hello Chandra");
}

// Iterators
// An iterator is an object that allows you to access values one by one.
// it is used by next()
export const numbers = [10, 20, 30];

export const iterator = numbers[Symbol.iterator]();

// Generators : 

// A generator is a special function that can pause and continue execution.
// it uses : 
// function * , yeild


export function* numbers1() {
  yield 10;
  yield 20;
  yield 30;
}

export const generator = numbers1();

// Classes and Objects — Introduction
// A class is a blueprint for creating objects.
// An object contains data and functions related to that data.