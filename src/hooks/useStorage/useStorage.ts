import { useState } from "react";
import { type UseStorage } from "./types";
import getStorageValue from "./getStorageValue";
import { setStorageValue } from "./setStorageValue";

export function useStorage<T>(
  key: string,
  initialValue: (() => T) | T,
  storage: Storage = window.localStorage
): UseStorage<T> {
  const [stateValue, setStateValue] = useState<T>(
    () => getStorageValue<T>(key, storage) ?? setStorageValue(key, initialValue, storage)
  );

  return [
    stateValue,
    (value) => setStateValue((prev) => setStorageValue(key, value instanceof Function ? value(prev) : value, storage)),
    () => storage.removeItem(key),
  ];
}

export default useStorage;
