export {};

declare global {
  interface ObjectConstructor {
    typedKeys<T extends object>(o: T): (keyof T)[];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Object.typedKeys = Object.keys as any;
