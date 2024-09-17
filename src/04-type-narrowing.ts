/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Type Narrowing
 *
 * Working With Unions Types
 */
type ID = number | string;

// The problem...
function addId(id: ID) {
  return id.toUpperCase();
}

// Use the typeof type guards.
function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

// Use the in operator narrowing.
type Horse = { gallop: () => void };
type Grasshopper = { hop: () => void };

function move(animal: Horse | Grasshopper) {
  if ('gallop' in animal) {
    return animal.gallop();
  }
  return animal.hop();
}

// Use the instanceof narrowing.
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// Use type predicates: user-defined type guard function whose return type is a
// type predicate

// -- Preparation
type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird;
// -- End of preparation

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

// Use discriminated unions.
interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  base: number;
  height: number;
}

type Shape = Square | Triangle;

function getShapeArea(shape: Shape) {
  if (shape.kind === 'square') {
    return shape.sideLength ** 2;
  }
  return (shape.base + shape.height) / 2;
}
