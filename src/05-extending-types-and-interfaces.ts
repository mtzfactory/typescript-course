/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Extending Types And Interfaces
 */

/**
 * Interface extends
 */
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

/**
 * Intersection types
 */
type WithColor = {
  color: string;
};

type WithCircle = {
  radius: number;
};

type WithColoredCircle = WithColor & WithCircle;

type AnotherColorfulCircle = Colorful & Circle;

const cc1: ColorfulCircle = {
  color: '#00ff0f',
  radius: 42,
};

const cc2: WithColoredCircle = {
  color: '#00ff0f',
  radius: 42,
};

const cc3: AnotherColorfulCircle = {
  color: '#00ff0f',
  radius: 42,
};
