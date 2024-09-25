/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import type { ViewProps } from 'react-native';
import { Pressable, Text, View } from 'react-native';

/**
 * Typescript in React
 *
 * @link https://react-typescript-cheatsheet.netlify.app/
 */

interface BaseComponentProps {
  message: string;
}

function BaseComponent({ message }: BaseComponentProps) {
  return <div>{message}</div>;
}

/**
 * Do
 */

/**
 * How to get component props.
 */
type Props = React.ComponentProps<typeof BaseComponent>;

/**
 * How to define a children prop.
 */
type WithChildren<T> = T & {
  children: React.ReactNode;
};

type ComponentPropsWithChildren = React.PropsWithChildren<BaseComponentProps>;
//type ComponentPropsWithChildren = WithChildren<BaseComponentProps>;

function ComponentWithChildren(props: ComponentPropsWithChildren) {
  const { message, children } = props;

  return (
    <div>
      <p>{message}</p>
      <div>{children}</div>
    </div>
  );
}

/**
 * How to extend from an element.
 */
type WithoutChildren<T> = Omit<T, 'children'>;

interface MyViewProps extends WithoutChildren<ViewProps> {
  message?: string;
}

function MyViewWithoutChildren(props: MyViewProps) {
  const { message = 'Default message', ...rest } = props;

  return <View {...rest}>{message}</View>;
}

// Another example:
type PressableWithoutRef = React.ComponentPropsWithoutRef<typeof Pressable>;

interface MyPressableComponentProps
  extends WithoutChildren<PressableWithoutRef> {
  caption: string;
}

function MyPressableComponent(props: MyPressableComponentProps) {
  const { caption, ...rest } = props;

  return (
    <Pressable {...rest}>
      <Text>{caption}</Text>
    </Pressable>
  );
}

// Another example:
interface FancyButtonProps {
  children?: React.ReactNode;
  type: 'submit' | 'button';
}
export type Ref = HTMLButtonElement;

export const FancyButton = React.forwardRef<Ref, FancyButtonProps>(
  function FancyButtonRef(props, ref) {
    const { children, type } = props;

    return (
      <button ref={ref} type={type}>
        {children}
      </button>
    );
  }
);

type A = React.ComponentPropsWithRef<typeof FancyButton>;

/**
 * Don't
 */
const ComponentA: React.FC = (props) => {
  return <div>{JSON.stringify(props)}</div>;
};

// At least do:
const ComponentB: React.FC<BaseComponentProps> = (props) => {
  const { message } = props;

  return <div>{message}</div>;
};
