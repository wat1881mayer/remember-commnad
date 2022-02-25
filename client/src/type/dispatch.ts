export type StringDispatch = (
  value: string | ((prevState: string) => string)
) => void;

export type BooleanDispatch = (
  value: boolean | ((prevState: boolean) => boolean)
) => void;

export type NumberDispatch = (
  value: number | ((prevState: number) => number)
) => void;
