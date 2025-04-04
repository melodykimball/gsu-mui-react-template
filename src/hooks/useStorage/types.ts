import type { Dispatch, SetStateAction } from "react";

export type UseStorageProps<T> = {
  key: string;
  initialValue: (() => T) | T;
  parse?: ((value: string) => T) | undefined;
  stringify?: ((value: T) => string) | undefined;
  storage?: Storage | undefined;
};

export type GetStorageValueProps<T> = {
  key: string;
  parse: (value: string) => T;
  storage: Storage;
};

export type SetStorageValueProps<T> = {
  key: string;
  value: (() => T) | T;
  stringify: (value: T) => string;
  storage: Storage;
};

export type UseStorage<T> = [T, Dispatch<SetStateAction<T>>, () => void];
