import { useState } from "react";
import { type UseStorageProps, type UseStorage } from "./types";
import getStorageValue from "./getStorageValue";
import { setStorageValue } from "./setStorageValue";

export function useStorage<T>(props: UseStorageProps<T>): UseStorage<T> {
  const { key, initialValue } = props;
  const parse = props.parse ?? ((value: string) => JSON.parse(value) as T);
  const stringify = props.stringify ?? ((value: T) => JSON.stringify(value));
  const storage = props.storage ?? window.localStorage;

  const [stateValue, setStateValue] = useState<T>(
    () =>
      getStorageValue<T>({
        key,
        parse,
        storage,
      }) ??
      setStorageValue({
        key,
        value: initialValue,
        stringify,
        storage,
      })
  );

  return [
    stateValue,
    (value) =>
      setStateValue((prev) =>
        setStorageValue({
          key,
          value: value instanceof Function ? value(prev) : value,
          stringify,
          storage,
        })
      ),
    () => storage.removeItem(key),
  ];
}

export default useStorage;
