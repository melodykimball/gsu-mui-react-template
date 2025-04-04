import { type Dispatch, type SetStateAction } from "react";

export type SelectValuesStatus = "pending" | "ok" | "error";

export type SelectValuesMap<T> = Map<string, [boolean, T]>;

export interface SelectValues<T> {
  status: SelectValuesStatus;
  values: SelectValuesMap<T>;
}

export interface UseSelectValueProps<T> {
  fetch: () => Promise<SelectValuesMap<T>>;
  state: [SelectValues<T>, Dispatch<SetStateAction<SelectValues<T>>>];
}

export interface UseSelectValues<T> extends SelectValues<T> {
  select: (id: string | string[], selected?: boolean | undefined) => void;
}
