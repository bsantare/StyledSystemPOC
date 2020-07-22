export type ValidKeyTypes = string | number;
export type AsUnion<T> = T extends ReadonlyArray<infer C>
  ? C extends ValidKeyTypes
    ? T[number]
    : never
  : T extends object
  ? keyof T
  : never;
