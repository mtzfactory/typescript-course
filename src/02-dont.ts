/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * DON'T
 */

/**
 * Don’t use any type
 */
let anyIsAny: any = 'Hola';
anyIsAny = 1;

// In TypeScript, any is a type that represents a value of unknown type.

// It’s a special type that bypasses TypeScript’s type checking for a
// specific value or property.

// When you declare a variable, property, or parameter as any, you’re
// essentially telling TypeScript to ignore its type and treat it as a generic value.

/**
 * Don’t use object type
 */
function doSomething(o: object) {}

doSomething({ a: true });
doSomething([1, 2, 3]);

// The TypeScript object type represents all values that are not in primitive types (string,
// number, bigint, boolean, symbol, null, or undefined).

/**
 * Don't use Function type
 */
type MyFunctionA = Function;

// Better if we do:
type MyFunctionB = () => void;
