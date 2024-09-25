/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * DO LESS
 */

/**
 * Use Type Assertions
 *
 * Sometimes you will have information about the type of a value that TypeScript
 * can’t know about.
 */
const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// -- Preparation
declare const expr: any;
type T = { a: 1; b: 2; c: 3 };
// -- End of preparation

const a = expr as any as T;
const b = expr as unknown as T;
