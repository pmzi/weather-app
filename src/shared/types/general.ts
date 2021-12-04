export interface ClassNameProp {
  className?: string;
}

export interface ChildrenProp {
  children?: React.ReactNode;
}

export type GetArgsType<T> = T extends (...args: infer U) => void ? U : never;
export type GetFirstArgType<T> = GetArgsType<T>[0];
export type GetFunctionReturnType<T> = T extends (...args: any[]) => infer U ? U : never;
