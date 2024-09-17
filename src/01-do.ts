/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * DO
 */

/**
 * Use type inference for type annotations on variables.
 *
 * Inference is the capacity to discover the type of a variable.
 */

let aString = 'Trainline';
// No type annotation needed -- 'aString' inferred as type 'string'

let aBoolean = true;
// No type annotation needed -- 'aBoolean' inferred as type 'boolean'

let aNumber = 13;
// No type annotation needed -- 'aNumber' inferred as type 'number'

/**
 * Use Literal Types
 */
const bString = 'Trainline';
const bBoolean = false;
const bNumber = 1;

/**
 * Use Array Types
 */
const arrayOne: number[] = [1, 2, 3];
const arrayTwo: Array<number> = [1, 2, 3];

// Note that [number] is a different thing; refer to the section on Tuples.

/**
 * Use Tuple Types
 */
const tuple: [number, string, boolean] = [1, 'hola', false];

/**
 * Use Object Types
 */
const x: { x: number; y?: number } = { x: 10 };
const xy: { x: number; y?: number } = { x: 100, y: 50 };
// Note the ? to indicate the property is optional.

const user: { readonly first: string; readonly last: string } = {
  first: 'Perro',
  last: 'Sanche',
};
user.first = 'Pedro';
// Properties can also be marked as readonly for TypeScript.
// While it won’t change any behavior at runtime, a property marked
// as readonly can’t be written to during type-checking

const anyObject: { [index: number]: string } = {
  0: 'hola',
  1: 'adios',
  2: 'bienvenido',
};

/**
 * Use Type Aliases
 *
 * A type alias is exactly that - a name for any type.
 */
type Point = {
  x: number;
  y: number;
};
type Tuple = [string, boolean];

// Type aliases and interfaces are very similar, and in many cases you
// can choose between them freely. The key distinction is that a type
// cannot be re-opened to add new properties vs an interface which is
// always extendable.

/**
 * Use Union Types
 */
type Id = number | string;
type NinjaTurtles = 'Leonardo' | 'Raphael' | 'Michelangelo' | 'Donatello';
