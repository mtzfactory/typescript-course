/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Creating Types from Types (I)
 */

/**
 * Generic Object Types
 */
interface Box<Type> {
  contents: Type;
}
// Think of Box as a template for a real type, where Type is a placeholder that will
// get replaced with some other type.

const boxA: Box<string> = { contents: 'hello' };
boxA.contents;

interface Apple {
  variety: string;
}

type AppleBox = Box<Apple>;

// Type Composition
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
const canBeNull: OneOrManyOrNullStrings = null;
const canBeString: OneOrManyOrNullStrings = 'Trainline';
const canBeArray: OneOrManyOrNullStrings = ['hola'];

/**
 * Generics in functions
 */
function identity<GenericType>(arg: GenericType): GenericType {
  return arg;
}

const output = identity<string>('myString');

/**
 * Generic Constraints
 */
function _loggingIdentity<MyType>(arg: MyType): MyType {
  console.log(arg.length);
  return arg;
}

interface Lengthwise {
  length: number;
}

function loggingIdentity<MyType extends Lengthwise>(arg: MyType): MyType {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity(3);
loggingIdentity([1, 2, 3]);
loggingIdentity('Trainline');
