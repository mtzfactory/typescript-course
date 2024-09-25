/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Creating Types from Types (II)
 */

/**
 * Keyof Type Operator
 */

// The keyof operator takes an object type and produces a string or numeric literal union of its keys.

type Point = { x: number; y: number };
type P = keyof Point;
const point: P = 'x';

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

/**
 * Typeof Type Operator
 */
let s = 'hello';
let n: typeof s;

const pointA: Point = { x: 1, y: 1 };
const pointB: typeof pointA = { x: 10, y: 20 };

/**
 * Indexed Access Types
 */
type Citizen = { age: number; name: string; alive: boolean };
type Alived = Citizen['alive'];

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Age = (typeof MyArray)[number]['age'];

// Or

type Person = (typeof MyArray)[number];
type Age2 = Person['age'];

/**
 * Conditional Types
 */
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type WhatAmI = Dog extends Animal ? number : string;

// Another example:
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

/**
 * Mapped Types
 */
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;

// Mapping modifiers
//
// Remove "readonly"
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Remove "optional"
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

// Key remapping
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

interface Persona {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Persona>;

/**
 * Template Literal Types
 */
type World = 'world';
type Greeting = `hello ${World}`;

// Another example:
type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
